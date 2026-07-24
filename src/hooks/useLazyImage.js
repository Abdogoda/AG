// useLazyImage.js - Custom hook for lazy loading images using Intersection Observer API
import { useEffect, useRef, useState, useMemo } from 'react';

const DEFAULT_PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3C/svg%3E';

const DEFAULT_OPTIONS = {};

/**
 * Custom hook for lazy loading images
 *
 * Uses Intersection Observer API for performance
 * Automatically loads image when it's about to be visible
 *
 * @param {string} src - Image source URL
 * @param {string} placeholder - Placeholder image (optional)
 * @param {Object} customOptions - Intersection Observer options
 * @returns {Object} { ref, imageSrc, isLoaded, error }
 */
export const useLazyImage = (
  src,
  placeholder = DEFAULT_PLACEHOLDER,
  customOptions = DEFAULT_OPTIONS
) => {
  const ref = useRef(null);
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  // Extract primitive properties to maintain a stable memoized options object
  const rootMargin = customOptions?.rootMargin || '50px';
  const threshold = customOptions?.threshold || 0;
  const root = customOptions?.root || null;

  const observerOptions = useMemo(
    () => ({
      rootMargin,
      threshold,
      root,
    }),
    [rootMargin, threshold, root]
  );

  useEffect(() => {
    // Skip if no src provided
    if (!src) {
      if (imageSrc !== placeholder) {
        setImageSrc(placeholder);
      }
      if (isLoaded) {
        setIsLoaded(false);
      }
      return;
    }

    // Skip if already loaded
    if (imageSrc === src && isLoaded) {
      return;
    }

    let isMounted = true;
    const currentRef = ref.current;

    // Fallback if IntersectionObserver is unsupported
    if (typeof IntersectionObserver === 'undefined') {
      setImageSrc(src);
      setIsLoaded(true);
      return;
    }

    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Load image when element is about to be visible
        if (entry.isIntersecting) {
          const img = new Image();

          img.onload = () => {
            if (!isMounted) return;
            setImageSrc(src);
            setIsLoaded(true);
            setError(null);
            if (entry.target) observer.unobserve(entry.target);
          };

          img.onerror = () => {
            if (!isMounted) return;
            const err = new Error(`Failed to load image: ${src}`);
            setError(err);
            setIsLoaded(false);
            if (entry.target) observer.unobserve(entry.target);
          };

          img.src = src;
        }
      });
    }, observerOptions);

    // Observe the ref element
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup using captured ref value
    return () => {
      isMounted = false;
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [src, imageSrc, isLoaded, observerOptions, placeholder]);

  return { ref, imageSrc, isLoaded, error };
};

/**
 * LazyImage Component - Easy-to-use lazy loading image component
 *
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text
 * @param {string} placeholder - Placeholder image
 * @param {Object} props - Additional img element props (className, style, etc.)
 */
export const LazyImage = ({
  src,
  alt = '',
  placeholder,
  className = '',
  style = {},
  onLoad,
  onError,
  ...props
}) => {
  const { ref, imageSrc, isLoaded, error } = useLazyImage(src, placeholder);

  return (
    <img
      ref={ref}
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoaded ? 'lazy-loaded' : 'lazy-loading'}`}
      style={{
        opacity: isLoaded ? 1 : 0.5,
        transition: 'opacity 0.3s ease-in-out',
        ...style,
      }}
      onLoad={() => {
        if (onLoad) onLoad();
      }}
      onError={() => {
        if (onError) onError(error);
      }}
      {...props}
    />
  );
};

export default useLazyImage;


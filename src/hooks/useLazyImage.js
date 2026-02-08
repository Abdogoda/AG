// useLazyImage.js - Custom hook for lazy loading images using Intersection Observer API
import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for lazy loading images
 * 
 * Uses Intersection Observer API for performance
 * Automatically loads image when it's about to be visible
 * 
 * @param {string} src - Image source URL
 * @param {string} placeholder - Placeholder image (optional)
 * @param {Object} options - Intersection Observer options
 * @returns {Object} { ref, imageSrc, isLoaded, error }
 */
export const useLazyImage = (
  src,
  placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3C/svg%3E',
  options = {}
) => {
  const ref = useRef(null);
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Skip if no src provided
    if (!src) {
      setError(new Error('No image source provided'));
      return;
    }

    // Skip if already loaded
    if (imageSrc === src && isLoaded) {
      return;
    }

    // Create intersection observer
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // Load image when element is about to be visible
          if (entry.isIntersecting) {
            const img = new Image();

            img.onload = () => {
              setImageSrc(src);
              setIsLoaded(true);
              setError(null);
              observer.unobserve(entry.target);
            };

            img.onerror = () => {
              const err = new Error(`Failed to load image: ${src}`);
              setError(err);
              setIsLoaded(false);
              observer.unobserve(entry.target);
            };

            img.src = src;
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
        threshold: 0,
        ...options // Allow custom options
      }
    );

    // Observe the ref element
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      observer.disconnect();
    };
  }, [src, imageSrc, isLoaded]);

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
        ...style
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

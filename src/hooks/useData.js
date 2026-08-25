import { useState, useEffect } from 'react';
import cacheService from '../utils/cacheService';
import { getFallbackData } from '../utils/fallbackData';

const useData = (dataFile) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isUsingFallback, setIsUsingFallback] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const cacheKey = `data-${dataFile}`;
      const cachedData = cacheService.get(cacheKey);

      // Serve cached data immediately for speed if available
      if (cachedData && isMounted) {
        setData(cachedData);
        setIsUsingFallback(false);
        setLoading(false);
      }

      try {
        // Fetch fresh data in background (cache-busted query param prevents HTTP browser caching)
        const basePath = process.env.PUBLIC_URL || '';
        const response = await fetch(`${basePath}/data/${dataFile}.json?t=${Date.now()}`);
        if (!response.ok) throw new Error(`Failed to load ${dataFile}`);
        const result = await response.json();

        if (isMounted) {
          const ttl = 24 * 60 * 60 * 1000; // 24 hours
          cacheService.set(cacheKey, result, ttl);
          setData(result);
          setIsUsingFallback(false);
        }
      } catch (err) {
        if (isMounted && !cachedData) {
          console.warn(
            `Error loading ${dataFile}, using fallback data:`,
            err.message
          );
          const fallbackData = getFallbackData(dataFile);
          setData(fallbackData);
          setError(err.message);
          setIsUsingFallback(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [dataFile]);

  return { data, loading, error, isUsingFallback };
};

export default useData;

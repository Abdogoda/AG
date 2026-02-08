import { useState, useEffect } from 'react';
import cacheService from '../utils/cacheService';
import { getFallbackData } from '../utils/fallbackData';

const useData = (dataFile) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isUsingFallback, setIsUsingFallback] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check cache first (24 hour TTL for static JSON data)
        const cacheKey = `data-${dataFile}`;
        const cachedData = cacheService.get(cacheKey);

        if (cachedData) {
          setData(cachedData);
          setIsUsingFallback(false);
          setLoading(false);
          return;
        }

        // Fetch from server if not in cache
        const basePath = process.env.PUBLIC_URL || '';
        const response = await fetch(`${basePath}/data/${dataFile}.json`);
        if (!response.ok) throw new Error(`Failed to load ${dataFile}`);
        const result = await response.json();

        // Cache the data (24 hours TTL)
        const ttl = 24 * 60 * 60 * 1000; // 24 hours
        cacheService.set(cacheKey, result, ttl);

        setData(result);
        setIsUsingFallback(false);
      } catch (err) {
        // Use fallback data instead of showing error
        console.warn(`Error loading ${dataFile}, using fallback data:`, err.message);
        const fallbackData = getFallbackData(dataFile);
        setData(fallbackData);
        setError(err.message);
        setIsUsingFallback(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dataFile]);

  return { data, loading, error, isUsingFallback };
};

export default useData;

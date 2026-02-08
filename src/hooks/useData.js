import { useState, useEffect } from 'react';
import cacheService from '../utils/cacheService';

const useData = (dataFile) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check cache first (24 hour TTL for static JSON data)
        const cacheKey = `data-${dataFile}`;
        const cachedData = cacheService.get(cacheKey);

        if (cachedData) {
          setData(cachedData);
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
      } catch (err) {
        setError(err.message);
        console.error(`Error loading data:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dataFile]);

  return { data, loading, error };
};

export default useData;

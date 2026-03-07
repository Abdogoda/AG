// useYoutubeData Hook - Standardized YouTube data fetching with automatic caching
import { useState, useEffect } from 'react';

/**
 * Custom hook for fetching YouTube data with automatic caching
 * @param {Function} fetchFunction - YouTube API function to call
 * @param {Array} params - Parameters to pass to the fetch function
 * @param {Array} dependencies - Effect dependencies
 * @returns {Object} - { data, loading, error }
 */
const useYoutubeData = (fetchFunction, params = [], dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Call the fetch function with parameters
        const result = await fetchFunction(...params);

        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          console.error('Error fetching YouTube data:', err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [fetchFunction, params, ...dependencies]);

  return { data, loading, error };
};

export default useYoutubeData;

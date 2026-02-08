import { useState, useEffect } from 'react';

const useData = (dataFile) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const basePath = process.env.PUBLIC_URL || '';
        const response = await fetch(`${basePath}/data/${dataFile}.json`);
        if (!response.ok) throw new Error(`Failed to load ${dataFile}`);
        const result = await response.json();
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

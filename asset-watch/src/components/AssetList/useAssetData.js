import { useState, useEffect } from 'react';
import { fetchTopPools } from '../../api/geckoApi';

export const useAssetData = (networkId) => {
  const [pools, setPools] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchTopPools(networkId);
        // Process data if necessary, or just set the raw data
        setPools(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    if (networkId) {
      getData();
    }
  }, [networkId]);

  return { pools, loading, error };
};

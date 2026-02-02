import { useState, useEffect } from 'react';


export const usePriceChartData = (networkId, poolAddress, timeframe, aggregate) => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      if (!poolAddress || !networkId) return;

      try {
        setLoading(true);
        const ohlcv = await fetchOHLCVData(networkId, poolAddress, timeframe, aggregate);
        
        const processedData = ohlcv.map((item) => {
          const [timestamp, open, high, low, close, volume] = item;
          return {
            date: new Date(timestamp * 1000).toLocaleDateString(),
            open: parseFloat(open),
            high: parseFloat(high),
            low: parseFloat(low),
            close: parseFloat(close),
            volume: parseFloat(volume),
          };
        }).reverse();

        setChartData(processedData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getData();
  }, [networkId, poolAddress, timeframe, aggregate]); // Re-run effect when inputs change

  return { chartData, loading, error };
};
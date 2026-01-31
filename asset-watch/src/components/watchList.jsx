import React, { useState, useEffect } from 'react';

import api from '../api/marketApi.jsx';
import AssetRow from './assetRow.jsx';
import './watchList.css';

const WatchList = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await api.get('/coins/markets', {
          params: {
            vs_currency: 'usd',
            per_page: 10,
            page: 1,
            sparkline: false,
          },
        });
        setAssets(response.data);
      } catch (error) {
        console.error('Failed to fetch assets:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAssets();
  }, []);

  if (loading) return <p>Loading watchlist...</p>;

  return (
    <div>
      <h2>Top Cryptocurrencies</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {assets.map((asset) => (
          <Link key={asset.id} to={`/asset/${asset.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <AssetRow asset={asset} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
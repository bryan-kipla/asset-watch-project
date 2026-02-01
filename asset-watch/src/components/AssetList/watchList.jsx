import React from 'react';
import { useAssetData } from './useAssetData';
import AssetRow from './assetRow';
import './watchList.css'

const WatchList = ({ networkId, selectedPoolId, onSelectPool }) => {
  const { pools, loading, error } = useAssetData(networkId);

  if (loading) return <div>Loading watchlist...</div>;
  if (error) return <div>Error loading watchlist: {error.message}</div>;

  return (
    <div className="watch-list-container" >
      <h3>Top Pools on {networkId}</h3>
      {pools.map(pool => (
        <AssetRow
          key={pool.id}
          pool={pool}
          onSelectPool={onSelectPool}
          isSelected={pool.id === selectedPoolId}
        />
      ))}
    </div>
  );
};

export default WatchList;

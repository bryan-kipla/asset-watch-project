import React from 'react';
import '../AssetList/assetRow.css'



const AssetRow = ({ pool, onSelectPool, isSelected }) => {
  // Extract relevant data from the pool object (structure from GeckoTerminal API)
  const poolAttributes = pool.attributes;
  const token0 = poolAttributes.token0_price_usd; // Example attribute
  const token1 = poolAttributes.token1_price_usd; // Example attribute
  const name = poolAttributes.name;

  return (
    <div
      className={`asset-row ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelectPool(pool.id)} // Pass the full pool ID (e.g., 'eth_mainnet_...')
    >
      <span>{name}</span>
      <span style={{ float: 'right' }}>Price: ${parseFloat(token0 || token1).toFixed(4)}</span>
    </div>
  );
};

export default AssetRow;

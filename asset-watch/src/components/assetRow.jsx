import React from 'react';
import PriceChart from './PriceChart';
import "./assetRow.css";

const AssetRow = ({ asset }) => {
  return (
    <div className="asset-row">
      <div className="asset-info">
        <span className="asset-name">{asset.name}</span>
        <span className="asset-symbol">({asset.symbol})</span>
        <span className="asset-price">${asset.current_price.toFixed(2)}</span>
        <span className={`asset-change ${asset.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}`}>
          {asset.price_change_percentage_24h.toFixed(2)}%
        </span>
      </div>
      <div className="asset-chart">
        <PriceChart sparkline="{asset.sparkline}" />
      </div>
    </div>
  );
}

export default AssetRow;
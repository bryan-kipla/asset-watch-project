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
        <span className={`asset-change ${asset.change >= 0 ? 'positive' : 'negative'}`}>
          {asset.change >= 0 ? '+' : ''}{asset.change}%
        </span>
      </div>
      <div className="asset-chart">
        <PriceChart sparkline="{asset.sparkline}" />
      </div>
    </div>
  );
}

export default AssetRow;



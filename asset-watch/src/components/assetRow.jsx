<<<<<<< HEAD
import React from 'react';
import PriceChart from './priceChart.jsx';
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
=======
import React from "react";
import PriceChart from "./priceChart";
import "./assetRow.css";

function AssetRow({ asset }) {
  return (
    <div className="asset-row">
      <img src={asset.image} alt={asset.name} width="24" />
      <span className="asset-name">{asset.name} ({asset.symbol.toUpperCase()})</span>
      <span className="asset-price">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(asset.current_price)}
      </span>
      {asset.sparkline_in_7d ? (
        <PriceChart sparkline={asset.sparkline_in_7d.price} />
      ) : (
        <span>No chart data</span>
      )}
>>>>>>> priceChart
    </div>
  );
}

<<<<<<< HEAD
export default AssetRow;
=======
export default AssetRow;
>>>>>>> priceChart

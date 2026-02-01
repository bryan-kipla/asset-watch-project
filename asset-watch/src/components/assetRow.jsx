import React from "react";
import "./assetRow.css";
import PriceChart from "./priceChart";

function AssetRow({ asset }) {
  return (
    <div className="asset-row">
      <div className="asset-info">
        <img src={asset.image} alt={asset.name} className="asset-icon" />
        <span className="asset-name">{asset.name}</span>
        <span className="asset-symbol">{asset.symbol.toUpperCase()}</span>
      </div>
      <div className="asset-price">${asset.current_price.toLocaleString()}</div>
      <PriceChart sparkline={asset.sparkline_in_7d.price} />
    </div>
  );
}

export default AssetRow;

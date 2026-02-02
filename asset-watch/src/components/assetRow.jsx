import React from "react";
import PriceChart from "./priceChart.jsx";
import "./assetRow.css";

const AssetRow = ({ asset }) => {
  const change = asset.price_change_percentage_24h ?? 0;

  return (
    <div className="asset-row">
      <div className="asset-info">
        <span className="asset-name">{asset.name}</span>
        <span className="asset-symbol">({asset.symbol})</span>
        <span className="asset-price">
          ${asset.current_price?.toFixed(2)}
        </span>

        <span className={`asset-change ${change >= 0 ? "positive" : "negative"}`}>
          {change >= 0 ? "+" : ""}
          {change.toFixed(2)}%
        </span>
      </div>

      <div className="asset-chart">
        <PriceChart sparkline={asset.sparkline} />
      </div>
    </div>
  );
};

export default AssetRow;

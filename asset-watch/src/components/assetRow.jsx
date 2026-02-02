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
    </div>
  );
}

export default AssetRow;

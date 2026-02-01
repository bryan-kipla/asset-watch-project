<<<<<<< HEAD
import React from "react";
import "./assetRow.css";
import PriceChart from "./priceChart";
=======
import React from 'react';
import { Link } from 'react-router-dom';
import './assetRow.css'
>>>>>>> be525f9ee1cebf484d5446d4bacf2b5563254e7e

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

<<<<<<< HEAD
export default AssetRow;
=======
    const formatPrice = (price) => `$${price.toLocaleString()}`;
    const formatChange = (change) => {
        const sign = change >= 0 ? '+' : '';
        return `${sign}${change.toFixed(2)}%`;
    };
};

return (
    <Link to={`/coin/${coin.id}`} className="asset-row-link">
            <div className="asset-row">
            <div className="asset-name">
            <img src={coin.image} alt={coin.name} className="asset-image" />
            <span>{coin.name} ({coin.symbol.toUpperCase()})</span>
            </div>
            <div className="asset-price">{formatPrice(coin.current_price)}</div>
            <div className={`asset-change ${coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}`}>
            {formatChange(coin.price_change_percentage_24h)}
            </div>
        </div>
    </Link>
);

export default AssetRow;
>>>>>>> be525f9ee1cebf484d5446d4bacf2b5563254e7e

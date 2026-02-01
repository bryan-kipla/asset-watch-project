import React from 'react';
import { Link } from 'react-router-dom';
import './assetRow.css'

const AssetRow = ({ coin}) => {

    const formatPrice = (price) => `$${price.toLocaleString()}`;
    const formatChange = (change) => {
        const sign = change >= 0 ? '+' : '';
        return `${sign}${change.toFixed(2)}%`;
    };
};

return (
    <Link to={`/coin/${coin.id}`} className="asset-row-link">
        <div className="asset-row">
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
        </div>
    </Link>
);

export default AssetRow;
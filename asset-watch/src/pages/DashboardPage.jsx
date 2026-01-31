// export default DashboardPage;
import React, { useState } from 'react';
import WatchList from '../components/AssetList/watchList';
import PriceChart from '../components/priceChart/priceChart';
import './Dashboard.css';

const DashboardPage = () => {
  const [selectedPoolId, setSelectedPoolId] = useState(null);
  const networkId = 'eth';

  const handleSelectPool = (poolId) => {
    setSelectedPoolId(poolId);
    console.log("Selected Pool:", poolId);
  };

  return (
    <div className="dashboard-container">
      <div className="watchlist-section">
        
        {/* WatchList receives the handler and selected ID */}
        <WatchList 
          networkId={networkId} 
          selectedPoolId={selectedPoolId}
          onSelectPool={handleSelectPool} 
        />
      </div>
      <div className="chart-section">

        {/* PriceChart receives the selected ID as a prop */}
        <PriceChart 
          networkId={networkId}
          poolAddress={selectedPoolId ? selectedPoolId.split('_').pop() : null}
        />
      </div>
    </div>
  );
};

export default DashboardPage;

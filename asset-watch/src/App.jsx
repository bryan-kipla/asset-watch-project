import React from 'react';

import WatchList from './components/watchList';
import AssetDetails from './pages/assetDetails';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Crypto Watchlist</h1>
        <Routes>
          <Route path="/" element={<WatchList />} />
          <Route path="/asset/:id" element={<AssetDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
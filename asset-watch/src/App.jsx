import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WatchList from "./components/watchList.jsx";
import PriceChart from "./components/priceChart.jsx";
import AssetRow from "./components/assetRow.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>AssetWatch Dashboard</h1>
        <nav>
          <button><Link to="/watchlist">WatchList</Link></button>
          <button><Link to="/pricechart">PriceChart</Link></button>
          
        </nav>

        <Routes>
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/pricechart" element={<PriceChart />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;


import React, { useEffect, useState } from "react";
import { getMarketData } from "../api/marketApi.jsx";
import AssetRow from "./assetRow.jsx";
import "./watchList.css";

function WatchList() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    getMarketData().then((data) => {
      console.log("Fetched data:", data);
      setAssets(data);
    });
  }, []);

  return (
    <div className="watchlist">
      <h2>Watch list</h2>
      <div className="watchlist-table">
        {assets.length === 0 ? (
          <p>No assets found.</p>
        ) : (
          assets.map((asset) => (
            <AssetRow key={asset.id} asset={asset} />
          ))
        )}
      </div>
    </div>
  );
}

export default WatchList;

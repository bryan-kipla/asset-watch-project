import React, { useEffect, useState } from "react";
import { getMarketData } from "../api/marketApi";
import AssetRow from "./assetRow";
import "./watchList.css";

function WatchList() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    getMarketData().then(setAssets);
  }, []);

  return (
    <div className="watchlist">
      <h2>Watch list</h2>
      <div className="watchlist-table">
        {assets.map((asset) => (
          <AssetRow key={asset.id} asset={asset} />
        ))}
      </div>
    </div>
  );
}

export default WatchList;

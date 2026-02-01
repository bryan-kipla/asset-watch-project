
import PriceChart from "../components/priceChart.jsx";



function AssetDetail({ asset }) {
  return (
    <div className="asset-row">
      <img src={asset.image} alt={asset.name} width="24" />
      <span>{asset.name}</span>
      <span>KES {asset.current_price}</span>
    </div>
  );
}


export default AssetDetail
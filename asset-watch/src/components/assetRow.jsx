import { useParams } from "react";
import PriceChart from "../components/priceChart.jsx";

const AssetDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Asset: {id}</h1>
      <PriceChart assetId={id} />
    </div>
  );
};

export default AssetDetail;
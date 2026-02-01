import { useParams } from "react-router-dom";
import PriceChart from "../components/PriceChart";

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

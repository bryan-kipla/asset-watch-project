import React, { useEffect, useState } from "react";


import { getMarketData } from "../api/marketApi.jsx";
import "./priceChart.css";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

function PriceChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    getMarketData().then((data) => {
      const labels = data.map((asset) => asset.name);
      const prices = data.map((asset) => asset.current_price);

      setChartData({
        labels,
        datasets: [
          {
            label: "Crypto Prices (USD)",
            data: prices,
            borderColor: "#00dc82",
            backgroundColor: "rgba(0, 220, 130, 0.2)",
            tension: 0.3,
          },
        ],
      });
    });
  }, []);

  if (!chartData) {
    return <p>Loading chart...</p>;
  }

  return (
    <div className="price-chart">
      <h2>Price Chart</h2>
      <Line data={chartData} />
    </div>
  );
}

export default PriceChart;

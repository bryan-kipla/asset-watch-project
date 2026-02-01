import React from "react";

function PriceChart({ sparkline }) {
  if (!sparkline) return null;

  const points = sparkline.map((p, i) => `${i * 5},${100 - p % 100}`).join(" ");

  return (
    <svg width="150" height="50" viewBox="0 0 150 100">
      <polyline
        fill="none"
        stroke="#00ff9d"
        strokeWidth="2"
        points={points}
      />
    </svg>
  );
}

export default PriceChart;

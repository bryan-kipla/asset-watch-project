import React from 'react';
<<<<<<< HEAD
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { usePriceChartData } from './marketApi.jsx';
=======

import { usePriceChartData } from './usePriceChartData';
>>>>>>> priceChart
import "./priceChart.css"


const PriceChart = ({ networkId, poolAddress, timeframe = 'day', aggregate = 1 }) => {
  const { chartData, loading, error } = usePriceChartData(networkId, poolAddress, timeframe, aggregate);
console.log({PriceChart})
  if (loading) return <div>Loading price chart...</div>;
  if (error) return <div>Error fetching chart data: {error.message}</div>;

<<<<<<< HEAD
  if (chartData.length === 0) return <div>Select a pool to view the chart.</div>;
=======
  if (chartData.length === 0) return <div></div>;
>>>>>>> priceChart

  return (
    <div className="price-chart-container" >
      <h3>Price Chart</h3>
      <ResponsiveContainer >
        <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="close" domain={['auto', 'auto']}  />
          <Tooltip />
          <Line type="monotone" dataKey="close" stroke="#4285F4" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
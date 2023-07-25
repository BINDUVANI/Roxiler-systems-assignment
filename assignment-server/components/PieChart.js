import React from 'react';

const PieChart = ({ pieChartData }) => {
  return (
    <div>
      <h2>Pie Chart for Selected Month</h2>
      <ul>
        {pieChartData.map((item, index) => (
          <li key={index}>{`${item.category}: ${item.count} items`}</li>
        ))}
      </ul>
    </div>
  );
};

export default PieChart;

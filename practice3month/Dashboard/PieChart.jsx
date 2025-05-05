// PieChart.js
import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

import { Pie } from 'react-chartjs-2';

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Chart data
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Votes',
        data: [300, 200, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  return <Pie data={data} />;
};

export default PieChart;
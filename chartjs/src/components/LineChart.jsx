// src/components/LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  PointElement,
  Legend,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.map((d) => d.time),
    datasets: [
      {
        label: "Metric Value",
        data: data.map((d) => d.value),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        pointRadius: 5, // Ensure pointRadius is set
      },
    ],
  };

  return <Line data={chartData} options={{ responsive: true }} />;
};

export default LineChart;

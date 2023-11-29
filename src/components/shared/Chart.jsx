import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function HomeChart() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Bitcoin",
          data: [10000, 59000, 80000, 81000, 56000, 55000, 40000],
          fill: false,
          borderColor: documentStyle.getPropertyValue("--blue-500"),
          tension: 0.4,
        },
        {
          label: "Binance coin",
          data: [28000, 48000, 40000, 19000, 86000, 27000, 90000],
          fill: false,
          borderColor: documentStyle.getPropertyValue("--green-500"),
          tension: 0.4,
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: "black",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "black",
          },
          grid: {
            color: "black",
          },
        },
        y: {
          ticks: {
            color: "black",
          },
          grid: {
            color: "black",
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card">
      <Chart type="line" data={chartData} options={chartOptions} />
    </div>
  );
}

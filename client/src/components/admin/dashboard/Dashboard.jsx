import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const { user } = useSelector((state) => state.login);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
      },
    },

    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Skills Rating OutOf 10",
      },
      legend: {
        display: false,
      },
    },
  };
  const dataSet = {
    labels: user.skills.map((data) => `${data.name} / ${data.type}`),
    datasets: [
      {
        backgroundColor: ["rgba(53, 162, 235, 0.5)"],
        borderColor: "rgb(255, 99, 132)",
        data: user.skills.map((data) => data.rating),
        hoverBackgroundColor: "crimson",
        borderWidth: 1,

        // barThickness: 30,
        // borderRadius: 20, // This will round the corners
        // borderSkipped: false, // To make all side rounded
      },
    ],
  };

  return (
    <div className="dashboard">
      <p>{`DashBoard ->`}</p>
      <div className="content">
        <div className="chart_container">
          <div className="skillChart">
            <Bar data={dataSet} options={options} />
          </div>
          <div className="skillChart">
            <Bar data={dataSet} options={options} />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Dashboard;

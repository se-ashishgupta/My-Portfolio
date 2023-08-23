import React from "react";
import PageHeader from "../layout/PageHeader";
import skillImg from "../../assets/images/skill.jpg";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
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

const Skills = ({ user }) => {
  const progLangData = user.skills.filter(
    (item) => item.type === "Programming Language"
  );
  const webDevData = user.skills.filter(
    (item) => item.type === "Web Development"
  );
  const databaseData = user.skills.filter((item) => item.type === "Database");

  const options = {
    indexAxis: "x",
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        ticks: {
          color: "white",
        },
        grid: {
          color: "white",
        },
      },
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "white",
        },
      },
    },

    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Skills Rating OutOf 10",
        color: "white",
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
        backgroundColor: ["crimson"],
        borderColor: "white",
        data: user.skills.map((data) => data.rating),
        hoverBackgroundColor: "white",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="skills">
      <PageHeader title={"Skills"} />
      <div className="skillHeader">
        <motion.img
          src={skillImg}
          alt="skill"
          initial={{
            opacity: 0,
            y: "-100%",
          }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          viewport={{ once: true }}
        />
        <motion.p
          initial={{
            opacity: 0,
            y: "100%",
          }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          viewport={{ once: true }}
        >
          It won’t be a bigger problem to find one video game lover in your
          neighbor. Since the introduction of Virtual Game, it has been
          achieving great heights so far as its popularity and technological
          advancement are concerned. The history of video game is as interesting
          as a fairy tale.
        </motion.p>
      </div>
      <div className="skillItemDetails">
        <div className="skillbar">
          <Bar data={dataSet} options={options} />
        </div>
      </div>
      <section>
        {/* Programming Language */}
        <article>
          <h1>Programming Language</h1>
          <div className="skill_container">
            {progLangData && progLangData.length > 0 ? (
              progLangData.map((item, index) => (
                <motion.div
                  className="skillitem"
                  key={index}
                  initial={{
                    opacity: 0,
                    y: `${index % 2 === 0 ? "-100%" : "100%"}`,
                  }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeIn", duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <img src={item.icon.url} alt="skillicon" />
                  <div>
                    <h1>{item.name}</h1>
                    <hr />
                    <p>{item.about}</p>
                  </div>
                </motion.div>
              ))
            ) : (
              <p> No Skills Yet</p>
            )}
          </div>
        </article>

        {/* Web Dev */}
        <article>
          <h1>Web Development</h1>
          <div className="skill_container">
            {webDevData && webDevData.length > 0 ? (
              webDevData.map((item, index) => (
                <motion.div
                  className="skillitem"
                  key={index}
                  initial={{
                    opacity: 0,
                    y: `${index % 2 === 0 ? "-100%" : "100%"}`,
                  }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <img src={item.icon.url} alt="skillicon" />
                  <div>
                    <h1>{item.name}</h1>
                    <hr />
                    <p>{item.about}</p>
                  </div>
                </motion.div>
              ))
            ) : (
              <p> No Skills Yet</p>
            )}
          </div>
        </article>

        {/* Database Dev */}
        <article>
          <h1>Database</h1>
          <div className="skill_container">
            {databaseData && databaseData.length > 0 ? (
              databaseData.map((item, index) => (
                <motion.div
                  className="skillitem"
                  key={index}
                  initial={{
                    opacity: 0,
                    y: `${index % 2 === 0 ? "-100%" : "100%"}`,
                  }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <img src={item.icon.url} alt="skillicon" />
                  <div>
                    <h1>{item.name}</h1>
                    <hr />
                    <p>{item.about}</p>
                  </div>
                </motion.div>
              ))
            ) : (
              <p> No Skills Yet</p>
            )}
          </div>
        </article>
      </section>
    </div>
  );
};

export default Skills;

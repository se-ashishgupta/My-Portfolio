import React from "react";
import HomeAbout from "../home/About";
import PageHeader from "../layout/PageHeader";
import { FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";

const About = ({ user }) => {
  return (
    <>
      <PageHeader title={"About Me"} />
      <HomeAbout />

      <div className="qualifications">
        <h2>QUALIFICATIONS</h2>
        <section>
          {user.qualfications.map((i, index) => (
            <QualificationItem
              key={index}
              institution_name={i.institution_name}
              course={i.course}
              state={i.state}
              city={i.city}
              country={i.country}
              start_date={i.start_date}
              end_date={i.end_date}
              result_type={i.result_type}
              result_scale={i.result_scale}
              result={i.result}
            />
          ))}
        </section>
      </div>
    </>
  );
};

const QualificationItem = ({
  institution_name,
  course,
  state,
  city,
  country,
  start_date,
  end_date,
  result_type,
  result_scale,
  result,
}) => (
  <>
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ opacity: 0, y: "100%" }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      viewport={{ once: true }}
      className="qualificationItem"
    >
      <div>
        <h3>
          <FaUserGraduate />
          {`${institution_name}, ${city}, ${state}`}
        </h3>
        <hr />
        <p>{course}</p>
        <p>{`${city} | ${country}`}</p>
      </div>
      <div>
        <p>{`${start_date}-${end_date}`}</p>
        <p>{`${result_type}: ${result} (In the Scale of ${result_scale})`}</p>
      </div>
    </motion.div>
  </>
);

export default About;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const About = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="about">
      <motion.section
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x: "-100%" }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img src={user.avatar.url} alt="ashish" />
      </motion.section>
      <motion.section
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ opacity: 0, x: "100%" }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3>About Me</h3>
        <h2>Personal Details</h2>
        <p>{user.about}</p>
        <Link to="/about">View Full Details</Link>
      </motion.section>
    </div>
  );
};

export default About;

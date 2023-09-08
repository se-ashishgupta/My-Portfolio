import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const About = () => {
  const { user } = useSelector((state) => state.user);

  const AnimationVarients = {
    slideRight: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      viewport: { once: true },
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    slideLeft: {
      initial: { x: "100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      viewport: { once: true },
    },
  };

  const slideTransition = {
    duration: 1,
    ease: "easeInOut",
  };

  return (
    <div className="about">
      <motion.section
        {...AnimationVarients.slideRight}
        transition={slideTransition}
      >
        <img src={user?.avatar.url} alt="ashish" />
      </motion.section>
      <motion.section>
        <h3>About Me</h3>
        <h2>Personal Details</h2>
        <p>{user?.about}</p>
        <Link to="/about">View Full Details</Link>
      </motion.section>
    </div>
  );
};

export default About;

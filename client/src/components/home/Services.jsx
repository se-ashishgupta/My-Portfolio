import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";

function Services() {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },
    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>My Offered Services</h2>
      <section>
        <motion.div
          className="servicesBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
          viewport={{ once: true }}
        >
          <h3>1+</h3>
          <p>Years Experiences</p>
        </motion.div>
        <motion.div
          className="servicesBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          viewport={{ once: true }}
        >
          <AiFillIeCircle />
          <span>Web Development</span>
        </motion.div>
        <motion.div
          className="servicesBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
          viewport={{ once: true }}
        >
          <AiFillAndroid />
          <span>APP Development</span>
        </motion.div>
        <motion.div
          className="servicesBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
          viewport={{ once: true }}
        >
          <AiFillWindows />
          <span>Desktop Development</span>
        </motion.div>
      </section>
    </div>
  );
}

export default Services;

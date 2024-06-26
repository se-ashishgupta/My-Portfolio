import React from "react";
import { motion } from "framer-motion";
const Timeline = ({ projects }) => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {projects.map((item, index) => (
          <TimelineItem
            heading={item.title}
            text={item.start_date}
            index={index}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, text, index }) => (
  <motion.div
    className={`timelineItem  ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <div>
      <div>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  </motion.div>
);
export default Timeline;

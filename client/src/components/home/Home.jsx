import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import Work from "./Work";
import Timeline from "./Timeline";
import Services from "./Services";
import About from "./About";

const Home = ({ user }) => {
  const projectCount = useRef(0);
  const animationProjectCount = () => {
    animate(0, 12, {
      duration: 1,
      // onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animation = {
    h1: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
    },
    button: {
      initial: { y: "-100%", opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
    },
  };
  return (
    <>
      <div id="home">
        <section>
          <div>
            <motion.h1 {...animation.h1}>
              Hi, I'm <br />
              {`${user.fname} ${user.lname}`}
            </motion.h1>

            <Typewriter
              options={{
                strings: [
                  "I am a Web Developer",
                  "I am a Creative Programmer",
                  "I am a Designer",
                ],
                autoStart: true,
                cursor: "",
                loop: true,
                wrapperClassName: "typewriter",
              }}
            />
            <div>
              <a href={`mailto:${user.email}`}>Hire Me</a>
              <a href="#work">
                Projects <BsArrowUpRight />
              </a>
            </div>

            <aside>
              <article>
                <p>
                  +
                  <motion.span
                    whileInView={animationProjectCount}
                    ref={projectCount}
                  >
                    12
                  </motion.span>
                </p>
                <span>Projects Done</span>
              </article>

              <article data-special>
                <p>Contact</p>
                <span>{user.email}</span>
              </article>
            </aside>
          </div>
        </section>
        <section>
          <img src={user.avatar.url} alt="ashish" />
        </section>
        <BsChevronDown />
      </div>
      <About />
      <Work projects={user.projects} />
      <Timeline />
      <Services />
    </>
  );
};

export default Home;

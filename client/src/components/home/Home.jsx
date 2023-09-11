import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import Work from "./Work";
import Timeline from "./Timeline";
import Services from "./Services";
import About from "./About";

const Home = ({ user }) => {
  const projectCount = useMotionValue(0);
  const rounded = useTransform(projectCount, (latest) => Math.round(latest));

  const slideRightVariants = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };

  const slideRightTransition = {
    duration: 1,
    ease: "easeInOut",
  };

  useEffect(() => {
    const contorls = animate(projectCount, user.projects.length, {
      duration: 1,
    });
    return contorls.stop;
  }, []);

  return (
    <>
      <div id="home">
        <section>
          <div>
            <motion.h1
              {...slideRightVariants}
              transition={slideRightTransition}
            >
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
                  +<motion.span>{rounded}</motion.span>
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
      <Timeline projects={user.projects} />
      <Services />
    </>
  );
};

export default Home;

import React from "react";
import { GiSkills } from "react-icons/gi";
import { SiMinds } from "react-icons/si";
import { motion } from "framer-motion";
import { AnimationData } from "../../utils/animationData";
import avatar from "../../assets/images/Logo1.png";
import { Link, useParams } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";

const About = () => {
  const url = window.location.pathname;

  return (
    <div className="px-6 md:px-10 py-20 transition-all duration-300">
      <div className="w-full flex items-center gap-[8rem] lg:gap-[4rem] xl:gap-[8rem] flex-col-reverse lg:flex-row transition-all duration-300">
        {/* Left About Contet  */}
        <div className=" lg:w-[50%]">
          <div data-aos="fade-down">
            <h3 className="font-[cursive] text-primary_color text-xl  my-4">
              About Me
            </h3>

            <h1 className="font-medium text-3xl lg:text-5xl my-6 text-white">
              Software Developer
            </h1>
          </div>

          <div data-aos="fade-up">
            <div className="text-text_color1">
              <p
                className="my-4 text-justify "
                style={{
                  letterSpacing: "1px",
                  wordSpacing: "1px",
                }}
              >
                My Name is Ashish Gupta, I pursuing graduation from Rajkiya
                Engineering College Sonbhadra with Computer Science And
                Engineering. While here, I learned a lot of skills. I worked
                hard in my education and now I am ready to apply my knowledge
                into practice.
              </p>

              <p
                className="my-3 text-justify "
                style={{
                  letterSpacing: "1px",
                  wordSpacing: "1px",
                }}
              >
                I have had a lot of exposure to become a Software Engineer. Now,
                I am looking to leverage everything and get some hands on work
                experience.
              </p>
            </div>

            <section className="flex flex-col md:flex-row gap-5 py-3">
              <div className="md:w-[50%] flex gap-3 mb-4">
                <div className=" text-5xl text-primary_color ">
                  <SiMinds />
                </div>
                <div>
                  <h1 className="  text-2xl font-medium">
                    Creative Programmer
                  </h1>
                  <p className="text-lg text-text_color1 ">
                    "Crafting Code, Weaving Imagination"
                  </p>
                </div>
              </div>

              <div className="md:w-[50%] flex gap-2 mb-4">
                <div className=" text-5xl text-primary_color">
                  <GiSkills />
                </div>
                <div>
                  <h1 className="  text-2xl font-medium">
                    Full Stack Developer
                  </h1>
                  <p className="text-lg text-text_color1 break-all">
                    "Specializing in MERN Stack"
                  </p>
                </div>
              </div>
            </section>

            <div className="p-4 md:p-7 border-l-2 border-primary_color rounded-tl-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-8 sm:gap-4 ">
              <p className=" font-[cursive] text-xl text-text_color1 w-full sm:w-[70%]">
                “Your mind is your most powerful asset; invest in its growth,
                and watch your life flourish”
              </p>

              {url === "/about" ? (
                <></>
              ) : (
                <>
                  <Link
                    to={"/about"}
                    className="w-max px-4 py-2 border-2 border-primary_color hover:bg-primary_color transition-all duration-300 rounded-l-lg rounded-br-lg"
                  >
                    <span className=" flex items-center gap-2">
                      Know More <BsBoxArrowUpRight />
                    </span>
                  </Link>
                </>
              )}
            </div>
          </div>

          <div></div>
        </div>

        {/* Right About Banner */}
        <div
          data-aos="flip-left"
          className="lg:flex-1 relative h-[60vh] xl:h-[60vh]"
        >
          <div className="mx-auto w-[100%] lg:w-[65%]   h-[100%] md:h-full  rounded-l-[3rem] border-[1rem] border-primary_color shadow-2xl shadow-primary_color">
            <img
              src={avatar}
              alt="about us"
              className="rounded-l-[3rem] w-full h-full "
            />
          </div>

          <div className="absolute -bottom-16 -left-4 lg:left-[12%] w-[60%] lg:w-[40%] h-[25%] bg-secondary_color border-[0.8rem] border-white rounded-r-[3rem] rounded-tl-[3rem] text-white text-center grid place-items-center ">
            <div>
              <h1 className="text-2xl lg:text-4xl font-bold relative">
                1 <span className="text-2xl absolute ">+</span>
              </h1>
              <p className="">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

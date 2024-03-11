import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import Logo from "../assets/images/Logo1.png";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import About from "../components/home/About";
import { motion } from "framer-motion";
import { AnimationData } from "../utils/animationData";
import Experiance from "../components/home/Experiance";
import Project from "../components/home/Project";
import Skill from "../components/home/Skill";
import Blog from "../components/home/Blog";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="">
      {/* FrontPage Of Home */}
      <div
        className="w-full bg-fixed grid md:grid-cols-2 min-h-[100vh] px-5 md:pl-10 py-10 gap-8 transition-all duration-300 gradientOne"
        style={{
          backgroundImage: `url(https://wallpapercrafter.com/sizes/2048x1152/87115-lines-simple-background-abstract-hd-4k-dark-black-dribbble-oled.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left */}
        <div
          data-aos="fade-right"
          className=" flex flex-col gap-6 items-center md:items-start justify-center md:-order-1 order-1 "
        >
          {/* Welcome  */}
          <div>
            <h1 className="lg:text-xl text-gray_color uppercase">
              Welcome To My World
            </h1>
          </div>

          {/* Name  */}
          <div className="z-10 text-center md:text-left text-white font-bold text-4xl lg:text-5xl xl:text-6xl space-y-2">
            <h1>Hi, I'm</h1>
            <h1>
              Ashsih <span className=" text-primary_color">Gupta</span>
            </h1>
          </div>

          {/* TypeWriiter Effect  */}
          <div>
            <h1 className=" text-primary_color text-xl">
              <Typewriter
                options={{
                  strings: [
                    "I am a Full Stack Developer",
                    "I am a Creative Programmer",
                    "I am a Software Engineer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>

          {/* Buttons  */}
          <div className="my-4 flex flex-col md:flex-row gap-10 text-xl font-semibold">
            <Link
              to={`mailto:gashish4950@gmail.com`}
              className=" bg-primary_color px-4 py-2 border-2 border-primary_color hover:bg-transparent transition-all duration-300 rounded-l-lg rounded-br-lg"
            >
              HIRE ME
            </Link>

            <Link
              to={"/projects"}
              className="px-4 py-2 border-2 border-primary_color transition-all duration-300 rounded-l-lg rounded-br-lg"
            >
              <span className=" flex items-center gap-2">
                {" "}
                Projects <BsBoxArrowUpRight />
              </span>
            </Link>
          </div>

          {/* Project and Contact Details  */}
          <div className="flex flex-col md:flex-row items-center w-full text-center md:text-left gap-6 md:gap-0">
            <div className="md:w-[50%]">
              <span className="text-2xl lg:text-4xl font-bold text-primary_color">
                +7
              </span>
              <p className="text-lg">Project Done</p>
            </div>

            <div>
              <p className="text-2xl lg:text-4xl font-bold text-primary_color ">
                Contact
              </p>
              <span className="text-lg">gashish4950@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Right  */}

        <div
          className="relative grid place-items-center mt-4"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="w-[25vmax] h-[25vmax] sm:w-[35vmax] sm:h-[35vmax] xl:w-[35vmax] xl:h-[35vmax] rounded-full border-[0.8rem] sm:border-[1.5rem] border-primary_color transition-shadow shadow-2xl shadow-primary_color overflow-hidden animate-pulse">
            <img src={Logo} alt="" className="h-full w-full" />
          </div>
        </div>
      </div>

      {/* About  */}
      <About />

      {/* Experiance  */}
      <Experiance />

      {/* Projects  */}
      <Project />

      {/* Skill  */}
      <Skill />

      {/* Blog  */}
      <Blog />
    </div>
  );
};

export default Home;

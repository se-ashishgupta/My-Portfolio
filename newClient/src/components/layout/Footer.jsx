import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useMyContext } from "../../context/ActiveLinkContext";
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter, CiYoutube } from "react-icons/ci";
import { BiLocationPlus, BiPhoneCall, BiWorld } from "react-icons/bi";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { AnimationData } from "../../utils/animationData";
import { motion } from "framer-motion";
import logo from "../../assets/images/Logo1.png";

const Footer = () => {
  const { setActiveUrl } = useMyContext();

  const QuickLinks = [
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Skills",
      path: "/skills",

    },
    {
      title: "Home",
      path: "/",

    },
    {
      title: "About",
      path: "/about",

    },
    {
      title: "Blogs",
      path: "/blogs",

    },
    {
      title: "Contact",
      path: "/contact",

    },
  ];

  const Services = [
    {
      title: "Website Development",
      path: "/appointment",
    },
    {
      title: "App Development",
      path: "/appointment",
    },
    {
      title: "Software Development",
      path: "/appointment",
    },
  ];

  const socialMediaAccounts = [
    {
      icon: <CiLinkedin />,
      url: "https://www.linkedin.com/in/se-ashishgupta",
    },
    {
      icon: <AiFillGithub />,
      url: "https://www.github.com/se-ashishgupta",
    },
    {
      icon: <CiFacebook />,
      url: "https://www.facebook.com/seashishgupta",
    },
    {
      icon: <CiTwitter />,
      url: "/",
    },
    {
      icon: <CiInstagram />,
      url: "https://www.instagram.com/se_ashishgupta",
    },
    {
      icon: <CiYoutube />,
      url: "/",
    },
  ];

  const contactDetails = [
    {
      icon: <BiPhoneCall />,
      title: "Call Us",
      content: "+91 8114110590",
    },
    {
      icon: <AiOutlineMail />,
      title: "Emil Us",
      content: "gashish4950@.com",
    },
    {
      icon: <BiWorld />,
      title: "Website",
      content: "www.creativeprogrammer.onrender.com",
    },
    {
      icon: <BiLocationPlus />,
      title: "Address",
      content:
        "Plot No 184 Kh No 8/21/2, And 18/1/1 Sainik Enclave, Delhi, India, 110043",
    },
  ];

  return (
    <div className="w-full  bg-black" >
      <div className="w-full px-5 lg:px-[4rem] xl:px-[8rem] pt-20 pb-10 flex flex-col gap-10  ">

        {/* Footer Content  */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[rem]">
          {/* Logo And Social Media Accounts */}
          <div className="lg:w-[33%]">
            <Link to={"/"} onClick={() => setActiveUrl("/")} >
              <motion.img
                src={logo}
                alt=""
                className="h-[5rem] w-[5rem] mb-6 opacity-0 border-2 border-primary_color rounded-full"
                {...AnimationData.slideLeft}
              />
            </Link>

            <p
              className="text-white mb-8 text-justify"
              style={{
                letterSpacing: "1px",
              }}
            >
              Nurturing Young Minds for a Brighter Tomorrow: Empowering Mental
              Well-being in Youth for a Smarter and Better Life.
            </p>

            {/* Social Media  */}
            <div className="">
              <div className="flex">
                {socialMediaAccounts.map((item, index) => (
                  <a
                    key={index}
                    className=" bg-secondary_color mr-4 text-2xl p-1 rounded-full text-primary_color flex items-center justify-center border-[1px] transition-all  duration-300 border-primary_color hover:bg-transparent  hover:-translate-y-1 "
                    href={item.url}
                    target="blank"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links  */}
          <div className=" flex-1 grid md:grid-cols-3 ">
            {/* Quick Links  */}
            <div className="pb-6">
              <h1 className=" text-white text-2xl mb-5 font-medium ml-1">
                Quick Links
              </h1>
              <div className="">
                {QuickLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="mb-3 flex items-center  text-white hover:text-primary_color transition-all duration-300 hover:translate-x-2"
                    onClick={() => setActiveUrl(item.path)}
                  >
                    <span className=" text-primary_color text-2xl">
                      <RiArrowRightSLine />
                    </span>{" "}
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services  */}
            <div className="pb-6">
              <h1 className=" text-white text-2xl mb-5 font-medium ml-1">
                Services
              </h1>
              <div className="">
                {Services.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="mb-3 flex items-center text-white hover:text-primary_color transition-all duration-300 hover:translate-x-2"
                    onClick={() => setActiveUrl(item.path)}
                  >
                    <span className=" text-primary_color text-2xl">
                      <RiArrowRightSLine />
                    </span>{" "}
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Informartion  */}
            <div className="pb-6">
              <h1 className=" text-white text-2xl mb-5 font-medium ml-1">
                Contact Me
              </h1>

              {/* Contacts  */}
              <div className="w-full mb-5">
                {contactDetails.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 mb-2">
                    <span className=" text-3xl text-primary_color">
                      {item.icon}
                    </span>
                    <div>
                      <p className=" text-white break-all">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright  */}
        <div className=" border-t-2 p-2  border-secondary_color border-2">
          <p className=" text-white text-center py-4">
            Copyright 2023 © All Right Reserved By <span className=" text-primary_color">Creative Programmer</span>
          </p>
        </div>

      </div>
    </div >
  );
};

export default Footer;

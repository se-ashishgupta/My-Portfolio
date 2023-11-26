import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import {
    MdAirlineSeatReclineNormal,
    MdDoubleArrow,
    MdOutlineArrowRightAlt,
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { AnimationData } from "../../utils/animationData";
import { motion } from "framer-motion";

const Projects = () => {
    const eventDetails = [
        {
            title: "Susbscription Based Video Platform",
            category: "Frontend",
            tech_stack: ["Nodejs", "ReactJs", "ExpressJs", "Redux", "nodejs", "ReactJs", "ExpressJs", "Redux", "Nodejs", "ReactJs", "ExpressJs", "Redux", "nodejs", "ReactJs", "ExpressJs", "Redux", "ReactJs", "ExpressJs", "Redux"],
            description: "The real-time code editoris a web-based platform that allows multiple users to collaboratively write and edit code in real- time.",
            start_date: "20-10-2023",
            end_date: "20-10-2023",
            thumbnail: "https://res.cloudinary.com/dlr8q3omm/image/upload/v1692810610/portfolio/projects/mvy7okysp54uai9x9jtm.png",
            github_link: "",
            live_link: ""
        },
        {
            title: "Susbscription Based Video Platform",
            category: "Frontend",
            tech_stack: ["Nodejs", "ReactJs", "ExpressJs", "Redux", "nodejs", "ReactJs", "ExpressJs", "Redux", "Nodejs", "ReactJs", "ExpressJs", "Redux", "nodejs", "ReactJs", "ExpressJs", "Redux", "ReactJs", "ExpressJs", "Redux"],
            description: "The real-time code editoris a web-based platform that allows multiple users to collaboratively write and edit code in real- time.",
            start_date: "20-10-2023",
            end_date: "20-10-2023",
            thumbnail: "https://res.cloudinary.com/dlr8q3omm/image/upload/v1692810610/portfolio/projects/mvy7okysp54uai9x9jtm.png",
            github_link: "",
            live_link: ""
        },
        {
            title: "Susbscription Based Video Platform",
            category: "Frontend",
            tech_stack: ["Nodejs", "ReactJs", "ExpressJs", "Redux", "nodejs", "ReactJs", "ExpressJs", "Redux", "Nodejs", "ReactJs", "ExpressJs", "Redux", "nodejs", "ReactJs", "ExpressJs", "Redux", "ReactJs", "ExpressJs", "Redux"],
            description: "The real-time code editoris a web-based platform that allows multiple users to collaboratively write and edit code in real- time.",
            start_date: "20-10-2023",
            end_date: "20-10-2023",
            thumbnail: "https://res.cloudinary.com/dlr8q3omm/image/upload/v1692810610/portfolio/projects/mvy7okysp54uai9x9jtm.png",
            github_link: "",
            live_link: ""
        },
        {
            title: "Susbscription Based Video Platform",
            category: "Frontend",
            tech_stack: ["Nodejs", "ReactJs", "ExpressJs", "Redux", "nodejs", "ReactJs", "ExpressJs", "Redux", "Nodejs", "ReactJs", "ExpressJs", "Redux", "nodejs", "ReactJs", "ExpressJs", "Redux", "ReactJs", "ExpressJs", "Redux"],
            description: "The real-time code editoris a web-based platform that allows multiple users to collaboratively write and edit code in real- time.",
            start_date: "20-10-2023",
            end_date: "20-10-2023",
            thumbnail: "https://res.cloudinary.com/dlr8q3omm/image/upload/v1692810610/portfolio/projects/mvy7okysp54uai9x9jtm.png",
            github_link: "",
            live_link: ""
        },
        {
            title: "Susbscription Based Video Platform",
            category: "Frontend",
            tech_stack: ["Nodejs", "ReactJs", "ExpressJs", "Redux", "nodejs", "ReactJs", "ExpressJs", "Redux", "Nodejs", "ReactJs", "ExpressJs", "Redux", "nodejs", "ReactJs", "ExpressJs", "Redux", "ReactJs", "ExpressJs", "Redux"],
            description: "The real-time code editoris a web-based platform that allows multiple users to collaboratively write and edit code in real- time.",
            start_date: "20-10-2023",
            end_date: "20-10-2023",
            thumbnail: "https://res.cloudinary.com/dlr8q3omm/image/upload/v1692810610/portfolio/projects/mvy7okysp54uai9x9jtm.png",
            github_link: "",
            live_link: ""
        },


    ];

    function CustomNextArrow(props) {
        const { onClick } = props;
        return (
            <button
                onClick={onClick}
                className="text-3xl bg-black text-primary_color rounded-full p-2 absolute left-[50%] translate-x-[30%] z-10 hover:bg-transparent transition-all duration-300 border-[1px] border-primary_color"
            >
                <MdOutlineKeyboardArrowRight />
            </button>
        );
    }
    function CustomPrevArrow(props) {
        const { onClick } = props;

        return (
            <button
                onClick={onClick}
                className="  text-3xl bg-black text-primary_color rounded-full p-2 absolute  top-[100%] left-[50%]  translate-x-[-130%] z-10 hover:bg-transparent transition-all duration-300 border-[1px] border-primary_color"
            >
                <MdOutlineKeyboardArrowLeft />
            </button>
        );
    }
    const settings = {
        // infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div className="px-6 md:px-10 py-20 transition-all duration-300">

            <div className="mx-[15px]">
                <h3 className="font-[cursive] text-primary_color text-xl">
                    Projects
                </h3>

                <div className="flex items-center justify-between ">
                    <div>
                        <motion.h1

                            className="font-medium text-3xl lg:text-5xl my-4 sm:my-6 text-white"
                        >
                            My Projects
                        </motion.h1>
                    </div>

                    <Link
                        to={"/projects"}
                        className="flex items-center gap-2 border-b-[1px] font-bold sn:text-xl "
                    >
                        View All  <BsBoxArrowUpRight />
                    </Link>
                </div>

            </div>


            <Slider {...settings} >
                {eventDetails.map((item, index) => (
                    <Card item={item} key={index} />
                ))}
            </Slider>
        </div>
    );
};

const Card = ({ item }) => (
    <div className="max-w-[800px] mb-6">
        <div className="mb-[2.5rem] m-[10px] xl:m-[15px]  border-2 border-primary_color rounded-sm shadow-lg shadow-primary_color ">
            <div className="w-full h-[18rem] overflow-hidden relative ">
                <div to={""} target="blank" className="overflow-hidden h-full">
                    <img
                        src={item.thumbnail}
                        alt={item.name}
                        className="w-[100%] h-[100%] hover:scale-105 transition-all duration-300 ease-linear "
                    />
                </div>

                <a href="/" target="blank" className=" absolute top-4 right-4 text-3xl text-primary_color bg-secondary_color p-2 rounded-full border-2 border-primary_color hover:bg-transparent transition-all duration-300">
                    <BsGithub />
                </a>
            </div>


            <div className=" relative pt-[1rem] pb-[1rem] px-[1rem] ">

                <h3 className=" font-bold uppercase mb-[1rem] space-y-2 ">
                    <p className=" text-primary_color text-xs font-semibold">{item.category}</p>
                    <Link className=" " to={""}>
                        {item.title}
                    </Link>
                    <div className="flex gap-1 line-clamp-1">
                        {item.tech_stack.length > 0 && item.tech_stack.map((item, index) => (
                            <span className="text-xs font-normal bg-gray-800 p-1 rounded-lg">{item}</span>
                        ))}
                    </div>
                </h3>

                <div className="flex mb-[1.2rem]">
                    <p className=" line-clamp-3">
                        {item.description}
                    </p>
                </div>

                <div className="w-full flex  items-center justify-between mb-[3rem] relative">
                    <div className="flex  items-center ">
                        <AiOutlineFieldTime className=" text-2xl mr-2" />
                        <div>
                            <p className="uppercase text-xs">Start Date</p>
                            <p className="text-primary_color text-xs">{item.start_date}</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <AiOutlineFieldTime className=" text-2xl mr-2" />
                        <div>
                            <p className="uppercase text-xs">End Date</p>
                            <p className="text-primary_color text-xs">{item.end_date}</p>
                        </div>
                    </div>

                    <div className="w-[50%] m-auto bg-primary_color h-[2px] absolute mt-[5rem] left-[50%] translate-x-[-50%] "></div>
                </div>



                <a href={item.live_link} target="blank" className="w-min text-lg flex items-center gap-2 text-white font-medium border-2 p-1 rounded-lg border-primary_color hover:text-primary_color hover:border-white transition-all duration-300">
                    Demo <BsBoxArrowUpRight />
                </a>

            </div>
        </div>
    </div>
);

export default Projects;

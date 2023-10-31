import React from 'react';
import { AnimationData } from '../../utils/animationData';
import { motion } from "framer-motion";
import { FaPencilAlt } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

const Experiance = () => {
    const experianceData = [
        {
            company_name: "GrowthGear",
            city: "",
            state: "",
            country: "India",
            location: "Remote",
            position: "Full Stack Developer Intern",
            start_date: "Jul 2023",
            end_date: "",
            description: [
                "Actively contributing to the development of web applications by collaborating with the development team and following best coding practices.",
                "Learning and adapting to the latest industry trends and technologies, and applying them to real - world projects."
            ]
        },
        {
            company_name: "Achintya Solutions",
            city: "",
            state: "",
            country: "India",
            location: "Remote",
            position: "Mern Developer Intern",
            start_date: "Jul 2023",
            end_date: "Oct 2023",
            description: [
                "Delivered 2 + Web Application using React.js as the front-end, Node.js for the back - end, and MongoDB forthe database.",
                "Leveraged the power of Node.js and Express.js to establish a resilient and efficient foundation for back - end communication.",
                "Solved 25 + assigned bugs like UI fixes, responsiveness, and API optimization",
                "Solved 25 + assigned bugs like UI fixes, responsiveness, and API optimization",
                "Solved 25 + assigned bugs like UI fixes, responsiveness, and API optimization"
            ]
        },
        {
            company_name: "Achintya Solutions",
            city: "",
            state: "",
            country: "India",
            location: "Remote",
            position: "Mern Developer Intern",
            start_date: "Jul 2023",
            end_date: "Oct 2023",
            description: [
                "Delivered 2 + Web Application using React.js as the front-end, Node.js for the back - end, and MongoDB forthe database.",
                "Leveraged the power of Node.js and Express.js to establish a resilient and efficient foundation for back - end communication.",
                "Solved 25 + assigned bugs like UI fixes, responsiveness, and API optimization",
                "Solved 25 + assigned bugs like UI fixes, responsiveness, and API optimization",
                "Solved 25 + assigned bugs like UI fixes, responsiveness, and API optimization"
            ]
        },
    ];

    return (
        <div className='min-h-[100vh] px-6 md:px-10 py-12 transition-all duration-300 '>
            <div className='pb-4'>
                <div>
                    <h3 className="font-[cursive] text-primary_color text-xl  my-4">
                        Experiance
                    </h3>
                </div>

                <div>
                    <motion.h1
                        {...AnimationData.slideLeft}
                        className="opacity-0  font-medium text-3xl lg:text-5xl my-6 text-white"
                    >
                        Work Experiance
                    </motion.h1>
                </div>
            </div>

            {/* Work Experiance Timeline  */}
            <TimelineItem experianceData={experianceData} />

        </div>
    );
};


const TimelineItem = ({ experianceData }) => (

    <div className=' relative w-full ' >
        <div className='after:content-[""] after:absolute after:left-5 after:bottom-0 after:top-0 after:w-1 after:bg-pink_color'>
            <div className='w-7 h-7 border-2 bg-white rounded-full absolute -bottom-2 left-2 z-10 animate-bounce'></div>
        </div>

        <div className='pl-14 sm:px-14 flex flex-col gap-20' >
            {
                experianceData.map((item, index) => (
                    <motion.div key={index} className='w-full min-h-52 border-2 border-primary_color relative rounded-sm shadow-lg shadow-primary_color' {...AnimationData.slideUp}>
                        {/* Pencil Icon */}
                        <div className=' border-2 bg-pink_color rounded-full absolute -top-2 -left-14 z-10'>
                            <figure className={`${index % 2 == 0 ? "text-primary_color " : "text-secondary_color "} text-2xl p-2`}>
                                <FaPencilAlt />
                            </figure>
                        </div>

                        {/* Arrow  */}
                        <div className=' w-3 h-3 absolute border-l-2 border-b-2 bg-secondary_color border-primary_color rotate-45 top-2 -left-2 -z-10'></div>

                        {/* Content  */}
                        <div className='p-4'>
                            <h1 className='flex flex-col sm:flex-row sm:items-end sm:gap-2'>
                                <span className='text-2xl sm:text-3xl font-bold text-primary_color'>{item.company_name}</span>
                                <span className=' font-semibold text-lg sm:text-xl text-text_color1'>{`| ${item.position}`}</span>
                            </h1>
                            <h1 className='flex items-end gap-2 sm:text-lg'>
                                <span className=' text-text_color1'>{`${item.start_date} - ${item.end_date ? item.end_date : "Present"}`}</span>
                                <span className=' text-text_color1'>{`| ${item.location}, ${item.country}`}</span>
                            </h1>

                            <div className='py-2 flex flex-col text-lg'>
                                {
                                    (item.description.slice(0, 3)).map((i, idx) => (
                                        <p key={idx} className='text-text_color1 flex items-baseline gap-2' style={{
                                            wordSpacing: "1px",
                                            letterSpacing: "1px"
                                        }}><span className='text-primary_color'><IoMdArrowDropright /></span>{i}</p>
                                    ))
                                }
                            </div>
                        </div>

                    </motion.div>
                ))
            }
        </div>
    </div>

);

export default Experiance;
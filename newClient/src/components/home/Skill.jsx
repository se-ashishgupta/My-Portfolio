import React from 'react';
import { AnimationData } from '../../utils/animationData';
import { motion } from "framer-motion";
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Skills = () => {
    return (
        <div className='min-h-[100vh] px-6 md:px-10 py-12 transition-all duration-300 '>
            <div className="mx-[15px]">
                <h3 className="font-[cursive] text-primary_color text-xl">
                    Skills
                </h3>

                <div className="flex items-center justify-between ">
                    <div>
                        <motion.h1

                            className="opacity-0  font-medium text-3xl lg:text-5xl my-6 text-white"
                        >
                            My Skill Set
                        </motion.h1>
                    </div>

                    <Link
                        to={"/skills"}
                        className="flex items-center gap-2 border-b-[1px] font-bold sn:text-xl "
                    >
                        View All  <BsBoxArrowUpRight />
                    </Link>
                </div>

            </div>






        </div>
    );
};

export default Skills;
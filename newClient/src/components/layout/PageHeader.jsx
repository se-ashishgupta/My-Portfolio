import React from 'react';
import back from "../../assets/images/PageHeaderBack.jpg";
import { Link } from 'react-router-dom';
const PageHeader = ({ title }) => {
    return (

        <div style={{
            backgroundImage: `url(${back})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }} className='h-[12rem] w-full bg-fixed transition-all duration-300 grid place-items-center'>

            <h1 className=' flex items-center gap-2 font-bold text-3xl'>
                <Link to={"/"} className=' text-primary_color hover:text-white transition-all duration-300'>Home</Link> <span>{">"}</span> <span className='text-text_color1'> {title}</span>
            </h1>

        </div>

    );
};

export default PageHeader;
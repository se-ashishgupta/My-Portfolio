import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineContacts,
  AiFillContacts,
  AiOutlineFileUnknown,
  AiFillFileUnknown,
  AiOutlineInfoCircle,
  AiFillInfoCircle,
  AiOutlineClose,
} from "react-icons/ai";
import {
  PiProjectorScreenChartLight,
  PiProjectorScreenChartFill,
} from "react-icons/pi";
import { BsSignpostSplit, BsSignpostSplitFill } from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import Logo from "../../assets/images/Logo1.png";

const Sidebar = () => {
  const navItem = [
    {
      title: "Projects",
      path: "/projects",
      icon1: <PiProjectorScreenChartLight />,
      icon2: <PiProjectorScreenChartFill />,
    },
    {
      title: "Skills",
      path: "/skills",
      icon1: <AiOutlineFileUnknown />,
      icon2: <AiFillFileUnknown />,
    },
    {
      title: "Home",
      path: "/",
      icon1: <AiOutlineHome />,
      icon2: <AiFillHome />,
    },
    {
      title: "About",
      path: "/about",
      icon1: <AiOutlineInfoCircle />,
      icon2: <AiFillInfoCircle />,
    },
    {
      title: "Blogs",
      path: "/blogs",
      icon1: <BsSignpostSplit />,
      icon2: <BsSignpostSplitFill />,
    },
    {
      title: "Contact",
      path: "/contact",
      icon1: <AiOutlineContacts />,
      icon2: <AiFillContacts />,
    },
  ];

  const [path, setPath] = useState(location.pathname);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  // Getting width and height
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }


  // Nav Close on Desktop view Automatically Functionality
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };

    window.addEventListener("resize", updateDimension);

    if (screenSize.width >= 768) {
      setSideBarOpen(false);
    }

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);


  const navItemHandler = (path) => {
    setSideBarOpen(false);
    setPath(path);
  };

  // Back Scroll Stop Functionality 
  useEffect(() => {
    if (sideBarOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [sideBarOpen]);

  return (
    <>
      {/* Desktop view Sidebar  */}
      <div className="h-full fixed top-0 left-0 -translate-x-96 md:translate-x-0 transition-all duration-300">
        {/* Logo  */}
        <div className="absolute top-6 left-3 w-[4rem] h-[4rem] text-xl font-bold bg-opacity-70 p-2 rounded-full shadow-lg shadow-primary_color border-2 border-primary_color">
          <Link to={"/"} className=" ">
            <img src={Logo} alt="" className="h-full w-full" />
          </Link>
        </div>

        {/* Menu Item List  */}
        <div className="py-10 absolute left-0 top-[50%] translate-y-[-50%] flex flex-col gap-8 group">
          {/* Overlay on Hover  */}
          <div className=" bg-black bg-opacity-60 group-hover:w-[15rem] absolute left-0 top-[50%] h-[120%] translate-y-[-50%] opacity-0 group-hover:opacity-100 blur-3xl -z-10"></div>

          {/* Nav Item  */}
          {navItem.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className=" text-gray_color hover:translate-x-2 hover:scale-110 transition-all duration-300 pl-[2rem] "
              onClick={() => setPath(item.path)}
            >
              <div
                className={`flex hover:text-primary_color hover:font-bold transition-all duration-0  ${path == item.path ? "text-primary_color" : ""
                  }`}
              >
                <figure className={`text-2xl `}>
                  {path == item.path ? item.icon2 : item.icon1}
                </figure>
                <p
                  style={{
                    letterSpacing: "1px",
                  }}
                  className={`text-xl opacity-0 group-hover:opacity-100 group-hover:pl-[2rem] group-hover:block transition-all duration-300 ${path == item.path ? "font-bold text-primary_color" : ""
                    }`}
                >
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`bg-black z-10 bg-opacity-50 w-full h-full fixed top-0 left-0 text-white ${sideBarOpen ? "translate-x-0" : "translate-x-[-100%]"
          } md:translate-x-[-100%]`}
        onClick={() => setSideBarOpen(false)}
      ></div>

      {/* MenuBar Icon  */}
      <div
        className="text-white absolute top-4 left-4 bg-primary_color p-2 rounded-full text-2xl border-2 border-primary_color hover:bg-transparent cursor-pointer transition-all duration-300 md:translate-x-[-150%] "
        onClick={() => setSideBarOpen(!sideBarOpen)}
      >
        <BiMenuAltLeft />
      </div>

      {/*Phone View Sidebar*/}
      <div
        className={`bg-secondary_color absolute w-[14rem] top-0 h-full px-4 py-6 ${sideBarOpen ? "left-0" : "-left-96"
          } transition-all duration-300 z-10`}
      >

        {/* Close Button Icon  */}
        <div
          className={`flex justify-end items-center  `}
          onClick={() => setSideBarOpen(false)}
        >
          <figure className={`w-min bg-white text-black p-2 rounded-full cursor-pointer transition-all duration-300`}>
            <AiOutlineClose />
          </figure>
        </div>

        {/* Nav content  */}
        <div className=" py-[3rem] flex flex-col item-center justify-between h-full">

          {/* Logo  */}
          <div className="w-full flex items-center justify-center">
            <img src={Logo} alt="ashishgupta" className="h-[6rem] w-[6rem] border-4 border-primary_color rounded-full" />
          </div>

          {/* Nav Item  */}
          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-4 items-center justify-center">
              {navItem.map((item, index) => (
                <>
                  <Link to={item.path} onClick={() => navItemHandler(item.path)} className={`text-2xl tracking-wide pb-1 hover:text-primary_color hover:font-bold transition-all ease-linear duration-300 hover:scale-110 relative after:content-[''] after:bg-white after:h-[2.5px] after:w-full after:absolute after:bottom-0 after:left-0 after:scale-0 hover:after:scale-100 after:origin-center after:transition-transform after:duration-300 ${path == item.path ? "font-bold after:scale-100 text-primary_color" : "text-white "}`}>
                    {item.title}
                  </Link >
                </>
              ))
              }
            </div>
          </div>


          <div className="flex items-center justify-center">
            <button className=" text-white text-2xl font-semibold tracking-wide bg-primary_color px-4 py-1 border-2 border-primary_color rounded-lg hover:bg-transparent transition-all duration-300">
              Email
            </button>
          </div>
        </div>
      </div >
    </>
  );
};

export default Sidebar;

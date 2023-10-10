import React, { useState } from "react";
import {
  AiOutlineLinkedin,
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillGithub,
  AiOutlineInstagram,
  AiFillInstagram,
  AiOutlineFacebook,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Header = () => {
  const socialMedia = [
    {
      title: "Linkedin",
      url: "https://www.linkedin.com/in/se-ashishgupta",
      icon1: <AiOutlineLinkedin />,
      icon2: <AiFillLinkedin />,
    },
    {
      title: "Github",
      url: "https://www.github.com/in/se-ashishgupta",
      icon1: <AiOutlineGithub />,
      icon2: <AiFillGithub />,
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/in/se-ashishgupta",
      icon1: <AiOutlineInstagram />,
      icon2: <AiFillLinkedin />,
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/in/se-ashishgupta",
      icon1: <AiOutlineFacebook />,
      icon2: <AiFillLinkedin />,
    },
  ];

  const [social, setSocial] = useState(false);
  return (
    <>
      {/* social Media  */}
      <div className="absolute top-3 right-2 flex flex-col gap-4 px-2 py-1">
        {socialMedia.length > 0 &&
          socialMedia.map((item, index) => (
            <>
              <a
                key={index}
                href={item.url}
                target="blank"
                className={` text-white hover:bg-primary_color p-2 rounded-full border-2 border-primary_color transition-all duration-300   `}
              >
                <figure className=" text-2xl">{item.icon1}</figure>
              </a>
            </>
          ))}
      </div>
    </>
  );
};

export default Header;

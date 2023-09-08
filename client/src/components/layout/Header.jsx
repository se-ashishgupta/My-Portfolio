import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ menuOpen, setMenuOpen }) => {
  if (window.innerWidth > 785) {
    setMenuOpen(false);
  }
  return (
    <>
      <nav id="topToHeader">
        <NavContent setMenuOpen={setMenuOpen} />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`navBtn ${menuOpen ? "navBtnFixed" : ""}`}
        >
          {menuOpen ? <MdClose /> : <FiMenu />}
        </button>
      </nav>
    </>
  );
};

const NavContent = ({ setMenuOpen }) => {
  const { user } = useSelector((state) => state.user);
  const [active, setActive] = useState(location.pathname);

  const navItem = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "About",
      to: "/about",
    },
    {
      title: "Skills",
      to: "/skills",
    },
    {
      title: "Projects",
      to: "/projects",
    },
    {
      title: "Services",
      to: "/services",
    },
    {
      title: "Blogs",
      to: "/blogs",
    },
    {
      title: "Contact",
      to: "/contact",
    },
  ];

  const menuClickHandler = (to) => {
    setMenuOpen(false);
    setActive(to);
  };

  return (
    <>
      <h2>{user.fname}</h2>

      <img src={user.avatar.url} alt={user.name} />

      <div>
        {navItem.map((item, index) => (
          <Link
            onClick={() => menuClickHandler(item.to)}
            to={item.to}
            style={{ "--i": index }}
            className={active == item.to ? "active" : ""}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div>
        <a onClick={() => setMenuOpen(false)} href={`mailto:${user.email}`}>
          <button>Email</button>
        </a>
      </div>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => (
  <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
    <NavContent setMenuOpen={setMenuOpen} />
  </div>
);

export default Header;

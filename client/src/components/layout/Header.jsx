import React from "react";
import { ImMenu, ImCross } from "react-icons/im";
import { RiMenu3Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <nav id="topToHeader">
        <NavContent setMenuOpen={setMenuOpen} />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`navBtn ${menuOpen ? "navBtnFixed" : ""}`}
        >
          {menuOpen ? <ImCross /> : <RiMenu3Fill />}
        </button>
      </nav>
    </>
  );
};

const NavContent = ({ setMenuOpen }) => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <h2>{user.fname}</h2>
      <div>
        <Link onClick={() => setMenuOpen(false)} to="/" style={{ "--i": 1 }}>
          Home
        </Link>
        <Link
          onClick={() => setMenuOpen(false)}
          to="/about"
          style={{ "--i": 2 }}
        >
          About
        </Link>
        <Link
          onClick={() => setMenuOpen(false)}
          to="/skills"
          style={{ "--i": 3 }}
        >
          Skills
        </Link>
        <Link
          onClick={() => setMenuOpen(false)}
          to="/projects"
          style={{ "--i": 4 }}
        >
          Projects
        </Link>
        <Link
          onClick={() => setMenuOpen(false)}
          to="/services"
          style={{ "--i": 5 }}
        >
          Services
        </Link>
        <Link
          onClick={() => setMenuOpen(false)}
          to="/blogs"
          style={{ "--i": 6 }}
        >
          Blogs
        </Link>
        <Link
          onClick={() => setMenuOpen(false)}
          to="/contact"
          style={{ "--i": 7 }}
        >
          Contact
        </Link>
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

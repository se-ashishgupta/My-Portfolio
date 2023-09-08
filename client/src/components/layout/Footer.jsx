import React from "react";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
const Footer = ({ user }) => {
  return (
    <div className="footer">
      <div>
        <img src={user.avatar.url} alt="founder" />
        <div>
          <h2>Ashish Gupta</h2>
          <p>Coidng is Doing Well</p>
        </div>
      </div>
      <aside>
        <h2>Let us be Social</h2>
        <article>
          <a
            href="https://www.youtube.com/@thecreativeprogrammer"
            target="blank"
          >
            <AiFillYoutube />
          </a>
          <a href="https://www.instagram.com/_gupta_._ashish_/" target="blank">
            <AiFillInstagram />
          </a>
          <a href="https://www.facebook.com/ashishgupta5656/" target="blank">
            <AiFillFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/ashish-gupta-18a8b7210/"
            target="blank"
          >
            <AiFillLinkedin />
          </a>
        </article>
      </aside>

      <p onClick={() => window.scrollTo(0, 0)}>
        <AiOutlineArrowUp />
      </p>
    </div>
  );
};

export default Footer;

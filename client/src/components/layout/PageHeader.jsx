import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import pageHeadBack from "../../assets/images/pageHeader/header-background.png";

const PageHeader = ({ title }) => {
  return (
    <div
      className="pageheader"
      style={{
        backgroundImage: `url(${pageHeadBack})`,
      }}
    >
      <div className="overlay"></div>
      <div>
        <h2>{title}</h2>
        <p>
          <Link to={"/"}>Home</Link>
          <AiOutlineArrowRight />
          {title}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;

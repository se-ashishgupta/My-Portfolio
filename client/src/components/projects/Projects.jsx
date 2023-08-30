import React from "react";
import PageHeader from "../layout/PageHeader";
import Slider from "react-slick";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Projects = ({ user }) => {
  function CustomNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="arrow">
        <button onClick={onClick} className="nextarrow">
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    );
  }

  function CustomPrevArrow(props) {
    const { onClick } = props;

    return (
      <div className="arrow">
        <button onClick={onClick} className="prevarrow">
          <MdOutlineKeyboardArrowLeft />
        </button>
      </div>
    );
  }
  const settings = {
    infinite: true,
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="projects">
      <PageHeader title={"Projects"} />

      <section>
        <Slider {...settings}>
          {user.projects.map((item, index) => (
            <Card item={item} key={index} user={user} />
          ))}
        </Slider>
      </section>
    </div>
  );
};
const Card = ({ item, user }) => (
  <div className="projectcard">
    <div>
      <div>
        <Link to={item.live_url} target="blank" className="overflow-hidden">
          <img src={item.image.url} alt={item.name} />
        </Link>
      </div>

      <div className="project-details">
        {/* {Dates} */}
        <div className="dates">
          <div className="date-left">
            <h3>{`${new Date(item.start_date).toLocaleString("default", {
              month: "short",
            })}`}</h3>
            <span>{`${new Date(item.start_date).toLocaleString("default", {
              year: "numeric",
            })}`}</span>
          </div>
          <p>------------------{">"}</p>
          <div className="date-right">
            {item.end_date ? (
              <>
                <h3>{`${new Date(item.end_date).toLocaleString("default", {
                  month: "short",
                })}`}</h3>
                <span>{`${new Date(item.end_date).toLocaleString("default", {
                  year: "numeric",
                })}`}</span>
              </>
            ) : (
              <p>Current</p>
            )}
          </div>
        </div>
        {/* Deatils  */}
        <div className="details">
          <div className="titles">
            <span className="category_head">Web Development</span>
            <p className="p_title">{item.title}</p>
            <p className="p_desc">{item.description}</p>
            <span className="tectstack_head">Texh Stack :</span>
            <p className="p_techstack">{item.tech_stack}</p>
          </div>

          <div className="creater">
            <div>
              <img src={user.avatar.url} alt="" />
            </div>

            <div>
              <span>{`${user.fname} ${user.lname}`}</span>
              <p>Web Developer, Creative Programer</p>
            </div>
          </div>

          <div className="project-links">
            <Link to={item.live_url} target="blank">
              Go Live
            </Link>
            <Link to={item.repository_url} target="blank">
              Go Repo
            </Link>
          </div>
        </div>
        {/* Links  */}
      </div>
    </div>
  </div>
);

export default Projects;

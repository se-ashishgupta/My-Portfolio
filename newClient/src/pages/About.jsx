import React from "react";
import HomeAbout from "../components/home/About";
import PageHeader from "../components/layout/PageHeader";

const About = () => {
  return <div>
    <PageHeader title={"About"} />
    <HomeAbout />
  </div>;
};

export default About;

import React from "react";
import PageHeader from "../layout/PageHeader";

const Projects = ({ user }) => {
  return (
    <div className="projects">
      <PageHeader title={"Projects"} />

      <section>
        {user.projects && user.projects.length > 0 ? (
          user.projects.map((item, index) => (
            <>
              <div className="projectCard">
                <img src={item.image.url} alt="projectImage" />
                <div className="heading">
                  <h1>{item.title}</h1>
                  <p>{`${new Date(item.start_date).toLocaleString("default", {
                    month: "short",
                    year: "numeric",
                  })} - ${
                    item.end_date
                      ? new Date(item.start_date).toLocaleString("default", {
                          month: "short",
                          year: "numeric",
                        })
                      : "Present"
                  }`}</p>
                </div>
                <div className="details">
                  <span>Description </span>
                  <p>{item.description}</p>
                  <span>Tech Stack </span>
                  <p>{item.tech_stack}</p>
                </div>
                <div className="projectUrl">
                  <a href={item.repository_url} target="blank">
                    Git Repo
                  </a>
                  <a href={item.live_url} target="blank">
                    Live Demo
                  </a>
                </div>
              </div>
            </>
          ))
        ) : (
          <p>Not yet</p>
        )}
      </section>
    </div>
  );
};

export default Projects;

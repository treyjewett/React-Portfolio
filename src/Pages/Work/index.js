import React from "react";
import Header from "../../Components/Header";
import Subheader from "../../Components/Subheader";
import Footer from "../../Components/Footer";
import Project from "../../Components/Project";
import projects from "../../projects.json";

function Work() {

  return (
    <>
      <Header />
      <Subheader />
        <h2 className="projectHeader">My Projects</h2>
        <div className="tileContainer">
        {projects.map(project => (
          <Project
            id={project.id}
            link={project.link}
            title={project.title}
          />
        ))}
        </div>
      <Footer />
    </>
  );
}

export default Work;
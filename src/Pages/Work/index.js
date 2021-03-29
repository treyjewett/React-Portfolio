import React from "react";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Project from "../../Components/Project";
import projects from "../../projects.json";

function Work() {

  return (
    <>
      <Header />
      <Navbar />
      <h2 className="projectHeader">My Projects</h2>
        {projects.map(project => (
          <Project className="projectItem" id={project.title}
            link={project.link}
            title={project.title}
          />
        ))}
      <Footer />
    </>
  );
}

export default Work;
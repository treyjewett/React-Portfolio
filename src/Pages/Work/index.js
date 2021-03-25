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
      {projects.map(project => (
        <Project
          link={project.link}
          title={project.title}
          />
      ))}
      <Footer />
    </>
  );
}

export default Work;
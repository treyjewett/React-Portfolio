import React from "react";
import Header from "../../Components/Header";
import Subheader from "../../Components/Subheader";
import Footer from "../../Components/Footer";

function About() {
  return (
    <div className="aboutPage">
      <Header />
      <Subheader />
      <h1 className="about">About Me</h1>
      <div className="aboutContainer">
        <img id="profile" src={process.env.PUBLIC_URL + "/assets/img/profile.jpg"} alt="Myself currently" />
        <p id="blurb">Raised in Charlotte, North Carolina, I have remained close to home and I now live in Mooresville, North Carolina.
          I completed my Full Stack Web Development certification from UNC Charlotte in April 2021 and have been in the field ever since.
          I am currently employed at ImagineSoftware located in Charlotte as a Full Stack Software Engineer focused in .NET. I graduated from UNC Charlotte
          in 2017 after obtaining a bachelors degree in exercise physiology. When I was younger, I had always wanted to be an engineer. Playing
          sports throughout my childhood really gave me a passion for physiology, which is why I chose to study that in college. Soon after
          graduating, I realized that the field was not for me and I have been in engineering ever since.</p>
      </div>
      <Footer />
    </div>
  )
}

export default About;

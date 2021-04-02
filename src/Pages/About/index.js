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
      <img id="profile" src="assets/img/Profile.jpg" alt="Myself currently" />
      <p id="blurb">Raised in Charlotte, North Carolina, I have remained close to home and I now live in Dallas, North Carolina. 
        I graduated from UNC Charlotte in 2017 after obtaining a bachelors degree in exercise physiology. 
        I currently work for a research and development facility where knowledge regarding technology is required. 
        I am attending UNC Charlotte's coding boot camp in an attempt to further my understanding of applications and how to apply them to my line of work. 
        When I was younger, I had always wanted to be an engineer. 
        Playing sports throughout my childhood really gave me a passion for physiology, which is why I chose to study that in college. 
        Soon after graduating, I realized that the field was not for me and I have been in engineering ever since. 
        Having worked in the field for over 3 years, I gravitated towards technology. 
        It quickly became apparent that I needed some education in the "behind-the-scenes" systems that help technology perform. 
        After nearly 18 months of teaching myself Python, I realized that I needed a strong foundation in order to build my education efficiently. 
        After the bootcamp, I want to utilize my education to advance machine learning and other AI applications.</p>
        <Footer />
    </div>
  )
}

export default About;
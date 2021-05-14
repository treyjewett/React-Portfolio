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
        <p id="blurb">Raised in Charlotte, North Carolina, I have remained close to home and I now live in Kernersville, North Carolina. 
        I graduated from UNC Charlotte in 2017 after obtaining a bachelors degree in exercise physiology. I most recently worked for a 
        research and development facility where knowledge regarding technology was required. Because of the need for technology knowledge, 
        I enrolled in UNC Charlotte's coding boot camp where I was able to further my understanding of applications and how to apply them to 
        my line of work. When I was younger, I had always wanted to be an engineer. Playing sports throughout my childhood really gave me a 
        passion for physiology, which is why I chose to study that in college. Soon after graduating, I realized that the field was not for 
        me and I have been in engineering ever since. Having worked in the field for over 3 years, I gravitated towards technology. It quickly 
        became apparent that I needed some education in the "behind-the-scenes" systems that help technology perform. After nearly 18 months of 
        teaching myself Python, I realized that I needed a strong foundation in order to build my education efficiently. Now that I have graduated, 
        I am eager to put my skillset to use on real-world applications.</p>
      </div>
      <Footer />
    </div>
  )
}

export default About;
import React from "react";
import Header from "../../Components/Header";
import Subheader from "../../Components/Subheader";
import ContactItem from "../../Components/ContactItem";
import Footer from "../../Components/Footer";

function Contact() {

  return (
    <>
      <Header />
      <Subheader />
        <h2 className="projectHeader">Contact Information</h2>
        <ContactItem />
      <Footer />
    </>
  );
}

export default Contact;
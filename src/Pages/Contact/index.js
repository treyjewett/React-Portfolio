import React from "react";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import ContactItem from "../../Components/ContactItem";

function Contact() {

  return (
    <>
      <Header />
      <Navbar />
        <ContactItem />
      <Footer />
    </>
  );
}

export default Contact;
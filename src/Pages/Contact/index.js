import React from "react";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import ContactItem from "../../Components/ContactItem";
import contact from "../../contact.json";

function Contact() {

  return (
    <>
      <Header />
      <Navbar />
      {contact.map(items => (
        <ContactItem 
          source={items.source}
          title={items.title}
        />
      ))}
      <Footer />
    </>
  );
}

export default Contact;
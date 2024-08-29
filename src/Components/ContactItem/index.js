import React from "react";
import contact from "../../contact.json";

function ContactItem() {
  return (
    <div className="tileContainer">
      <div className="tile" id="resume">
        <a href={contact[0].source}>
          <div className="tile-text">
            <strong>{contact[0].title}</strong>
          </div>
        </a>
      </div>
      <div className="tile" id="github">
        <a href={contact[1].source}>
          <div className="tile-text">
            <strong>{contact[1].title}</strong>
          </div>
        </a>
      </div>
      <div className="tile" id="linkedin">
        <a href={contact[2].source}>
          <div className="tile-text">
            <strong>{contact[2].title}</strong>
          </div>
        </a>
      </div>
      <div className="tile" id="phone">
          <div className="tile-text">
            <strong>{contact[3].title}: (704) 577-1168</strong>
          </div>
      </div>
      <div className="tile" id="email">
        <a href="mailto:rfjewett3@gmail.com">
          <div className="tile-text">
            <strong>{contact[4].title}: rfjewett3@gmail.com</strong>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ContactItem;
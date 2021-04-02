import React from "react";
import contact from "../../contact.json";

function ContactItem(props) {
  return (
    <div className="contactItem">
      <ul className="contactList">
        <li>Resume: <a href={contact[0].source}>{contact[0].title}</a></li>
        <li>GitHub: <a href={contact[1].source}>{contact[1].title}</a></li>
        <li>LinkedIn: <a href={contact[2].source}>{contact[2].title}</a></li>
        <li>{contact[3].title}: {contact[3].source}</li>
        <li>{contact[4].title}: {contact[4].source}</li>
      </ul>
    </div>
  );
}

export default ContactItem;
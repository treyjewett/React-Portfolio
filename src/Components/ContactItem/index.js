import React from "react";

function ContactItem(props) {
  return (
    <div className="contactItem">
      <a href={props.source} target="_blank">{props.title}</a>
    </div>
  );
}

export default ContactItem;
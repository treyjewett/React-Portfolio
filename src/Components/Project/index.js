import React from "react";

function Project(props) {
  return (
    <div className="projectCard">
      <a href={props.link} target="_blank" id={props.title}>
        <div className="cardtext">
          <strong>{props.title}</strong>
        </div>
      </a>
    </div>
  )
}

export default Project;
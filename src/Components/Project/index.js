import React from "react";

function Project(props) {
  return (
    <div className="tile" id={props.id}>
      <a href={props.link}>
        <div className="tile-text">
          <strong>{props.title}</strong>
        </div>
      </a>
    </div>
  )
}

export default Project;
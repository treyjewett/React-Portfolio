import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="nav">
        <ul>
          <li>
            <Link to="/">
              <strong>About</strong>
          </Link>
          </li>
          <li>
            <Link
              to="/projects"
            >
              <strong>Projects</strong>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
            >
              <strong>Contact Me</strong>
            </Link>
          </li>
        </ul>
    </nav>
  );
}

export default Navbar;


// Reference class activity 03-Stu_useContext in Advanced React for clarity
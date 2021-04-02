import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="nav">
        <ul>
          <li>
            <Link to="/">
              About
          </Link>
          </li>
          <li>
            <Link
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
            >
              Contact Me
            </Link>
          </li>
        </ul>
    </nav>
  );
}

export default Navbar;


// Reference class activity 03-Stu_useContext in Advanced React for clarity
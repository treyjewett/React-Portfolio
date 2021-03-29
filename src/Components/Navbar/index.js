import React from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">
              About
          </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


// Reference class activity 03-Stu_useContext in Advanced React for clarity
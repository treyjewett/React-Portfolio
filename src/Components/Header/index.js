import React from "react";
import Navbar from "../Navbar";

function Header() {
  return (
      <div className="header">
        <Navbar />
        <h1>Russell <span id="lastName">Jewett</span></h1>
      </div>
  );
}

export default Header;
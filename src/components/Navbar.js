import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h1 className="header__heading">Where in the world?</h1>
      </Link>
      <div className="toggler">
        <i className="toggler__icon far fa-moon"></i>
        <span className="toggler__text">Dark Mode</span>
      </div>
    </header>
  );
}
export default Navbar;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

function Navbar() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", true);
  useEffect(() => {
    const body = document.querySelector("body").classList;
    if (darkMode) {
      body.add("dark");
    } else {
      body.remove("dark");
    }
  }, [darkMode]);
  const themeTogglerHandler = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h1 className="header__heading">Where in the world?</h1>
      </Link>
      <div className="toggler" onClick={themeTogglerHandler}>
        <i
          className={
            darkMode ? "toggler__icon fas fa-moon" : "toggler__icon far fa-moon"
          }
        ></i>
        <span className="toggler__text">Dark Mode</span>
      </div>
    </header>
  );
}
export default Navbar;

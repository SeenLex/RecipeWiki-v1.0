import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/navbarlogo.png";
import { Searchbar } from "../searchbar/Searchbar";

export const Navbar = ({ callBack }) => {
  const [input, setInput] = useState("");
  return (
    <nav className="navbar">
      <div className="left-side">
        <h2 className="navbar-content">
          <img className="navbar-logo" src={logo} alt="RecipeWiki Logo" />
        </h2>
        <a
          href
          onClick={() => {
            callBack("home");
          }}
          className="navbar-buttonHome"
        >
          Home
        </a>
        <a
          href
          onClick={() => {
            callBack("about");
          }}
          className="navbar-button"
        >
          About
        </a>
      </div>
      <div className="right-side">
        <Searchbar input={input} setInput={setInput} />
        <a href="login" className="navbar-button">
          Login
        </a>
      </div>
    </nav>
  );
};

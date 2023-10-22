import React from "react";
import "./Navbar.css";
import logo from "../../assets/navbarlogo.png";

export const Navbar = ({callBack}) => {
  
  return (
    <nav className="navbar">
      <div className="left-side">
        <h2 className="navbar-content">
          <img className="navbar-logo" src={logo} alt="RecipeWiki Logo" />
        </h2>
        <a href onClick={() =>{callBack("home")}} className="navbar-link">Home</a>
        <a href onClick={() =>{callBack("about")}} className="navbar-link">About</a>
      </div>
      <div className="right-side">
        <div className="search-input-container">
          <div className="loop" />
          <input className="search-input" type="text" placeholder="Search" />
        </div>
        <a href="login" className="navbar-link">Login</a>
      </div>
    </nav>
  );
};

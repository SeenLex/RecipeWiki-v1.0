"use client";

import React, { useState } from "react";
import logo from "../../assets/navbarlogo.png";
import { Searchbar } from "../searchbar/Searchbar";
import Image from "next/image";

export const Navbar = ({ callBack }) => {
  const [input, setInput] = useState("");
  return (
    <nav className="navbar flex items-center justify-between bg-gradient-to-t from-orange-300 to-orange-500 h-26 px-4 py-4 sticky top-0">
      <div className="flex items-center gap-10">
        <a href="/">
          <h2 className="navbar-content">
            <Image alt="Recipe" className="max-w-[120px]" src={logo} />
          </h2>
        </a>
        <a
          href="/"
          onClick={() => {
            callBack("home");
          }}
          className="navbar-buttonHome hover:text-white"
        >
          Home
        </a>
        <a
          href="/about"
          onClick={() => {
            callBack("about");
          }}
          className="navbar-buttonAbout hover:text-white"
        >
          About
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a href="login" className="navbar-button px-4 py-2 border rounded-md border-gray-600 hover:bg-orange-500 hover:text-white">
          Sign In
        </a>
      </div>
    </nav>
  );
};

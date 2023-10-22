import { About } from "../about/About";
import { Navbar } from "../navbar/Navbar";
import "./Home.css";
import React, { useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { Cards } from "../cards/Cards";

export const Home = () => {
  const [changeContent, setChangeContent] = useState("home");
  const callBack = (value) => {
    setChangeContent(value);
  };
  return (
    <div className="home-container">
      
      <Navbar callBack={callBack} />
      <Cards />
      {changeContent === "home" ? (
          <div className="cards-container">
            
          </div>
      ) : (
        <About />
      )}
      <Sidebar />
    </div>
  );
};

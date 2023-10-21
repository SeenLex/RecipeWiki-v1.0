import { About } from "../about/about";
import { Navbar } from "../navbar/Navbar";
import "./Home.css";
import React, { useState } from "react";

export const Home = () => {
  const divs = Array(20).fill(null);
  const [changeContent, setChangeContent] = useState("home");
  const callBack = (value) => {
    setChangeContent(value);
  };
  return (
    <>
      <Navbar callBack={callBack} />
      {changeContent==="home" ? <div className="right-content">
        <div className="cards-container">
          <h1>home</h1>
        </div>
      </div> : <About />}
      
    </>
  );
};

import React from "react";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-items"></div>
      <div className="sidebar-title">
        <b>Filter</b>
      </div>
      <div className="meals">
        <div className="breakfast">Breakfast</div>
        <div className="type-of-meals"></div>
        <div className="vegan">Vegan</div>
        <div className="brunch">Brunch</div>
        <div className="lunch">Lunch</div>
        <div className="dinner">Dinner</div>
      </div>
    </div>
  );
};

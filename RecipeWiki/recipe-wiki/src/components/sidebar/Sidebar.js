import React from "react";
import "./Sidebar.css";
import { MyFavourites } from "../my-favourites/MyFavourites";
import { Filter } from "../filter/Filter";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-items"></div>
      <MyFavourites />
      <Filter />
    </div>
  );
};

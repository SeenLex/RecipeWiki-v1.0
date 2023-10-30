"use client"

import React from "react";
import { MyFavourites } from "../my-favourites/MyFavourites";
import { Filter } from "../filter/Filter";

export const Sidebar = () => {
  return (
    <div className="col-span-2 max-w-[240px] py-6 px-4 bg-red-400 border-r border-black">
      <div className="sidebar-items"></div>
      <MyFavourites />
      <Filter />
    </div>
  );
};

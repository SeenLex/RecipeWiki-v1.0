"use client";

import React from "react";
import { MyFavourites } from "../my-favourites/MyFavourites";
import { Filter } from "../filter/Filter";

export const Sidebar = () => {
  return (
    <div className="col-span-2 max-w-[240px] py-6 px-4 bg-gradient-to-t from-orange-300 to-yellow-400 min-h-[calc(100vh-81px)]">
      <div className="sidebar-items sticky top-[calc(81px+24px)]">
        <MyFavourites />
        <Filter />
      </div>
    </div>
  );
};

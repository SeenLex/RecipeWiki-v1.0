import React, { useState } from "react";
import "./Sidebar.css";
import { MyFavourites } from "../my-favourites/MyFavourites";

export const Sidebar = () => {
  const [dropdownState, setDropdownState] = useState({
    breakfast: false,
    brunch: false,
    lunch: false,
    dinner: false,
  });

  const toggleDropdown = (meal) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [meal]: !prevState[meal],
    }));
  };

  const toggleSidebarDropdown = () => {
    setDropdownState((prevState) => ({
      ...prevState,
      sidebar: !prevState.sidebar,
    }));
  };

  return (
    <div className="sidebar">
      <div className="sidebar-items"></div>
      <MyFavourites />
      <div className="sidebar-title">
        <button className="sidebar-title-Button" onClick={toggleSidebarDropdown}>
          <b>Filter</b>
        </button>
      </div>
      {dropdownState.sidebar && (
        <div className="meals">
          <div>
            <button onClick={() => toggleDropdown("breakfast")} className="breakfast">
              Breakfast
            </button>
            {dropdownState.breakfast && (
              <div className="type-of-meals">
                {/* Content for the Breakfast dropdown */}
                {/* Add your content here */}
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleDropdown("brunch")} className="brunch">
              Brunch
            </button>
            {dropdownState.brunch && (
              <div className="type-of-meals">
                {/* Content for the Brunch dropdown */}
                {/* Add your content here */}
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleDropdown("lunch")} className="lunch">
              Lunch
            </button>
            {dropdownState.lunch && (
              <div className="type-of-meals">
                {/* Content for the Lunch dropdown */}
                {/* Add your content here */}
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleDropdown("dinner")} className="dinner">
              Dinner
            </button>
            {dropdownState.dinner && (
              <div className="type-of-meals">
                <div className="carne">sadada</div>
                <div className="carne">sadada</div>
                <div className="carne">sadada</div>
                <div className="carne">sadada</div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// import React from "react";
// import "./Sidebar.css";

// export const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="sidebar-items"></div>
//       <div className="sidebar-title">
//         <b>Filter</b>
//       </div>
//       <div className="meals">
//         <div className="breakfast">Breakfast</div>

//         <div className="type-of-meals"></div>
//         <div className="vegan">Vegan</div>
//         <div className="brunch">Brunch</div>
//         <div className="lunch">Lunch</div>
//         <div className="dinner">Dinner</div>
//       </div>
//     </div>
//   );
// };
import React, { useState } from "react";
import "./Sidebar.css";

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

  return (
    <div className="sidebar">
      <div className="sidebar-items"></div>
      <div className="sidebar-title">
        <b>Filter</b>
      </div>
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
            </div>)
          }
        </div>

        <div>
          <button onClick={() => toggleDropdown("lunch")} className="lunch">
            Lunch
          </button>
          {dropdownState.lunch && (
            <div className="type-of-meals">
              {/* Content for the Lunch dropdown */}
              {/* Add your content here */}
            </div>)
          }
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
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

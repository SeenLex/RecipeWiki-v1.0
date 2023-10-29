import React, { useState } from "react";
import "./Searchbar.css";

export const Searchbar = ({ input, setInput }) => {
  return (
    <div className="search-input-container">
      <div className="loop" />
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

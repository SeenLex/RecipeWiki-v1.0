import React, { useState } from "react";
import "./Cards.css";

export const Cards = () => {
  const [cards] = useState([
    {
      title: "card1",
      test: "lorerbniueasbndaosikmnofnwerionf",
    },
    {
      title: "card2",
      test: "lorerbniueasbndaosikmnofnwerionf",
    },
    {
      title: "card3",
      test: "lorerbniueasbndaosikmnofnwerionf",
    },
    {
      title: "card4",
      test: "lorerbniueasbndaosikmnofnwerionf",
    },
    {
      title: "card5",
      test: "lorerbniueasbndaosikmnofnwerionf",
    },
    {
      title: "card6",
      test: "lorerbniueasbndaosikmnofnwerionf",
    },
    {
      title: "card6",
      test: "lorerbniueasbndaosikmnofnwerionf",
    },
    {
      title: "card6",
      test: "lorerbniueasbndaosikmnofnwerionf",
    },
    {
      title: "card6",
      test: "lorerbniueasbndaosikmnofnwerionf",
    },
    {
      title: "card6",
      test: "lorerbniueasbndaosikmnofnwerionf",
    },
    {
      title: "card6",
      test: "lorerbniueasbndaosikmnofnwerionf",
    },
    {
      title: "card6",
      test: "lorerbniueasbndaosikmnofnwerionf",
    },
    {
      title: "card6",
      test: "lorerbniueasbndaosikmnofnwerionf",
    },
    {
      title: "card6",
      test: "lorerbniueasbndaosikmnofnwerionf",
    },
    {
      title: "card6",
      test: "lorerbniueasbndaosikmnofnwerionf",
    },
    
  ]);
  return (
    <div>
      <selection>
        <div className="container">
          <div className="cards">
            {cards.map((card, i) => (
              <div key={i} className="card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <button className="button">Explore</button>
              </div>
            ))}
          </div>
        </div>
      </selection>
    </div>
  );
};

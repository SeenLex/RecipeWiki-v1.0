import React, { useState } from "react";
import "./Cards.css";

export const Cards = () => {
  const [cards] = useState([
    {
      title: "card1",
      test: "lorerbniueasbndaosikmnofnwerasdasdasdsadsadsadasdsadasdsadsadasdasdadsadasdaionf",
    },
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
      test: "lorerbniueasbndaosikmnofnweri",
    },
  ]);
  return (
    <div>
      <div className="title-cards">
        <h1>Recipes</h1>
      </div>
      <div className="cards">
        {cards.map((card, i) => (
          <div key={i} className="card">
            <img src="https://i.pinimg.com/originals/c3/e7/92/c3e792580a8cb5372d5ac027dcfa8d10.jpg" height={300} width={500} alt=""></img>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-text">{card.test}</p>
            <button className="button">Explore</button>
          </div>
        ))}
      </div>
    </div>
  );
};

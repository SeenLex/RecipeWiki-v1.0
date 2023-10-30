import React from "react";

const Card = ({card}) => {
  function extractIdFromUri(uri) {
    return uri.split('#recipe_').pop()
  }
  return (
    <div className="card border border-gray-400 rounded-lg overflow-hidden max-w-[320px]">
      <img
        src={card.image}
        height={300}
        width={500}
        className="max-h-[200px] object-cover"
        alt=""
      ></img>
      <div className="p-4">
        <h3 className="mb-4">{card.label}</h3>
        <p className="mb-3">{parseInt(card.calories)} calories</p>
        <a href={`/recipe/${extractIdFromUri(card.uri)}`} className="button px-4 py-2 border border-black rounded-md">Explore</a>
        <div className="text-red-200">{}</div>
      </div>
    </div>
  );
};

export default Card;

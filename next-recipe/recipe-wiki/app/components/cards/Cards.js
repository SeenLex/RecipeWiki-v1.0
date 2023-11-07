"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";

export const Cards = () => {
  const [recipes, setRecipes] = useState();
  const baseLink = "https://api.edamam.com/api/recipes/v2";
  const app_id = "77ab4532";
  const app_key = "9b2df32292418d119f55ecb45f2d48d3";
  const [search, setSearch] = useState("");
  const [realSearch, setRealSearch] = useState("");

  useEffect(() => {
    const searchRecipes = async (query) => {
      const response = await fetch(
        `${baseLink}?` +
          new URLSearchParams({
            q: query,
            app_id: app_id,
            app_key: app_key,
            type: "public",
            mealType: "Breakfast",
          }),
        {
          method: "GET",
        }
      );
      try {
        const recipes = await response.json();
        console.log(recipes.hits);
        setRecipes(recipes.hits);
        console.log(recipes.hits);
      } catch (e) {
        console.log(e);
      }
    };
    if (realSearch) {
      searchRecipes(realSearch);
    }
  }, [realSearch]);

  return (
    <div className="col-span-10 py-12 px-6">
      <div className="title-cards">
        <h1 className="text-2xl font-bold mb-6">Recipes</h1>
      </div>
      <input
        className="px-4 py-2 rounded border border-gray-200 overflow-hidden mb-12"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            setRealSearch(search);
          }
        }}
      />
      <div className="flex flex-wrap gap-8">  
        {recipes &&
          recipes.map((recipe, i) => (
            <Card key={`card-${i}`} card={recipe.recipe} />
          ))}
      </div>
    </div>
  );
};

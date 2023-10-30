"use client";
import Card from "@/app/components/cards/Card";
import React, { useEffect, useState } from "react";

const RecipePage = ({ params }) => {
  const [recipe, setRecipe] = useState();
  const baseLink = "https://api.edamam.com/api/recipes/v2";
  const app_id = "77ab4532";
  const app_key = "9b2df32292418d119f55ecb45f2d48d3";

  useEffect(() => {
    const getRecipe = async (query) => {
      const response = await fetch(
        `${baseLink}/${params.id}?` +
          new URLSearchParams({
            app_id: app_id,
            app_key: app_key,
            type: "public",
          }),
        {
          method: "GET",
        }
      );
      try {
        const recipe = await response.json();
        setRecipe(recipe.recipe);
      } catch (e) {
        console.log(e);
      }
    };
    getRecipe();
  }, []);
  return <div>{recipe && <Card card={recipe} />}</div>;
};

export default RecipePage;

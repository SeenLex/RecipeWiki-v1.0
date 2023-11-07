import React from "react";

export const RecipePageCard = ({recipeInfo}) => {
  console.log(recipeInfo);
  return <div>{recipeInfo.label}</div>;
};

export default RecipePageCard;
import React from "react";
import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id.toString() === id)
  );

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Add EditRecipeForm and DeleteRecipeButton if needed */}
    </div>
  );
};

export default RecipeDetail;

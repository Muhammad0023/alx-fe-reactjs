import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipesData from '../data.json'; 

const RecipeDetail = () => {
  // Get the dynamic parameter 'id' from the URL
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // Convert the URL parameter (which is a string) to a number
    const recipeId = parseInt(id); 

    // Find the recipe in the mock data array
    const foundRecipe = recipesData.find(r => r.id === recipeId);

    if (foundRecipe) {
      setRecipe(foundRecipe);
      setLoading(false);
    } else {
      setError(`Recipe with ID ${id} not found.`);
      setLoading(false);
    }
  }, [id]); // Re-run effect if the ID changes

  if (loading) return <div className="text-center mt-8 text-xl">Loading recipe details...</div>;
  if (error) return <div className="text-center mt-8 text-red-500 text-xl">{error}</div>;
  if (!recipe) return null; // Should be handled by error, but good practice

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-10">
      {/* Back button */}
      <Link 
        to="/" 
        className="inline-block mb-6 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
      >
        ← Back to all Recipes
      </Link>

      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header Section with Image and Title */}
        <div className="md:flex">
          <div className="md:w-1/2 lg:w-2/5">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-64 object-cover md:h-full" 
            />
          </div>
          <div className="md:w-1/2 lg:w-3/5 p-8 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">
              {recipe.title}
            </h1>
            <p className="text-xl text-gray-600 italic border-l-4 border-indigo-500 pl-4">
              {recipe.summary}
            </p>
          </div>
        </div>

        {/* Content Section: Ingredients and Instructions */}
        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-gray-200">
          
          {/* Ingredients Column */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4 border-b-2 pb-1">
              Ingredients
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((item, index) => (
                <li key={index} className="flex items-start text-lg text-gray-700">
                  <span className="text-indigo-500 mr-3 mt-1">
                    {/* Simple checkmark icon */}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions Column */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4 border-b-2 pb-1">
              Preparation Steps
            </h2>
            <ol className="space-y-6">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="flex items-start">
                  {/* Step number badge */}
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center mr-4 mt-1">
                    {index + 1}
                  </span>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
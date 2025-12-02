import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipesData from '../data.json'; 

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load recipe data from JSON
  useEffect(() => {
    try {
      setRecipes(recipesData);
      setLoading(false);
    } catch (e) {
      console.error("Error loading recipes:", e);
      setError("Failed to load recipes.");
      setLoading(false);
    }
  }, []);

  if (loading) return <div className="text-center mt-8 text-xl">Loading recipes...</div>;
  if (error) return <div className="text-center mt-8 text-red-500 text-xl">{error}</div>;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 border-b-2 pb-2">
        🍽️ Featured Recipes
      </h1>
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <Link 
            key={recipe.id} 
            to={`/recipe/${recipe.id}`}
            className="block" 
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] transform">
              
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-48 object-cover" 
              />
              
              <div className="p-5">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2 truncate">
                  {recipe.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {recipe.summary}
                </p>
                <div className="text-indigo-600 font-medium hover:text-indigo-800">
                  View Recipe →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
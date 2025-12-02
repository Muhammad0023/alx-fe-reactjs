import React, { useState, useEffect } from 'react';
// We'll use the Link component from react-router-dom for navigation
import { Link } from 'react-router-dom'; 

// Import the mock data directly
import recipesData from '../data.json'; 

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to load the data when the component mounts
  useEffect(() => {
    try {
      // In a real application, you would make an API call here (e.g., fetch('/api/recipes'))
      // Since it's local JSON, we simulate the fetching process
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
      
      {/* Responsive Grid Layout using Tailwind CSS:
        - grid-cols-1 on small screens (mobile)
        - md:grid-cols-2 on medium screens (tablet)
        - lg:grid-cols-3 on large screens (desktop)
        - gap-6 adds consistent spacing between grid items
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          // Link component for navigation to the detail page
          <Link 
            key={recipe.id} 
            to={`/recipe/${recipe.id}`}
            className="block" // Link needs to be block level for the whole card to be clickable
          >
            {/* Recipe Card Styling:
              - bg-white: White background
              - rounded-lg: Rounded corners
              - shadow-lg: Large box shadow
              - overflow-hidden: Ensures image corners are rounded
              - transition-all duration-300: Smooth transition for hover effects
              - hover:shadow-2xl: Darker shadow on hover
              - hover:scale-[1.02]: Slightly scale up the card on hover for interactivity
            */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] transform">
              {/* Recipe Image */}
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-48 object-cover" 
              />
              
              {/* Card Content */}
              <div className="p-5">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2 truncate">
                  {recipe.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {recipe.summary}
                </p>
                {/* A Call to Action element (the Link makes the whole card clickable, but this adds a visual cue) */}
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
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-indigo-600 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Site Title */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-xl font-bold tracking-wider">
              🥘 RecipeShare
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link 
              to="/" 
              className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/add" 
              className="bg-white text-indigo-600 hover:bg-indigo-100 px-3 py-2 rounded-md text-sm font-bold transition-colors"
            >
              Add Recipe
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
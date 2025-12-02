import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import all components
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    // Router context for the application
    <Router>
      <div className="min-h-screen bg-gray-50">
        
        {/* Navigation Bar - Renders on all pages */}
        <NavBar /> 

        <Routes>
          {/* Route for the Home Page */}
          <Route path="/" element={<HomePage />} />
          
          {/* Route for the Recipe Detail Page, using a dynamic :id parameter */}
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          
          {/* Route for adding a new recipe */}
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
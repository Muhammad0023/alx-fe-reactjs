import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import SearchBar from "./components/SearchBar";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
      <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <SearchBar />
        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          } />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

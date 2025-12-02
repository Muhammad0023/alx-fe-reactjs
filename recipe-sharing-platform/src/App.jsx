import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetail from "./components/RecipeDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="p-4">
        {/* Navigation */}
        <nav className="mb-6 flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-gray-700"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "text-gray-700"
            }
          >
            Add Recipe
          </NavLink>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

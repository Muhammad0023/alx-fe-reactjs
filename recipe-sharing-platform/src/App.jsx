import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetail from "./components/RecipeDetail"; 

function App() {
  return (
    <div className="p-4">
      {/* Navigation */}
      <nav className="mb-6 flex gap-4 border-b pb-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
              : "text-gray-700 hover:text-blue-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
              : "text-gray-700 hover:text-blue-500"
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
  );
}

export default App;

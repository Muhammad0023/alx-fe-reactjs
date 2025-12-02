import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";

function App() {
  return (
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
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddRecipe />} />
      </Routes>
    </div>
  );
}

export default App;

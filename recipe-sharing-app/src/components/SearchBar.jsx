import React from "react";
import { useRecipeStore } from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  const onChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={onChange}
      style={{ padding: "0.5rem", width: "100%", marginBottom: "1rem" }}
    />
  );
};

export default SearchBar;

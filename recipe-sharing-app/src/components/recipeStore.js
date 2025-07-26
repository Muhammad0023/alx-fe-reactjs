import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  // Add recipe action (keep existing)
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe],
  })),

  // Set search term and automatically filter recipes
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    const { recipes } = get();
    set({
      filteredRecipes: recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    });
  },

  // Initialize recipes and filtered recipes
  setRecipes: (recipes) => set({
    recipes,
    filteredRecipes: recipes,
  }),

  // Optional: If you want a separate filterRecipes method
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    set({
      filteredRecipes: recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    });
  },
}));

export default useRecipeStore;

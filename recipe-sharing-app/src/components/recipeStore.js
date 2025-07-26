import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],

  favorites: [],
  addFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.includes(recipeId) ? state.favorites : [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  recommendations: [],
  generateRecommendations: () => set(state => {
    // Example recommendation: random half of favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // Keep other existing states and actions, e.g. addRecipe, deleteRecipe, updateRecipe
}));

export { useRecipeStore };

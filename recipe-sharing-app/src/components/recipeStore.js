import create from "zustand";

export const useRecipeStore = create(set => ({
  recipes: [
    { id: 1, title: "Spaghetti Carbonara", description: "Classic Italian pasta." },
    { id: 2, title: "Chicken Curry", description: "Spicy and creamy." },
    { id: 3, title: "Beef Stroganoff", description: "Rich and hearty." },
  ],
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
}));

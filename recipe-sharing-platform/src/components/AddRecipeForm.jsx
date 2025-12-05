import { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ingredients: "",
    steps: "",
    imageUrl: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // <-- your project requirement
    });
  };

  // Validate form
  const validate = () => {
    let newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.ingredients.trim()) newErrors.ingredients = "Ingredients required";
    if (!formData.steps.trim()) newErrors.steps = "Steps required";

    return newErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onAddRecipe(formData);

    // Reset after submit
    setFormData({
      title: "",
      description: "",
      ingredients: "",
      steps: "",
      imageUrl: "",
    });

    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-xl space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Add a New Recipe</h2>

      {/* Title */}
      <div>
        <label className="block font-medium mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          placeholder="Recipe title"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block font-medium mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          placeholder="Short description"
        ></textarea>
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>

      {/* Ingredients */}
      <div>
        <label className="block font-medium mb-1">Ingredients</label>
        <textarea
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          placeholder="List ingredients"
        ></textarea>
        {errors.ingredients && (
          <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
        )}
      </div>

      {/* Steps */}
      <div>
        <label className="block font-medium mb-1">Steps</label>
        <textarea
          name="steps"
          value={formData.steps}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          placeholder="Describe how to cook it"
        ></textarea>
        {errors.steps && (
          <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
        )}
      </div>

      {/* Image URL */}
      <div>
        <label className="block font-medium mb-1">Image URL (optional)</label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          placeholder="https://example.com/photo.jpg"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md transition"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;

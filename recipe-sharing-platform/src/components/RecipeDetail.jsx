import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold">Recipe not found</h1>
        <Link to="/" className="text-blue-600 underline mt-4 inline-block">
          Go back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">
        &larr; Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow-md p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Summary</h2>
          <p className="text-gray-700">{recipe.summary}</p>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Example ingredient 1</li>
            <li>Example ingredient 2</li>
            <li>Example ingredient 3</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700">
            <li>Step 1: Do this</li>
            <li>Step 2: Do that</li>
            <li>Step 3: Finish up</li>
          </ol>
        </section>
      </div>
    </div>
  );
}

export default RecipeDetail;

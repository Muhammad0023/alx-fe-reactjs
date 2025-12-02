// ... other imports

import AddRecipeForm from './components/AddRecipeForm'; // <-- NEW IMPORT

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* You could add a simple navigation bar here */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add" element={<AddRecipeForm />} /> {/* <-- NEW ROUTE */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from "react";
import UserProfile from "./components/UserProfile"; // make sure the path is correct
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <UserProfile />
    </div>
  );
}

export default App;

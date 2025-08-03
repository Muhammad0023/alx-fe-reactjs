import React from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>GitHub User Search</h1>
      <Search onSearch={fetchUserData} />
    </div>
  );
}

export default App;

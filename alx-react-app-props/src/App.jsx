import React from "react";
import UserContext from "./UserContext";
import UserProfile from "./components/UserProfile";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  // This is the user data we'll provide via context
  const userData = { name: "Alice", email: "alice@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div>
        <Header />
        <MainContent />
        <WelcomeMessage />
        <UserProfile />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;

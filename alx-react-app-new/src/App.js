import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter'; // ✅ Must be here

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age={25} bio="Loves traveling and photography." />
      <UserProfile name="Mohammed" age={30} bio="Coffee enthusiast and mountain climber." />
      <Counter /> {/* ✅ Must be present */}
      <Footer />
    </div>
  );
}

export default App;

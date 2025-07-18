import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import UserProfile from './UserProfile';
import Footer from './Footer';


function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Muhammad" age="20" bio="Loves hiking and photography" />
      <Footer />
    </div>
  );
}

export default App;

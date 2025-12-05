import React, { useContext } from 'react'; // Import useContext
import UserContext from './UserContext';    // Import the context

// The component no longer accepts props
function UserDetails() {
  // 1. Use the useContext hook to read the value from the nearest Provider
  const userData = useContext(UserContext); 

  return (
    <div>
      {/* 2. Use the data directly */}
      <h2>User Details (from Context)</h2>
      <p>Name: **{userData.name}**</p>
      <p>Email: **{userData.email}**</p>
    </div>
  );
}

export default UserDetails;
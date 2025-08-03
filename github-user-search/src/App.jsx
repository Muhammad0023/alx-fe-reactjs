import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubService';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const results = await fetchUserData(searchParams);
      if (results.length === 0) {
        setError('No users found matching your criteria');
      } else {
        setUsers(results);
      }
    } catch (err) {
      setError('Error fetching users');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub Advanced User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p className="text-center text-blue-600">Loading...</p>}

      {error && <p className="text-center text-red-600">{error}</p>}

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

function UserCard({ user }) {
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col items-center">
      <img
        src={user.avatar_url}
        alt={`${user.login} avatar`}
        className="w-24 h-24 rounded-full mb-4"
      />
      <h2 className="text-lg font-semibold mb-1">{user.login}</h2>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View Profile
      </a>
    </div>
  );
}

export default App;

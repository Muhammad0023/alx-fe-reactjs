import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUsers } from './services/githubService';

function App() {
  const [users, setUsers] = useState([]);  // List of users from search
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await fetchUsers(searchParams);
      if (data.items && data.items.length > 0) {
        setUsers(data.items);
      } else {
        setError('No users found matching your criteria');
      }
    } catch (err) {
      setError('Error fetching users');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6">GitHub Advanced User Search</h1>

      <Search onSearch={handleSearch} />

      {loading && <p className="mt-4 text-blue-500 font-semibold">Loading...</p>}

      {error && <p className="mt-4 text-red-600 font-semibold">{error}</p>}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {users.map(user => (
          <div key={user.id} className="p-4 border rounded shadow hover:shadow-lg transition">
            <img
              src={user.avatar_url}
              alt={`${user.login} avatar`}
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h2 className="text-xl font-semibold mt-2 text-center">{user.login}</h2>
            <p className="text-center mt-1">
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

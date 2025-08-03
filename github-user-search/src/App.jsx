import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUsers } from './services/githubService';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (criteria) => {
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await fetchUsers(criteria);
      if (data.items && data.items.length > 0) {
        setUsers(data.items);
      } else {
        setError('No users found matching your criteria');
      }
    } catch (err) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold mb-6 text-center">GitHub Advanced User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-600">{error}</p>}

      {users.length > 0 && (
        <ul className="mt-6 space-y-6 max-w-3xl mx-auto">
          {users.map(user => (
            <li key={user.id} className="flex items-center space-x-4 p-4 border rounded shadow">
              <img
                src={user.avatar_url}
                alt={`${user.login} avatar`}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-xl font-semibold">{user.login}</h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search({ onResults }) {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const data = await fetchUserData(username.trim());
      if (data) {
        onResults(data);
      } else {
        setError('Looks like we can’t find the user');
        onResults(null);
      }
    } catch (err) {
      setError('Looks like we can’t find the user');
      onResults(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p className="text-red-600">{error}</p>}
    </>
  );
}

export default Search;

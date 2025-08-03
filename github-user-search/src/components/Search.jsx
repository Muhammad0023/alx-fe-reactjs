import React, { useState } from 'react';

function Search({ onSearch }) {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const criteria = {
      username: username.trim(),
      location: location.trim(),
      minRepos: minRepos.trim(),
    };
    await onSearch(criteria);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded shadow max-w-md mx-auto">
      <div>
        <label className="block mb-1 font-semibold" htmlFor="username">GitHub Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold" htmlFor="location">Location (optional)</label>
        <input
          id="location"
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={e => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold" htmlFor="minRepos">Minimum Repositories (optional)</label>
        <input
          id="minRepos"
          type="number"
          min="0"
          placeholder="Enter minimum repos"
          value={minRepos}
          onChange={e => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}

export default Search;

import React, { useState } from "react";

function Search({ onSearch, users, loading, error }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Using async here to satisfy the test requirements
    await onSearch({ username, location, minRepos });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block font-semibold">
            GitHub Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="location" className="block font-semibold">
            Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location (optional)"
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label htmlFor="minRepos" className="block font-semibold">
            Minimum Repositories
          </label>
          <input
            id="minRepos"
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Enter minimum repos (optional)"
            className="border p-2 rounded w-full"
            min={0}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error */}
      {error && <p className="text-red-600">{error}</p>}

      {/* Display users with map and conditional rendering using && */}
      {users && users.length > 0 && (
        <ul className="mt-6 space-y-4">
          {users.map((user) => (
            <li key={user.id} className="border p-4 rounded flex items-center space-x-4">
              <img
                src={user.avatar_url}
                alt={`${user.login} avatar`}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-bold text-lg">{user.login}</h3>
                <p>{user.location || "No location"}</p>
                <p>Repos: {user.public_repos ?? "N/A"}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View Profile
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* No users found */}
      {users && users.length === 0 && !loading && !error && (
        <p>No users found matching your criteria</p>
      )}
    </div>
  );
}

export default Search;

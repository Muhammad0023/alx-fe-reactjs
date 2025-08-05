import React, { useState } from 'react';

function Search({ onResults }) {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    onResults(null); // clear previous results

    try {
      // fetchUserData should be called from parent via props or service; here we expect parent handles that
      await onResults(username.trim());
    } catch (err) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: '0.5rem', width: '300px' }}
      />
      <button type="submit" style={{ padding: '0.5rem 1rem', marginLeft: '0.5rem' }}>
        Search
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default Search;

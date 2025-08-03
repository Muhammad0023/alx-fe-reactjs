import axios from 'axios';

export async function fetchUsers({ username, location, minRepos }) {
  // Build GitHub search query dynamically
  let query = '';
  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  const response = await axios.get(url);
  return response.data;  // This returns an object with `items` array
}

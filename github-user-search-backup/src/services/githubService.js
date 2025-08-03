import axios from 'axios';

export async function searchGithubUsers({ username, location, minRepos }) {
  let query = '';
  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  if (!query) return [];

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=20`;

  const response = await axios.get(url);
  // The search API returns items array
  return response.data.items;
}

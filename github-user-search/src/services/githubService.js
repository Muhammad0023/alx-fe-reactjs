import axios from 'axios';

export async function fetchUserData({ username = '', location = '', minRepos = '' }) {
  try {
    let query = '';

    if (username) query += `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    query = query.trim();

    if (!query) return [];

    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);

    return response.data.items;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
}

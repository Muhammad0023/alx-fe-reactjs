// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export async function fetchUsersAdvanced({ username = '', location = '', repos = 0 }) {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (repos) query += ` repos:>=${repos}`;

  try {
    const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}`);
    return response.data; // returns the entire search result object
  } catch (error) {
    throw error;
  }
}

// Use axios to fetch GitHub user data by username
import axios from 'axios';

export async function fetchUserData(username) {
  const url = `https://api.github.com/users/${username}`;
  const response = await axios.get(url);
  return response.data;
}

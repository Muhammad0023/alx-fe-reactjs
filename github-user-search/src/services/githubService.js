import axios from 'axios';

const GITHUB_SEARCH_API_URL = 'https://api.github.com/search/users';

export const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = username;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(`${GITHUB_SEARCH_API_URL}?q=${query}`);
    return response.data.items;
  } catch (error) {
    throw new Error("Looks like we cant find the user");
  }
};

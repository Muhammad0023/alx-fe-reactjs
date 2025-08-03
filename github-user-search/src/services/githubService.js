const BASE_URL = 'https://api.github.com/search/users';

export const searchGithubUsers = async ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>${minRepos}`;

  try {
    const response = await fetch(`${BASE_URL}?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    return [];
  }
};

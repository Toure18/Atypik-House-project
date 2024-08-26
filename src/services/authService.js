import axios from 'axios';

const API_URL = 'https://atypik-house-project.vercel.app/auth/';

const login = (email, password) => {
  return axios
    .post(API_URL + 'login', { email, password })
    .then((response) => {
      if (response.data.access_token) {
        const userData = response.data;
        console.log(response.data)
        // Check if the user is an admin
        if (userData.accountType === 'admin') {
          // Store user data in local storage
          localStorage.setItem('user', JSON.stringify(userData));
          return userData;
        } else {
          throw new Error('Unauthorized: You do not have admin access.');
        }
      }
      throw new Error('Login failed: No access token provided.');
    });
};

const refreshToken = () => {
  return axios.post(API_URL + 'refresh-token').then((response) => {
    if (response.data.access_token) {
      return response.data.access_token;
    }
    throw new Error('Token refresh failed');
  });
};

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

const isAuthenticated = () => {
  const user = getCurrentUser();
  return !!user && !!user.access_token;
};

const getAuthHeader = () => {
  const user = getCurrentUser();
  if (user && user.access_token) {
    return { Authorization: 'Bearer ' + user.access_token };
  } else {
    return {};
  }
};

export default {
  login,
  logout,
  refreshToken,
  getCurrentUser,
  isAuthenticated,
  getAuthHeader,
};

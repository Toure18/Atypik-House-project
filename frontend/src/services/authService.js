import axios from 'axios';
import apiInstance from './apiInstance';


const API_URL = 'https://atypik-house-project-toure18s-projects.vercel.app/auth';

const register = (firstname, lastname, email, password, accountType) => {
  return axios.post(API_URL + 'register', {
    firstname,
    lastname,
    email,
    password,
    accountType
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + 'login', { email, password })
    .then((response) => {
      if (response.data.access_token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

const refreshToken = () => {
  return axios
    .post(API_URL + 'refresh-token')
    .then((response) => {
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
  register,
  login,
  logout,
  refreshToken,
  getCurrentUser,
  isAuthenticated,
  getAuthHeader
};

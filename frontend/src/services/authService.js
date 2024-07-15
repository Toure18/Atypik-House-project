import axios from 'axios';

const API_URL = 'http://localhost:5000/auth/';

const register = (firstname, lastname, email, password, accountType ) => {
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

const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export default {
  login,
  logout,
  getCurrentUser,
  register
};

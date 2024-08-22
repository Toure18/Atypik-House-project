// services/apiInstance.js

import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Changement ici
import AuthService from './authService';
import { useNavigate } from 'react-router-dom';

const API_URL = 'https://atypik-house-project-jsrprk3fs-toure18s-projects.vercel.app/auth';

// Créer une instance Axios pour intercepter les requêtes
const apiInstance = axios.create();

apiInstance.interceptors.request.use(
  async (config) => {
    const user = AuthService.getCurrentUser();
    
    if (user && user.access_token) {
      const token = user.access_token;
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      // Vérifier si le token est expiré
      if (decodedToken.exp < currentTime) {
        try {
          // Renouveler le token
          const refreshedToken = await AuthService.refreshToken();
          user.access_token = refreshedToken;
          localStorage.setItem('user', JSON.stringify(user));
          config.headers['Authorization'] = 'Bearer ' + refreshedToken;
        } catch (error) {
          // Rediriger l'utilisateur si le token ne peut pas être renouvelé
          AuthService.logout();
          useNavigate()('/login');
          return Promise.reject(error);
        }
      } else {
        // Si le token est valide, ajouter l'en-tête Authorization
        config.headers['Authorization'] = 'Bearer ' + token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiInstance;

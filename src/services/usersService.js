// src/services/usersService.js
import axios from 'axios';
import apiInstance from './apiInstance';

const API_URL = 'https://atypik-house-project.vercel.app/users'; 

class UsersService {
  async getUsers() {
    try {
      const response = await apiInstance.get(API_URL);
      return response.data; 
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
      throw error;
    }
  }

  async getUser(id) {
    try {
      const response = await apiInstance.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'utilisateur:', error);
      throw error;
    }
  }

}

export default new UsersService();

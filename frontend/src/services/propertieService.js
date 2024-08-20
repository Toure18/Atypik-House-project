// src/services/propertiesService.js

import apiInstance from './apiInstance';
import axios from 'axios';

const API_URL = 'http://localhost:5000/properties';

class PropertiesService {
  getAllProperties() {
    return axios.get(`${API_URL}/all`);
  }

  getUserProperties() {
    return apiInstance.get(`${API_URL}/my-properties`);
  }


  getPropertyById(id) {
    return axios.get(`${API_URL}/${id}`);
  }


  createProperty(propertyData) {
    return apiInstance.post(`${API_URL}/new`, propertyData);
  }


  updateProperty(id, propertyData) {
    return apiInstance.patch(`${API_URL}/${id}`, propertyData);
  }


  deleteProperty(id) {
    return apiInstance.delete(`${API_URL}/${id}`);
  }
}

export default new PropertiesService();

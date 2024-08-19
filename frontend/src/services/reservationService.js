// src/services/bookingService.js

import apiInstance from './apiInstance'; 


const API_URL = 'http://localhost:5000/booking';

class BookingService {
  getAllBookings() {
    return apiInstance.get(`${API_URL}`);
  }

  getBookingById(id) {
    return apiInstance.get(`${API_URL}/${id}`);
  }

  createBooking(bookingData, propertyId) {
    return apiInstance.post(`${API_URL}?id_property=${propertyId}`, bookingData);
  }
 
  updateBooking(id, bookingData) {
    return apiInstance.patch(`${API_URL}/${id}`, bookingData);
  }
 
  deleteBooking(id) {
    return apiInstance.delete(`${API_URL}/${id}`);
  }
}

export default new BookingService();

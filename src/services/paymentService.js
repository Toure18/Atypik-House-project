import apiInstance from './apiInstance'; 

const API_URL = 'https://atypik-house-project.vercel.app/payment'; // URL de votre API

class PaymentService {
  
  async findAll() {
    try {
      const response = await apiInstance.get(API_URL);
      return response.data; // Contient `payments`
    } catch (error) {
      console.error('Erreur lors de la réception de la liste de paiements:', error);
      throw error;
    }
  }

  async getPaymentsByBookingId(bookingId) {
    try {
     return await apiInstance.get(`${API_URL}/booking?bookingId=${bookingId}`);
      
    } catch (error) {
      console.error('Erreur lors de la récupération des paiements:', error);
      throw error; 
    }
  }
}



export default new PaymentService();

// src/services/paymentService.js

import apiInstance from './apiInstance'; 


const API_URL = 'https://atypik-house-project-toure18s-projects.vercel.app/payment'; // URL de votre API

class PaymentService {
  // Création d'un paiement
  async createPayment(paymentData) {
    try {
      const response = await apiInstance.post(`${API_URL}`, paymentData);
      return response.data; // Contient `payment` et `sessionUrl`
    } catch (error) {
      console.error('Erreur lors de la création du paiement:', error);
      throw error; // Lance l'erreur pour être gérée ailleurs
    }
  }

  // Gestion des webhooks Stripe (à appeler depuis le backend si nécessaire)
  async handleStripeWebhook(reqBody, sig) {
    try {
      const response = await apiInstance.post(`${API_URL}/webhook`, reqBody, {
        headers: {
          'Stripe-Signature': sig,
        },
      });
      return response.data; // Contient la réponse du webhook
    } catch (error) {
      console.error('Erreur lors de la gestion du webhook Stripe:', error);
      throw error; // Lance l'erreur pour être gérée ailleurs
    }
  }
}

export default new PaymentService();

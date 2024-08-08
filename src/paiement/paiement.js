import React, { useState, useEffect } from 'react';
import LoadingGif from './loading.gif'; 

function PaymentStatusPage() {
    const [loading, setLoading] = useState(true);
    const [paymentStatus, setPaymentStatus] = useState('');

    useEffect(() => {
        // Simulation de paiement
        setTimeout(() => {
            const paymentConfirmed = Math.random() > 0.5; // reponse aléatoire
            if (paymentConfirmed) {
                setPaymentStatus('Paiement effectué!');
            } else {
                setPaymentStatus('Échec du paiement. Veuillez réessayer plus tard.');
            }
            setLoading(false);
        }, 2000); 
    }, []);

    if (loading) {
        return (
            <div style={{
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh',
                flexDirection: 'column'  
            }}>
                <img src={LoadingGif} alt="Loading..." style={{ width: '100px', height: '100px' }} />
                <p>Traitement de votre paiement...</p>
            </div>
        );
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p>{paymentStatus}</p>
        </div>
    );
}

export default PaymentStatusPage;
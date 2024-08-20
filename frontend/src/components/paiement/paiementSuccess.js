import React, { useState, useEffect } from 'react';
import LoadingGif from './loading.gif'; 
import { useNavigate } from 'react-router-dom';


function PaymentStatusPage() {
    const [loading, setLoading] = useState(true);
    const [paymentStatus, setPaymentStatus] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        setTimeout(() => {
            setPaymentStatus('Paiement effectué avec succès !');
            setLoading(false);
        }, 2000); 
    }, []);

    const handleContinue = () => {
        navigate('/');
    };

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
            <button 
                onClick={handleContinue} 
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    border: 'none',
                    borderRadius: '5px',
                    backgroundColor: '#955532',
                    color: '#fff'
                }}
            >
                Continuer ma visite
            </button>
        </div>
    );
}

export default PaymentStatusPage;

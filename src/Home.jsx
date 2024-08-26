import React from 'react';
import { BsFillLightningFill } from 'react-icons/bs';

function Home() {
  return (
    <main className="main-container" style={styles.mainContainer}>
      <div style={styles.messageContainer}>
        <BsFillLightningFill style={styles.icon} />
        <h1 style={styles.title}>Dashboard à venir</h1>
        <p style={styles.subtitle}>
          Nous travaillons dur pour mettre en place un tableau de bord exceptionnel.
        </p>
        <p style={styles.text}>
          Revenez bientôt pour découvrir les nouvelles fonctionnalités et les insights puissants que nous préparons pour vous !
        </p>
      </div>
    </main>
  );
}

const styles = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    color: '#333333', // Couleur du texte
    textAlign: 'center',
    padding: '20px',
  },
  messageContainer: {
    maxWidth: '600px',
  },
  icon: {
    fontSize: '5rem',
    color: '#f5b042', // Couleur de l'icône
    marginBottom: '20px',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.2rem',
  },
};

export default Home;

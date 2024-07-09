/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'], // Assurez-vous que ce chemin correspond à l'endroit où vos fichiers HTML et JSX sont situés
  theme: {
    extend: {
      colors: {
        'brown': {
          100: '#f5f5f4',
          300: '#dcd0c0',
          600: '#886f4c',
          700: '#5c4033',
          900: '#362312'
        },
      }
    }
  },
  plugins: [],
}

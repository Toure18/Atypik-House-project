// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Alegreya, serif', // Utilisez Alegreya comme famille de polices principale
  },
  palette: {
    primary: {
      main: '#955532',
    },
    secondary: {
      main: '#dcd0c0',
    },
    noire: {
        main: '#000000',
      },
  },
});

export default theme;

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#ffa07a',
    },
  },
  spacing: 8,
});

export default theme;
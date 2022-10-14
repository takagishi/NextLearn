import { pink, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: pink[300],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;

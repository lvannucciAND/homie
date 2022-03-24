import { createTheme } from '@mui/material/styles';
import { purple, orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light:  purple[200],
      dark: purple[800],
      contrastText: '#fff',
    },
    secondary: {
      main: orange[500],
      contrastText: '#fff',
    },
  },
});

export default theme;
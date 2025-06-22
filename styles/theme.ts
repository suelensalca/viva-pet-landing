'use client';
import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
    fontSize: 30,
  },
  palette: {
    primary: {
      dark: '#2E7D32',
      main: '#95C11F',
      light: '#CDECB066',
    },
    secondary: {
      dark: '#E06100',
      main: '#FF8600',
      light: '#FFA940',
    },
    common: {
      white: '#F8F8F8',
      black: '#2E383F',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1700,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          margin: '0',
        },
        body: {
          backgroundColor: '#F1F2F6',
          height: '100%',
          fontSize: '16px',
          margin: '0',
        },
      },
    },
  },
});

export default theme;

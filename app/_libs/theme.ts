'use client';

import { createTheme } from '@mui/material/styles';
import { josefinSans, mPlus1Code } from './font';

const fontFamily = [josefinSans.style.fontFamily, mPlus1Code.style.fontFamily].join(' ');


const theme = createTheme({
  palette: {
    primary: {
      main: '#fb8500',
    },
  },
  typography: {
    fontFamily: fontFamily,
    button: {
      textDecoration: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          backgroundColor: '#fb8500',
          color: 'white',
          '&:hover': {
            backgroundColor: '#ffb703',
            color: 'white',
          },
        },
      },
    },
  },
});

export default theme;

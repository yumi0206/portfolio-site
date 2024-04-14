'use client';

import { createTheme } from '@mui/material/styles';
import { josefinSans, mPlus1Code } from './font';

const fontFamily = [josefinSans.style.fontFamily, mPlus1Code.style.fontFamily].join(' ');

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#4fa479',
    },
  },
  typography: {
    fontFamily: fontFamily,
    button: {
      color: '#4fa479',
      fontWeight: 700,
      textDecoration: 'none',
    },
  },
});

export default theme;

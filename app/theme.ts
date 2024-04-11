"use client"

import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#4fa479',
    },
  },
  typography: {
    button: {
      color: '#4fa479',
      fontWeight: 700,
      textDecoration: 'none',
    },
  },
});

export default theme;

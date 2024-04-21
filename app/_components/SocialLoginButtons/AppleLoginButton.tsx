'use client';

import React from 'react';
import { Button } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';

const AppleLoginButton = () => {
  return (
    <Button
      startIcon={<AppleIcon />}
      variant="contained"
      sx={{
        backgroundColor: 'black',
        color: 'white',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
      }}
      fullWidth
    >
      Appleでログイン
    </Button>
  );
};

export default AppleLoginButton;

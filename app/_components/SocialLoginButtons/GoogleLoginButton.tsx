'use client';

import { GoogleLogin } from '@/app/_libs/firebase';
import { Button } from '@mui/material';

const GoogleLoginButton = () => {
  return (
    <Button
      onClick={GoogleLogin}
      variant="contained"
      sx={{
        backgroundColor: 'white',
        color: 'black',
      }}
      fullWidth
      startIcon={
        <img src="/images/google.svg" alt="Google logo" style={{ width: 24, height: 24 }} />
      }
    >
      Googleでログイン
    </Button>
  );
};

export default GoogleLoginButton;

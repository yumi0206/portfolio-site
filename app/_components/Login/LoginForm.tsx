'use client';

import { Button, TextField, Box, Typography } from '@mui/material';
import Link from 'next/link';

import EmailIcon from '@mui/icons-material/Email';
import { toast } from 'react-toastify';
import GoogleLoginButton from '../SocialLoginButtons/GoogleLoginButton';
import AppleLoginButton from '../SocialLoginButtons/AppleLoginButton';

const LoginForm = () => {
  const handleLogin = () => {
    toast('ログイン！！！');
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 480,
        margin: 'auto',
        bgcolor: 'white',
        p: 4,
        gap: 2,
      }}
    >
      <Typography mx={'auto'}>Login</Typography>
      {/* メールアドレス入力 */}
      <TextField label="Email" type="email" variant="outlined" fullWidth />
      <TextField label="Password" type="password" variant="outlined" fullWidth />

      {/* メールアドレスでログインボタン */}
      <Button
        onClick={handleLogin}
        startIcon={<EmailIcon />}
        variant="contained"
        color="primary"
        fullWidth
        sx={{}}
      >
        メールアドレスでログイン
      </Button>

      {/* Google ログインボタン */}
      <GoogleLoginButton />

      {/* Apple ログインボタン */}
      <AppleLoginButton />

      {/* 登録リンク */}
      <Link href="/signup" passHref>
        <Typography fontSize={'small'}>アカウントをお持ちでない方はこちら</Typography>
      </Link>
    </Box>
  );
};
export default LoginForm;

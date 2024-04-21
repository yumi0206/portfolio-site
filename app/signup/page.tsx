import { Button, TextField, Box, Typography } from '@mui/material';
import Link from 'next/link';
import AppleLoginButton from '../_components/SocialLoginButtons/AppleLoginButton';
import GoogleLoginButton from '../_components/SocialLoginButtons/GoogleLoginButton';
import EmailIcon from '@mui/icons-material/Email';

const SignupPage = () => {
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
      <Typography mx={'auto'}>Signup</Typography>
      {/* メールアドレス入力 */}
      <TextField label="Email" type="email" variant="outlined" fullWidth />
      <TextField label="Password" type="password" variant="outlined" fullWidth />
      <TextField label="Password confirm" type="password" variant="outlined" fullWidth />

      {/* メールアドレスで新規登録ボタン */}
      <Button startIcon={<EmailIcon />} variant="contained" color="primary" fullWidth>
        メールアドレスで登録
      </Button>

      {/* Google ログインボタン */}
      <GoogleLoginButton />

      {/* Apple ログインボタン */}
      <AppleLoginButton />

      {/* ログインリンク */}
      <Link href="/login" passHref>
        <Typography fontSize={'small'}>既にアカウントをお持ちの方はこちら</Typography>
      </Link>
    </Box>
  );
};

export default SignupPage;

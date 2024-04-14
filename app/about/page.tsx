import React from 'react';
import { Avatar, Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    // コンテナ全体を画面の中央に配置
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Avatar
          src="/avater.jpg"
          sx={{
            width: 90,
            height: 90,
            border: '3px solid lightgreen',
            mb: 2,
            mx: 'auto',
          }}
        />

        <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>
          ゆみやで
        </Typography>

        <Typography variant="body1">身長: 160cm</Typography>
        <Typography variant="body1">体重: 50kg</Typography>
        <Typography variant="body1">趣味: 料理、読書、格闘技</Typography>
      </Box>
    </Container>
  );
};

export default About;

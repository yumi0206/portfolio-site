import React from 'react';
import { Avatar, Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',  // This ensures that the content is centered vertically
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',  // Align items in the box on the cross-axis (vertically)
          gap: 2,  // Provides some space between the Avatar and the text content
        }}
      >
        <Avatar
          src="/avater.jpg"
          sx={{
            width: 90,
            height: 90,
            border: '3px solid lightgray',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold' }}>
            ゆみやで
          </Typography>
          <Typography variant="body1">身長: 160cm</Typography>
          <Typography variant="body1">体重: 50kg</Typography>
          <Typography variant="body1">趣味: 料理、読書、格闘技</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default About;

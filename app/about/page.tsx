import React from 'react';
import { Avatar, Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '50vh',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          textAlign: { xs: 'center', md: 'left' },
          gap: 4,
        }}
      >
        <Avatar
          src="/images/image26.png"
          sx={{
            width: 300,
            height: 300,
          }}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            padding: '40px',
            backgroundColor: '#f9f9f9',
            width: '100%',
          }}
        >
          <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
            yumi
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: 2, borderBottom: '1px solid lightgray', lineHeight: '1.6' }}
          >
            こんにちは！私は料理、読書、そして格闘技が大好きな人です。料理をするとき、新しいレシピを試すことでいつもキッチンが生き生きとします。一方で、本を読むことは私に別の世界への扉を開いてくれます。また、格闘技に挑戦することで、精神的にも肉体的にも強くなることを学びます。
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: '1.6' }}>
            将来の夢は、自分のカフェを開くことです。このカフェでは、私が世界中から集めたお気に入りの本を客に提供し、同時に健康的で革新的な料理を提供したいと考えています。この場所が、人々が集まり、新たな発見をし、元気づけられる空間になることを願っています。みなさんにお会いできる日を楽しみにしています！
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default About;

import React from 'react';
import {
  Avatar,
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material';
import { fetchBlog } from '@/app/client';
import parse from 'html-react-parser';
import Loading from '@/app/_components/Loading/Loading';

type BlogPageProps = {
  params: {
    id: string;
  };
};

const BlogPage = async ({ params }: BlogPageProps) => {
  const blog = await fetchBlog(params.id);
  console.log(blog);

  if (!blog) return <Loading />;

  return (

      <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
        <Box
          component={'img'}
          src={blog?.thumbnail.url}
          alt="thumbnail"
          sx={{
            width: '100%',
            borderRadius: '5px',
            height: { xs: 300, sm: 400 },
            objectFit: 'cover',
          }}
        />
        <Container
          sx={{ mt: 4, mb: 4, '& img': { maxWidth: '100%', height: 'auto', borderRadius: '5px' } }}
        >
          <Typography
            sx={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '10px',
              color: 'primary.main',
            }}
          >
            {blog.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <Typography sx={{ marginRight: '10px' }}>
              {new Date(blog.updatedAt).toISOString().slice(0, 10).replace(/-/g, '.')}
            </Typography>
            <Typography>/</Typography>
            <Typography sx={{ marginLeft: '10px' }}>{blog.category?.name}</Typography>
          </Box>
          {parse(blog?.content)}
        </Container>
      </Box>

  );
};

export default BlogPage;

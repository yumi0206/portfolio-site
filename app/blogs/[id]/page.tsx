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
        sx={{ width: '100%', borderRadius: '5px' }}
      />
      <Container
        sx={{ mt: 4, mb: 4, '& img': { maxWidth: '100%', height: 'auto', borderRadius: '5px' } }}
      >
        {parse(blog?.content)}
      </Container>
    </Box>
  );
};

export default BlogPage;

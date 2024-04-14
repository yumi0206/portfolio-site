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
import { fetchAllBlogs } from '../client';
import parse from 'html-react-parser';
import Link from 'next/link';

const Blogs = async () => {
  const blogs = await fetchAllBlogs();
  console.log(blogs);
  return (
    // コンテナ全体を画面の中央に配置
    <Container sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {blogs?.map((blog) => (
          <Grid item key={blog.id} xs={12} sm={6} md={4}>
            <Link href={`/blogs/${blog.id}`} passHref>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={blog.thumbnail.url}
                  alt="Blog Thumbnail"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    noWrap // This prop cuts the text off with an ellipsis
                    sx={{
                      whiteSpace: 'nowrap', // Ensures the text is on one line
                      overflow: 'hidden', // Hides text that overflows the container
                      textOverflow: 'ellipsis', // Adds an ellipsis to text that overflows
                    }}
                  >
                    {blog.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blogs;

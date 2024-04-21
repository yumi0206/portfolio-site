import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import { fetchAllBlogs } from '../client';
import Link from 'next/link';

const Blogs = async () => {
  const blogs = await fetchAllBlogs();
  console.log(blogs);
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        {blogs?.map((blog) => (
          <Grid item key={blog.id} xs={12} sm={6}>
            <Link href={`/blogs/${blog.id}`} passHref>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '10px',
                  margin: '8px',
                  backgroundColor: '#F0EFEF',
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={blog.thumbnail.url}
                  alt="Blog Thumbnail"
                />
                <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <Typography sx={{ marginRight: '10px' }}>
                      {new Date(blog.updatedAt).toISOString().slice(0, 10).replace(/-/g, '.')}
                    </Typography>
                    <Typography>/</Typography>
                    <Typography sx={{ marginLeft: '10px' }}>
                      {blog.category?.name}
                    </Typography>
                  </Box>

                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    noWrap
                    sx={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      fontSize: '18px',
                      marginBottom: '10px',
                    }}
                  >
                    {blog.title}
                  </Typography>

                  <Typography
                    gutterBottom
                    variant="body2"
                    sx={{ fontSize: '14px', lineHeight: '20px', marginTop: '10px' }}
                    dangerouslySetInnerHTML={{
                      __html:
                        blog.content.length > 120
                          ? `${blog.content.substring(0, 120).replace(/<\/?[^>]+(>|$)/g, '')}...`
                          : blog.content.replace(/<\/?[^>]+(>|$)/g, ''),
                    }}
                  />
                  <Typography sx={{ marginTop: '10px', color: 'primary.main' }}>
                    <Link href={`/blogs/${blog.id}`}>続きを読む</Link>
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

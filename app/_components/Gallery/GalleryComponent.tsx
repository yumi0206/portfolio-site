import React, { useMemo } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import CategorySelector from './CategorySelector';
import { Category, GalleryType } from '@/app/_libs/microcms';
import { Grid, Modal, Box, Button, Typography } from '@mui/material';

type GalleryComponentProps = {
  galleries: GalleryType[];
  categories: Category[];
};

const GalleryComponent: React.FC<GalleryComponentProps> = ({ galleries, categories }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const filteredGalleries = useMemo(() => {
    return selectedCategory === 'all'
      ? galleries
      : galleries.filter((gallery) => gallery.category.name === selectedCategory);
  }, [selectedCategory, galleries]);

  return (
    <>
      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', p: 2 }}>
        <Grid container spacing={2} justifyContent="center">
          {filteredGalleries.map((gallery) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={gallery.id}>
              <Box
                sx={{
                  height: '100%',
                  width: '100%',
                  cursor: 'pointer',
                  position: 'relative',
                  '&:hover > div': {
                    opacity: 1,
                  },
                }}
                onClick={() => handleImageClick(gallery.image.url)}
              >
                <Box
                  component={'img'}
                  src={gallery.image.url}
                  alt={gallery.caption}
                  sx={{
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain', // ここでobjectFitをcoverに設定
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    opacity: 0,
                    transition: 'opacity .3s ease-in-out',
                  }}
                >
                  <Typography variant="subtitle1" color="common.white">
                    {gallery.caption}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Modal
          open={showModal}
          onClose={handleCloseModal}
          aria-labelledby="image-modal-title"
          aria-describedby="image-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'auto',
              maxWidth: '90%',
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 2,
              outline: 'none',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Selected"
              width={800}
              height={450}
              layout="responsive"
            />
            <Button variant="contained" onClick={handleCloseModal} sx={{ mt: 2 }}>
              Close
            </Button>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default GalleryComponent;

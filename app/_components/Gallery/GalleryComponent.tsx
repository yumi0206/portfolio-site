import React, { useMemo, useState } from 'react';
import CategorySelector from './CategorySelector';
import { Category, GalleryType } from '@/app/_libs/microcms';
import { Grid, Box, Typography, TextField, InputAdornment, IconButton } from '@mui/material';
import GalleryModal from './GalleryModal';
import SearchIcon from '@mui/icons-material/Search'; // Importing the SearchIcon

type GalleryComponentProps = {
  galleries: GalleryType[];
  categories: Category[];
};

const GalleryComponent: React.FC<GalleryComponentProps> = ({ galleries, categories }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSearchIconClick = () => {
    setSearchText(searchInput);
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setSearchText(searchInput);
    }
  };

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
    setShowModal(true);
  };

  const filteredGalleries = useMemo(() => {
    const categoryFiltered =
      selectedCategory === 'all'
        ? galleries
        : galleries.filter((gallery) => gallery.category.name === selectedCategory);
    return categoryFiltered.filter((gallery) =>
      gallery.caption.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [selectedCategory, galleries, searchText]);

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <TextField
          placeholder="Search by Caption"
          variant="outlined"
          value={searchInput}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          
          InputLabelProps={{
            shrink: searchInput.length > 0,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton onClick={handleSearchIconClick} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

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
                    objectFit: 'contain',
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

        <GalleryModal
          showModal={showModal}
          handleCloseModal={() => setShowModal(false)}
          selectedImage={selectedImage}
        />
      </Box>
    </>
  );
};

export default GalleryComponent;

import React from 'react';
import Image from 'next/image';

import { Modal, Box, Button } from '@mui/material';

type GalleryModalProps = {
  showModal: boolean;
  handleCloseModal: () => void;
  selectedImage: string;
};

const GalleryModal: React.FC<GalleryModalProps> = ({
  showModal,
  handleCloseModal,
  selectedImage,
}) => {
  return (
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
        <Image src={selectedImage} alt="Selected" width={800} height={450} layout="responsive" />
        <Button variant="contained" onClick={handleCloseModal} sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};
export default GalleryModal;

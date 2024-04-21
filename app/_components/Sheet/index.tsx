import React from 'react';
import Box from '@mui/material/Box';

type Props = {
  children: React.ReactNode;
};

export default function Sheet({ children }: Props) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        margin: ' auto 0',
        padding: { xs: '10px', sm: '30px', md: '80px' },
        borderRadius: '8px',
      }}
    >
      {children}
    </Box>
  );
}

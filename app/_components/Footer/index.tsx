import Link from 'next/link';
import Box from '@mui/material/Box';

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        zIndex: 100,
        padding: '16px 24px',
        textAlign: 'center',
        color: 'var(--color-text-sub)',
        fontSize: '0.8rem',
        marginTop: '80px',
        position: 'fixed',
        bottom: 0,
        width: '100%',

        '@media (max-width: 640px)': {
          '.items': {
            flexWrap: 'wrap',
            gap: '8px 0',
          },
          '.item': {
            width: '50%',
          },
        },
      }}
    >
      <p>© SIMPLE. All Rights Reserved 2023</p>
    </Box>
  );
}

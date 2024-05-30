import { Box } from '@mui/material';
import Image from 'next/image';
import { getRandomGallery } from './client';
import Link from 'next/link';

export default async function HomePage() {
  const todaysImage = await getRandomGallery();

  const headerHeight = 100;
  const footerHeight = 100;

  const height = `calc(100vh-${headerHeight} - ${footerHeight})`;

  return (
    <Box
      sx={{
        height: height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        position: 'absolute',
        top: `${headerHeight}px`,
        left: 0,
        right: 0,
        bottom: `${footerHeight}px`,
      }}
    >
      <Link href="/gallery">
        <Image
          src={todaysImage?.image.url || '/avater.jpg'}
          alt={todaysImage?.caption || 'caption'}
      
        />
      </Link>
    </Box>
  );
}

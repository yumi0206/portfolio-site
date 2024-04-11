import { Box } from '@mui/material';
import Image from 'next/image';
import { getRandomGallery } from './client';
import Link from 'next/link';

export default async function HomePage() {
  const todaysImage = await getRandomGallery();

  return (
    <Box sx={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box>
        <Link href="/gallery">
          <Image
            src={todaysImage?.image.url || '/avater.jpg'}
            alt={todaysImage?.caption || 'caption'}
            width={500}
            height={500}
            layout="responsive"
          />
        </Link>
      </Box>
    </Box>
  );
}

import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';
import { Box } from '@mui/material';

export const metadata = {
  title: 'Blog Detail',
};

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <Box sx={{ bgcolor: 'white', maxWidth: '800px', mx: 'auto' }}>
      <Sheet>{children}</Sheet>
    </Box>
  );
}

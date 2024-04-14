import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: 'Blog',
};

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="blog" sub="me" />
      <Sheet>{children}</Sheet>
    </>
  );
}

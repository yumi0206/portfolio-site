import Hero from '@/app/_components/Hero';
import Sheet from '@/app/_components/Sheet';

export const metadata = {
  title: 'AboutMe',
};

type Props = {
  children: React.ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="about" sub="me" />
      <Sheet>{children}</Sheet>
    </>
  );
}

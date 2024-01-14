
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      <div className='flex-grow flex-1'>{children}</div>
      <Footer />
    </main>
  );
}

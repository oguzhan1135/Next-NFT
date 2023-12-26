'use client'
import { Urbanist } from 'next/font/google';
import '@/app/globals.css'
import Navbar from '@/Components/Header/Navbar/page';
import Footer from '@/Components/Footer/page';
import { NftProvider } from '@/Context/NftCardContext';
import Loading from '@/Components/Loading/loading';
import { usePathname } from 'next/navigation';

const urbanist = Urbanist({ subsets: ['latin', 'latin-ext'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  const router = usePathname();

  return (
    <html style={{ color: 'white' }} className={urbanist.className} lang="en">
      <body>
        <NftProvider>
          <main>
            <Navbar currentPagePath={router} />
           
             { children}
          
          </main>
          <footer>
            <Footer />
          </footer>
        </NftProvider>
      </body>
    </html>
  );
}

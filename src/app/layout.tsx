'use client'
import { useEffect, useState } from 'react';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import Navbar from '@/Components/Header/Navbar/page';
import Footer from '@/Components/Footer/page';
import { NftProvider } from '@/Context/NftCardContext';
import Loading from '@/Components/Loading/loading';
const urbanist = Urbanist({ subsets: ['latin', 'latin-ext'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <html style={{ color: 'white' }} className={urbanist.className} lang="en">
      <body>
        <NftProvider>
          <main>
            <div className="navbar-header homepage">
              <div className='navbar-container'>
                <div className='main-container'>
                  <Navbar />
                </div>
              </div>
            </div>

            <div className='main-container'>
              <>
                {loading ? (
                  <Loading />
                ) : (
                  children
                )}</>
            </div>
          </main>
          <footer>
            <Footer />
          </footer>
        </NftProvider>
      </body>
    </html>
  );
}

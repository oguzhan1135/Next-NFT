
import { Urbanist } from 'next/font/google';
import '@/app/globals.css'
import { NftProvider } from '@/Context/NftCardContext';
import Router from '@/Router/page';
import { Providers } from './provider';
const urbanist = Urbanist({ subsets: ['latin', 'latin-ext'] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html id='layout' className={urbanist.className} lang="en">
      <body>
        <NftProvider>
          <Providers>
            <main>
              <Router>
                {children}
              </Router>
            </main>
          </Providers>
        </NftProvider>
      </body>
    </html>
  );
}

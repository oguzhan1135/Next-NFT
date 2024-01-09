
import { Urbanist } from 'next/font/google';
import '@/app/globals.css'
import { NftProvider } from '@/Context/NftCardContext';
import Router from '@/Router/page';
const urbanist = Urbanist({ subsets: ['latin', 'latin-ext'] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html style={{ color: 'white' }} className={urbanist.className} lang="en">
      <body>
        <NftProvider>
          <main>
            <Router>
              {children}
            </Router>
          </main>
        </NftProvider>
      </body>
    </html>
  );
}

import { NftProvider } from '@/Context/NftCardContext'
import { Urbanist } from 'next/font/google';
import Navbar from '@/Components/Header/Navbar/page';
import Footer from '@/Components/Footer/page';
const urbanist = Urbanist({ subsets: ['latin', 'latin-ext'] });

export default function ExploreLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <html style={{ color: 'white' }} className={urbanist.className} lang="en">
            <body>
                <NftProvider>
                    <main>
                        <div className="navbar-header explore">
                            <div className='navbar-container'>
                                <div className='main-container'>
                                    <Navbar />
                                </div>
                            </div>
                            <div className='page-title-area'>
                            <h1 className='page-title'>Explore</h1>
                            <div className='flex flex-row items-center gap-3'>
                                <h5 className='text-white__second'>Home /</h5>
                                <h5 className='text-white__second'>Explore</h5>
                                <h5>Explore-1</h5>
                            </div>
                        </div>
                        </div>

                        <div className='main-container'>
                            {children}
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

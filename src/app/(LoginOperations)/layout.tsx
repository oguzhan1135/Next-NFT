import PageTitle from '@/Components/PageTitle/page';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
export default function LoginOperationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <div className="flex flex-col max-w-2xl gap-10 w-full pt-10 overflow-hidden text-on__surface__dark dark:text-on__surface">
                <h1 className='ml-auto mr-auto text-4xl font-bold text-on__surface__dark dark:text-on__surface'> <PageTitle /> to Nfts</h1>
                <div className="flex flex-row items-center gap-3 w-full justify-center ">
                    <span className='border border-white__second w-60'></span>
                    <PageTitle /> with social
                    <span className='border border-white__second w-60'></span>
                </div>
                <div className="flex flex-row gap-3 items-center">
                    <div className="button w-full">
                        <FaGoogle />
                        <span>Google</span>
                    </div>
                    <div className="button w-full">
                        <FaFacebook />
                        <span>Facebook</span>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-3 w-full justify-center">
                    <span className='border border-white__second w-60'></span>
                    Or <PageTitle /> with email
                    <span className='border border-white__second w-60'></span>
                </div>
                <div className="flex flex-col gap-6 pb-20">
                    {children}
                </div>
            </div>
        </>
    );
}

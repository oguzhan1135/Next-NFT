"use client"
import { usePathname } from "next/navigation";
import Navbar from '@/Components/Header/Navbar/page';
import Footer from '@/Components/Footer/page';
import { useEffect, useState } from "react";
const Router = ({ children,
}: {
    children: React.ReactNode;
}) => {
    const pathname = usePathname();
    const [pageTitle, setPageTitle] = useState<string>('');
    const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);

    useEffect(() => {
        const pathArray = pathname.split('/').filter(Boolean);
        const customPageTitles: { [key: string]: string } = {
            'ItemDetails': 'Item Details',
            'Login': 'Login',
            'SignUp': 'Signup',
            'EditProfile': 'Edit Profile',
            'CreateItem': 'Create Item',
            'Auhor': 'Auhor',
            'Explore': 'Explore 1',
            'Profile': 'Profile'
        };

        const customBreadcrumbs: { [key: string]: string[] } = {
            'ItemDetails': ['Home', 'Item Details'],
            'Login': ['Pages', 'Login'],
            'SignUp': ['Pages', 'Signup'],
            'EditProfile': ['Pages', 'Edit Profile'],
            'CreateItem': ['Pages', 'Create Item'],
            'Author': ['Pages', 'Author'],
            'Profile': ['Home', 'Profile'],
            'Explore': ['Home', 'Explore', 'Explore 1']

        };
        const currentPageTitle = customPageTitles[pathArray[0]] || pathArray[0];
        const currentBreadcrumbs = customBreadcrumbs[pathArray[0]] || [pathArray[0]];
        setPageTitle(currentPageTitle);
        setBreadcrumbs(currentBreadcrumbs);
    }, [pathname]);
    return (
        <>
            <Navbar router={pathname} routerElement={<div className='page-title-area'>
                <h1 className='page-title'>{pageTitle}</h1>
                <div className='flex flex-row items-center gap-3'>
                    {breadcrumbs.map((breadcrumb, index) => (
                        <h5 key={index} className='text-white__second'>{breadcrumb} {index < breadcrumbs.length - 1 && '/'}</h5>
                    ))}
                </div>
            </div>} />
            {children}

            <Footer router={pathname} />


        </>
    )
}
export default Router;
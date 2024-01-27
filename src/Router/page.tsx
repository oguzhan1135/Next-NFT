"use client"
import { usePathname } from "next/navigation";
import Navbar from '@/Components/Header/Navbar/page';
import Footer from '@/Components/Footer/page';
const Router = ({ children,
}: {
    children: React.ReactNode;
}) => {
    const pathname = usePathname();
    const pathArray = pathname.split('/').filter(Boolean);

    const customPageTitles = {
        'ItemDetails': 'Item Details',
        'Login': 'Login',
        'SignUp': 'Signup',
        'EditProfile': 'Edit Profile',
        'CreateItem': 'Create Item',
        'Auhor': 'Auhor',
        'Explore': 'Explore 1',
        'Profile': 'Profile'
    };

    const customBreadcrumbs = {
        'ItemDetails': ['Home', 'Item Details'],
        'Login': ['Pages', 'Login'],
        'SignUp': ['Pages', 'Signup'],
        'EditProfile': ['Pages', 'Edit Profile'],
        'CreateItem': ['Pages', 'Create Item'],
        'Author': ['Pages', 'Author'],
        'Profile': ['Home', 'Profile'],
        'Explore': ['Home', 'Explore', 'Explore 1']

    };
   
    return (
        <>
            <Navbar router={pathname} />
            {children}
            <Footer router={pathname} />
        </>
    )
}
export default Router;
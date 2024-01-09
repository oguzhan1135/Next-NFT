"use client"
import { usePathname } from "next/navigation";
import Navbar from '@/Components/Header/Navbar/page';
import Footer from '@/Components/Footer/page';
const Router = ({ children,
}: {
    children: React.ReactNode;
}) => {
    const pathname = usePathname();

    return (
        <>
            <Navbar router={pathname} />
            {children}
            <Footer router={pathname} />
        </>
    )
}
export default Router;
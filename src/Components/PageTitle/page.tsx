"use client"
import { usePathname } from "next/navigation"
const PageTitle = () => {
    const pathName = usePathname();
    let pageTitle = pathName.substring(1);
    return (
        <>
        { pageTitle }
        </>
    )
}
export default PageTitle
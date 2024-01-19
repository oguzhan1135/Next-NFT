'use client'
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

interface MenuItem {
    label: string;
    subMenu: { label: string; url: string }[];
}

const MobileNavbarMenu = () => {
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const menuItems: MenuItem[] = [
        {
            label: "Home",
            subMenu: [
                { label: "Homepage", url: "/" },
                { label: "Homepage 2", url: "/HomepageV2" },
                { label: "Homepage Special", url: "/GomepageSpaciel" },
                { label: "Marketplace", url: "/Marketplace" },
            ],
        },
        {
            label: "Explore",
            subMenu: [
                { label: "Explore 1", url: "/Explore" },

            ],
        },
        {
            label: "Activity",
            subMenu: [
                { label: "Activity-1", url: "/" },
                { label: "Activity-2", url: "/" },
            ],
        },
        {
            label: "Community",
            subMenu: [
                { label: "Community-1", url: "/" },
                { label: "Community-2", url: "/" },
            ],
        },
        {
            label: "Pages",
            subMenu: [
                { label: "Login", url: "/Login" },
                { label: "Sign Up", url: "/SignUp" },
                { label: "Edit Profile", url: "/EditProfile" },
                { label: "Create Item", url: "/CreateItem" },
                { label: "Profile", url: "/Profile" },


            ],
        },
        {
            label: "Contact",
            subMenu: [
                { label: "Contact-1", url: "/" },
                { label: "Contact-2", url: "/" },
            ],
        },
    ];

    const toggleMenu = (index: number) => {
        if (openMenuIndex === index) {
            setOpenMenuIndex(null);
        } else {
            setOpenMenuIndex(index);
        }
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setOpenMenuIndex(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <>
            <span onClick={() => toggleMenu(menuItems.length)} className='lg:hidden'><IoIosMenu /></span>
            {openMenuIndex !== null && (
                <div className="absolute top-full bg-footer__bg w-full flex lg:hidden flex-col" ref={menuRef}>
                    {menuItems.map((menuItem, index) => (
                        <div className="flex flex-col p-3 border-b border-b-gray" key={index}>
                            <div className="flex flex-row justify-between w-full items-center" onClick={() => toggleMenu(index)}>
                                <span> {menuItem.label}</span>
                                <FaChevronDown />
                            </div>
                            {openMenuIndex === index && (
                                <div className="flex flex-col">
                                    {menuItem.subMenu.map((subMenuItem, subIndex) => (
                                        <Link key={subIndex} href={subMenuItem.url} className="px-3 py-2 hover:bg-black__write transition-all ease-in-out duration-200">
                                            {subMenuItem.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default MobileNavbarMenu;

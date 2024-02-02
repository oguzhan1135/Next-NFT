'use client'
import { useEffect, useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    return (
        <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
            <span className="navbar-switch" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {
                    mounted ? <>
                        {theme === "dark" ? <IoMdSunny /> : <IoMdMoon />}
                    </>
                        : <></>
                }

            </span>
        </div>
    );
};

export default ThemeToggle;
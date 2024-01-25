'use client'
import { FaMoon, FaSun } from "react-icons/fa"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
const ThemeToggle = () => {

    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme();
    useEffect(() => setMounted(true), [])

    if (resolvedTheme === "dark") {
        return (
            <div className="dark-theme">
                <span className="navbar-switch" onClick={() => setTheme("light")}><FaSun /></span>
            </div>
        );
    } else if (resolvedTheme === "light") {
        return (
            <div className="light-theme">
                <span className="navbar-switch" onClick={() => setTheme("dark")}><FaMoon /></span>
            </div>
        );
    } else {
        return (
            <div className="default-theme">
                <span className="navbar-switch" onClick={() => setTheme("dark")}><FaMoon /></span>
            </div>
        );
    }


}
export default ThemeToggle
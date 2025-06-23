"use client";

import {
    Cross1Icon,
    HamburgerMenuIcon,
    MoonIcon,
    SunIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Humanoid Robots", href: "/products" },
    { name: "AI Consciousness", href: "/artificialintelligence" },
    { name: "Martian OS", href: "/martianos" },
    { name: "Robot Spatial Intelligence", href: "/geospatial" },
    { name: "Divisions", href: "/brands" },
    { name: "Press", href: "/press" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [mobileMenuOpen]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <>
            <header className={`fixed inset-x-0 top-0 z-50 transition-all-smooth ${
                scrolled 
                    ? 'glass-dark backdrop-blur-xl border-b border-white/10' 
                    : 'backdrop-blur-sm border-b border-transparent'
            }`}>
                <nav
                    className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <Link
                            href="/"
                            className="-m-1.5 p-1.5 flex items-center gap-3 group transition-all-smooth"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <div className="relative">
                                <Image
                                    className="h-10 w-auto"
                                    src="/assets/img/1mw-logo.svg"
                                    alt="1MW"
                                    width={40}
                                    height={40}
                                    priority
                                />
                            </div>
                            <span className="text-xl font-bold gradient-text-primary font-display">
                                1 Martian Way
                            </span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="glass rounded-xl p-3 text-white/90 hover:text-white transition-all-smooth hover:scale-105 glow-hover"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Toggle menu</span>
                            {mobileMenuOpen ? (
                                <Cross1Icon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            ) : (
                                <HamburgerMenuIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            )}
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden lg:flex lg:gap-x-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all-smooth hover:scale-105 ${
                                    pathname === item.href
                                        ? "glass text-white shadow-lg glow"
                                        : "text-white/80 hover:text-white hover:glass"
                                }`}
                            >
                                {item.name}
                                {pathname === item.href && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl blur-sm"></div>
                                )}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
                        <button
                            onClick={toggleTheme}
                            className="glass rounded-xl p-3 text-white/90 hover:text-white transition-all-smooth hover:scale-105 glow-hover"
                            aria-label="Toggle theme"
                        >
                            {mounted && theme === "dark" ? (
                                <SunIcon className="h-5 w-5" />
                            ) : (
                                <MoonIcon className="h-5 w-5" />
                            )}
                        </button>
                        <Link
                            href="/contact"
                            className="relative px-6 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all-smooth hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-all-smooth blur-xl"></div>
                            <span className="relative z-10">Contact Us</span>
                        </Link>
                    </div>
                </nav>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <>
                        <div
                            className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <div className="lg:hidden fixed inset-y-0 right-0 z-50 w-full overflow-y-auto glass-dark px-6 py-6 sm:max-w-sm border-l border-white/10">
                            <div className="flex items-center justify-between">
                                <Link
                                    href="/"
                                    className="-m-1.5 p-1.5 flex items-center gap-3 group"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <Image
                                        className="h-8 w-auto"
                                        src="/assets/img/1mw-logo.svg"
                                        alt="1MW"
                                        width={32}
                                        height={32}
                                    />
                                    <span className="text-lg font-bold gradient-text-primary font-display">
                                        1 Martian Way
                                    </span>
                                </Link>
                                <button
                                    type="button"
                                    className="glass rounded-xl p-3 text-white/90 hover:text-white transition-all-smooth"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <Cross1Icon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                            <div className="mt-8 flow-root">
                                <div className="space-y-3">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all-smooth ${
                                                pathname === item.href
                                                    ? "glass text-white shadow-lg"
                                                    : "text-white/80 hover:text-white hover:glass"
                                            }`}
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-white/70 font-medium">
                                            Theme
                                        </span>
                                        <button
                                            onClick={toggleTheme}
                                            className="glass rounded-xl p-3 text-white/90 hover:text-white transition-all-smooth"
                                            aria-label="Toggle theme"
                                        >
                                            {mounted && theme === "dark" ? (
                                                <SunIcon className="h-5 w-5" />
                                            ) : (
                                                <MoonIcon className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="block w-full px-6 py-3 text-center text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all-smooth shadow-lg"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </header>
        </>
    );
}

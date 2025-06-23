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
    { 
        name: "Martian OS", 
        href: "/martianos",
        submenu: [
            { name: "AI Consciousness", href: "/artificialintelligence" },
            { name: "Robot Spatial Intelligence", href: "/geospatial" },
        ]
    },
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
            }`} style={{ height: '64px' }}>
                <nav
                    className="flex items-center justify-between px-4 py-3 lg:px-8 max-w-7xl mx-auto"
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
                <div className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
                    mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    
                    {/* Slide-in menu panel */}
                    <div className={`fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] overflow-y-auto glass-dark border-r border-white/10 transform transition-transform duration-300 ease-in-out ${
                        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}>
                        <div className="px-6 py-6">
                            {/* Header with logo and close button */}
                            <div className="flex items-center justify-between mb-8">
                                <Link
                                    href="/"
                                    className="flex items-center gap-3 group"
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
                                    className="glass rounded-xl p-3 text-white/90 hover:text-white transition-all-smooth hover:scale-105"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <Cross1Icon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>

                            {/* Navigation links */}
                            <div className="space-y-2">
                                {navigation.map((item, index) => (
                                    <div key={item.name} 
                                         className={`transform transition-all duration-300 ease-out ${
                                             mobileMenuOpen 
                                                 ? 'translate-x-0 opacity-100' 
                                                 : 'translate-x-4 opacity-0'
                                         }`}
                                         style={{ transitionDelay: `${index * 50}ms` }}>
                                        <Link
                                            href={item.href}
                                            className={`flex items-center px-4 py-3 text-base font-semibold rounded-xl transition-all-smooth hover:scale-[1.02] ${
                                                pathname === item.href
                                                    ? "glass text-white shadow-lg glow"
                                                    : "text-white/80 hover:text-white hover:glass"
                                            }`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span>{item.name}</span>
                                            {pathname === item.href && (
                                                <div className="ml-auto w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                                            )}
                                        </Link>
                                    </div>
                                ))}
                            </div>

                            {/* Footer section with theme toggle and contact */}
                            <div className={`mt-8 pt-6 border-t border-white/10 space-y-4 transform transition-all duration-300 ease-out ${
                                mobileMenuOpen 
                                    ? 'translate-x-0 opacity-100' 
                                    : 'translate-x-4 opacity-0'
                            }`} style={{ transitionDelay: `${navigation.length * 50}ms` }}>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-white/70 font-medium">
                                        Theme
                                    </span>
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
                                </div>
                                <Link
                                    href="/contact"
                                    className="block w-full px-6 py-3 text-center text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all-smooth hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden group"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-all-smooth blur-xl"></div>
                                    <span className="relative z-10">Contact Us</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

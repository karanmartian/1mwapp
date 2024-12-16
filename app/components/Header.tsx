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
    { name: "Products", href: "/products" },
    { name: "Brands", href: "/brands" },
    { name: "Licensing", href: "/licensing" },
    { name: "Press", href: "/press" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
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
            <header className="fixed inset-x-0 top-0 z-40 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
                <nav
                    className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <Link
                            href="/"
                            className="-m-1.5 p-1.5 flex items-center gap-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Image
                                className="h-8 w-auto"
                                src="/assets/img/1mw-logo.png"
                                alt="1MW"
                                width={32}
                                height={32}
                                priority
                            />
                            <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                1 Martian Way
                            </span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
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
                    <div className="hidden lg:flex lg:gap-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-semibold leading-6 transition-colors ${
                                    pathname === item.href
                                        ? "text-blue-600 dark:text-blue-400"
                                        : "text-gray-900 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {mounted && theme === "dark" ? (
                                <SunIcon className="h-5 w-5 text-gray-200" />
                            ) : (
                                <MoonIcon className="h-5 w-5 text-gray-700" />
                            )}
                        </button>
                        <Link
                            href="/contact"
                            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </nav>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div
                        className="lg:hidden fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <div
                            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between">
                                <Link
                                    href="/"
                                    className="-m-1.5 p-1.5 flex items-center gap-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <Image
                                        className="h-8 w-auto"
                                        src="/assets/img/1mw-logo.png"
                                        alt="1MW"
                                        width={32}
                                        height={32}
                                    />
                                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                        1 Martian Way
                                    </span>
                                </Link>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <Cross1Icon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                                                    pathname === item.href
                                                        ? "text-blue-600 dark:text-blue-400"
                                                        : "text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800"
                                                }`}
                                                onClick={() =>
                                                    setMobileMenuOpen(false)
                                                }
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="py-6 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-700 dark:text-gray-300">
                                                Dark Mode
                                            </span>
                                            <button
                                                onClick={toggleTheme}
                                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                                aria-label="Toggle theme"
                                            >
                                                {mounted && theme === "dark" ? (
                                                    <SunIcon className="h-5 w-5 text-gray-200" />
                                                ) : (
                                                    <MoonIcon className="h-5 w-5 text-gray-700" />
                                                )}
                                            </button>
                                        </div>
                                        <Link
                                            href="/contact"
                                            className="block rounded-full bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}

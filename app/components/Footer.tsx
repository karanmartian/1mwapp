"use client";

import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100/50 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            About Us
                        </h3>
                        <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
                            1 Martian Way Industries Pvt. Ltd is a technology
                            company specializing in artificial intelligence,
                            geospatial technology, and innovative solutions for
                            a better future.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Products
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link
                                    href="/artificialintelligence"
                                    className="text-base text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                                >
                                    AI Solutions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/geospatial"
                                    className="text-base text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                                >
                                    Geospatial
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products"
                                    className="text-base text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                                >
                                    All Products
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Company
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link
                                    href="/brands"
                                    className="text-base text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                                >
                                    Brands
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/licensing"
                                    className="text-base text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                                >
                                    Licensing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/press"
                                    className="text-base text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                                >
                                    Press
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-base text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
                    <p className="text-base text-gray-500 dark:text-gray-400">
                        © {currentYear} 1 Martian Way Industries Pvt. Ltd. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

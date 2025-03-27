import { ArrowRightIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Products | 1 Martian Way",
    description:
        "Explore our range of industrial drones, robots, and AI solutions.",
};

const products = [
    {
        name: "1MW Industrux Series",
        description:
            "Advanced industrial drones for various applications including surveillance, mapping, inspection, and delivery.",
        category: "Drones",
        href: "/contact",
        image: "/assets/img/products/industrial-drone.jpg",
    },
    {
        name: "1MW xFleetY",
        description:
            "Extensible & Scalable Drone Fleet Management SaaS for tracking millions of heterogeneous drones with real-time capabilities.",
        category: "Software",
        href: "/contact",
        image: "/assets/img/products/fleet-management.jpg",
    },
    {
        name: "1MW AirDiff",
        description:
            "Advanced change detection software for infrastructure assets. Monitor and analyze changes using cutting-edge aerial imagery.",
        category: "Software",
        href: "/geospatial",
        image: "/assets/img/products/change-detection.jpg",
    },
    {
        name: "1MW BackDuck",
        description:
            "AI-driven platform powering drone racing communities and healthcare solutions with advanced analytics.",
        category: "AI Platform",
        href: "/artificialintelligence",
        image: "/assets/img/products/ai-platform.jpg",
    },
];

export default function Products() {
    return (
        <div className="bg-white dark:bg-gray-950 pt-[56px] lg:pt-[64px]">
            <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Our Products
                    </h1>
                    <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        Discover our innovative solutions that are transforming
                        industries through advanced technology.
                    </p>
                </div>

                <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {products.map((product) => (
                        <article
                            key={product.name}
                            className="flex flex-col items-start rounded-2xl bg-gray-100/50 dark:bg-gray-900 overflow-hidden"
                        >
                            <div className="relative w-full h-48">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <span className="rounded-full bg-blue-600/10 px-3 py-1.5 font-medium text-blue-600 dark:text-blue-400">
                                        {product.category}
                                    </span>
                                </div>
                                <h3 className="mt-4 text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                                    {product.name}
                                </h3>
                                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                                    {product.description}
                                </p>
                                <div className="mt-6">
                                    <Link
                                        href={product.href}
                                        className="inline-flex items-center text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400"
                                    >
                                        Learn more{" "}
                                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mx-auto mt-16 max-w-7xl">
                    <div className="relative isolate overflow-hidden bg-blue-600 px-6 py-12 shadow-2xl rounded-3xl sm:px-12 lg:px-16">
                        <div className="absolute inset-0 -z-10">
                            <Image
                                src="/assets/img/products/cta-background.jpg"
                                alt="Industrial background"
                                fill
                                className="object-cover opacity-20"
                            />
                        </div>
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                Ready to Transform Your Operations?
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-200">
                                Get in touch to discuss how our solutions can
                                help automate and optimize your business.
                            </p>
                            <div className="mt-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-xs hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                >
                                    Contact Us
                                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

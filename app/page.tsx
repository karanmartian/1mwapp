import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative isolate bg-white dark:bg-gray-950 pt-[56px] lg:pt-[64px]">
                <div className="relative isolate overflow-hidden h-[400px] lg:h-[500px]">
                    <div className="absolute inset-0 -z-10">
                        <Image
                            src="/assets/img/hero/robots-mars.jpg"
                            alt="Advanced robotics and AI technology"
                            fill
                            sizes="100vw"
                            quality={90}
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-linear-to-r from-gray-900/70 to-gray-900/30 dark:from-gray-950/70 dark:to-gray-950/30" />
                    </div>

                    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 relative">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h1 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                                India's Leading Manufacturer of{" "}
                                <span className="text-blue-400">
                                    Industrial Drones, Robots & AI
                                </span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                1 Martian Way Industries Pvt. Ltd (1MW) creates
                                advanced sentient drones, robots, and scalable
                                platforms powered by AI. Based in Mumbai, we're
                                revolutionizing industrial automation and
                                intelligence. We are known internationally for
                                the creation of{" "}
                                <a
                                    href="https://droneracingindia.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    IDRL - Indian Drone Racing League
                                </a>
                            </p>
                            <div className="mt-8 flex items-center gap-x-6">
                                <Link
                                    href="/products"
                                    className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                                >
                                    Explore Products
                                </Link>
                                <Link
                                    href="/contact"
                                    className="group text-sm font-semibold leading-6 text-white"
                                >
                                    Contact Us{" "}
                                    <span
                                        aria-hidden="true"
                                        className="inline-block transition-transform group-hover:translate-x-1"
                                    >
                                        →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className="bg-gray-100/50 dark:bg-gray-900 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="font-display text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
                            Advanced Technology
                        </h2>
                        <p className="font-display mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Everything you need for industrial automation
                        </p>
                        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Our comprehensive suite of products and solutions
                            covers everything from drone manufacturing to
                            AI-powered robots and Cloud Intelligence.
                        </p>
                    </div>
                    <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-16 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col">
                                <dt className="text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                                    Drone Solutions
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                                    <p className="flex-auto">
                                        Industrial drones and fleet management
                                        systems designed for maximum efficiency
                                        and reliability.
                                    </p>
                                    <p className="mt-6">
                                        <Link
                                            href="/products"
                                            className="text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400"
                                        >
                                            Learn more{" "}
                                            <span aria-hidden="true">→</span>
                                        </Link>
                                    </p>
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                                    AI Solutions
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                                    <p className="flex-auto">
                                        Edge and cloud-based artificial
                                        intelligence for real-time processing
                                        and decision making.
                                    </p>
                                    <p className="mt-6">
                                        <Link
                                            href="/artificialintelligence"
                                            className="text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400"
                                        >
                                            Learn more{" "}
                                            <span aria-hidden="true">→</span>
                                        </Link>
                                    </p>
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="text-xl font-semibold leading-7 text-gray-900 dark:text-white">
                                    Geospatial Intelligence
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                                    <p className="flex-auto">
                                        Advanced geospatial analytics and
                                        mapping solutions for infrastructure
                                        monitoring.
                                    </p>
                                    <p className="mt-6">
                                        <Link
                                            href="/geospatial"
                                            className="text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400"
                                        >
                                            Learn more{" "}
                                            <span aria-hidden="true">→</span>
                                        </Link>
                                    </p>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            {/* Featured Products */}
            <div className="py-16 sm:py-20 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Featured Products
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Discover our cutting-edge products that are
                            transforming industries through advanced technology
                            and innovation.
                        </p>
                    </div>
                    <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <article className="flex flex-col items-start">
                            <div className="rounded-2xl bg-gray-50 dark:bg-gray-900 p-8 w-full">
                                <h3 className="mt-4 text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                                    1MW Geospatial Intel Suite
                                </h3>
                                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                                    Advanced change detection software for large
                                    infrastructure assets. Monitor and analyze
                                    changes using cutting-edge aerial imagery
                                    and AI-powered analytics.
                                </p>
                                <div className="mt-6">
                                    <Link
                                        href="/geospatial"
                                        className="text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400"
                                    >
                                        Learn more{" "}
                                        <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                        <article className="flex flex-col items-start">
                            <div className="rounded-2xl bg-gray-50 dark:bg-gray-900 p-8 w-full">
                                <h3 className="mt-4 text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                                    AI Web/Mobile Platforms
                                </h3>
                                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                                    Comprehensive platforms for processing large
                                    datasets, including computer vision, machine
                                    learning, and deep learning applications.
                                </p>
                                <div className="mt-6">
                                    <Link
                                        href="/artificialintelligence"
                                        className="text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400"
                                    >
                                        Learn more{" "}
                                        <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
}

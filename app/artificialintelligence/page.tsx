import {
    ArrowRightIcon,
    CodeIcon,
    Component1Icon,
    RocketIcon,
} from "@radix-ui/react-icons";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "AI Solutions | 1 Martian Way",
    description:
        "Advanced AI solutions for drones, robotics, and cloud platforms.",
};

const features = [
    {
        name: "Edge AI",
        description:
            "Real-time processing and decision making directly on drones and robots, enabling autonomous operations even in offline environments.",
        icon: Component1Icon,
    },
    {
        name: "Cloud Intelligence",
        description:
            "Scalable cloud-based AI solutions for processing large datasets, with advanced analytics and machine learning capabilities.",
        icon: CodeIcon,
    },
    {
        name: "Custom Solutions",
        description:
            "Tailored AI solutions designed specifically for your industry needs, from computer vision to predictive analytics.",
        icon: RocketIcon,
    },
];

export default function ArtificialIntelligence() {
    return (
        <div className="bg-white dark:bg-gray-900 pt-[56px] lg:pt-[64px]">
            <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
                {/* Hero Section */}
                <div className="relative isolate overflow-hidden rounded-3xl bg-gray-900 px-6 py-24 shadow-2xl sm:px-12 lg:px-16 mb-16">
                    <div className="absolute inset-0 -z-10">
                        <Image
                            src="/assets/img/ai/hero-background.jpg"
                            alt="AI and Robotics"
                            fill
                            className="object-cover opacity-30"
                            priority
                        />
                    </div>
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            AI Solutions
                        </h1>
                        <p className="mt-4 text-lg leading-8 text-gray-300">
                            Cutting-edge artificial intelligence solutions
                            powering the next generation of autonomous systems
                            and intelligent platforms.
                        </p>
                    </div>
                </div>

                {/* Features Section */}
                <div className="mx-auto mt-12 max-w-7xl">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-xs ring-1 ring-gray-900/5"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                    <feature.icon
                                        className="h-6 w-6 text-white"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                                    {feature.name}
                                </h3>
                                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Products Section */}
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {/* Backduck Platform */}
                    <div className="flex flex-col">
                        <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-8">
                            <div className="relative h-48 overflow-hidden rounded-lg mb-6">
                                <Image
                                    src="/assets/img/ai/backduck.jpg"
                                    alt="Backduck - AI Community Platform"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                1MW Backduck
                            </h2>
                            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                                1MW Backduck is the software that's powering
                                large drone racing communities such as{" "}
                                <a
                                    href="https://droneracingindia.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    IDRL
                                </a>
                                . Incorporating cutting-edge client/server side
                                frameworks and AI, it's helping build local and
                                international communities.
                            </p>
                            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                                The platform comes with core social networking
                                features such as Newsfeed, Follow/Following,
                                Real-time chat as well as powerful AI features
                                such as detecting the emotions/mood of users,
                                learning from behavior of large set of users,
                                recommendations engine etc as we continue to
                                build more features. It can easily be adapted to
                                build ecommerce marketplaces, building any sort
                                of community or incorporating data analysis and
                                visualization tools.
                            </p>
                        </div>
                    </div>

                    {/* Backduck Mobile */}
                    <div className="flex flex-col">
                        <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-8">
                            <div className="relative h-48 overflow-hidden rounded-lg mb-6">
                                <Image
                                    src="/assets/img/ai/cloud-intelligence.jpg"
                                    alt="Backduck Mobile - AI Platform"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                1MW Backduck Mobile
                            </h2>
                            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                                1MW Backduck Mobile is our AI platform for
                                mobile devices based on 1MW Backduck. Built on
                                industry leading tools, it is customizable for a
                                range of industries that require on-the-go
                                insight into their data.
                            </p>
                            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                                At 1 Martian Way, we believe in simplicity for
                                developers and users and hence have designed the
                                mobile platform such that you can target
                                different devices with one code base. With
                                Backduck Mobile you get a powerful suite of
                                features on the front-end as well as access to
                                APIs at the backend that perform all that AI
                                magic.
                            </p>
                            <div className="mt-6">
                                <Link
                                    href="/contact"
                                    className="text-sm font-semibold leading-6 text-blue-600 dark:text-blue-400"
                                >
                                    Contact Us <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mx-auto mt-16 max-w-7xl">
                    <div className="relative isolate overflow-hidden bg-blue-600 px-6 py-12 shadow-2xl rounded-3xl sm:px-12 lg:px-16">
                        <div className="absolute inset-0 -z-10">
                            <Image
                                src="/assets/img/ai/cta-background.jpg"
                                alt="AI and Machine Learning"
                                fill
                                className="object-cover opacity-20"
                            />
                        </div>
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                Transform Your Business with AI
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-200">
                                Discover how our AI solutions can help you build
                                better communities and gain deeper insights from
                                your data.
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

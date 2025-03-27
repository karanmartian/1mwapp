import {
    ArrowRightIcon,
    CameraIcon,
    DrawingPinIcon,
    GlobeIcon,
} from "@radix-ui/react-icons";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Geospatial Solutions | 1 Martian Way",
    description:
        "Advanced geospatial intelligence and mapping solutions for infrastructure monitoring.",
};

const features = [
    {
        name: "Infrastructure Monitoring",
        description:
            "Advanced change detection and monitoring systems for large-scale infrastructure assets using cutting-edge aerial imagery.",
        icon: CameraIcon,
    },
    {
        name: "Mapping Solutions",
        description:
            "High-precision mapping and surveying capabilities with real-time data processing and visualization.",
        icon: DrawingPinIcon,
    },
    {
        name: "Analytics Platform",
        description:
            "Comprehensive geospatial analytics platform with AI-powered insights and automated reporting.",
        icon: GlobeIcon,
    },
];

export default function Geospatial() {
    return (
        <div className="bg-white dark:bg-gray-900 pt-[56px] lg:pt-[64px]">
            <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
                {/* Hero Section */}
                <div className="relative isolate overflow-hidden rounded-3xl bg-gray-900 px-6 py-24 shadow-2xl sm:px-12 lg:px-16 mb-16">
                    <div className="absolute inset-0 -z-10">
                        <Image
                            src="/assets/img/geospatial/hero-background.jpg"
                            alt="Geospatial mapping"
                            fill
                            className="object-cover opacity-30"
                            priority
                        />
                    </div>
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Geospatial Intelligence
                        </h1>
                        <p className="mt-4 text-lg leading-8 text-gray-300">
                            Advanced geospatial solutions combining drone
                            technology, AI, and analytics for comprehensive
                            infrastructure monitoring and mapping.
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
                    {/* AirDiff Product */}
                    <div className="flex flex-col">
                        <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-8">
                            <div className="relative h-48 overflow-hidden rounded-lg mb-6">
                                <Image
                                    src="/assets/img/geospatial/airdiff.jpg"
                                    alt="AirDiff - Change Detection Software"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                1MW AirDiff
                            </h2>
                            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                                1MW AirDiff is a Change Detection Software for
                                visualization of differences between large
                                aerial datasets acquired at different periods of
                                time. It is applicable for use in monitoring
                                large infrastructure assets such as oil and gas
                                pipelines, roads, highways, and more.
                            </p>
                            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                                The software is agnostic to how the data is
                                captured. This means that if we have two
                                datasets of the same area but they are
                                relatively different to each other in terms of
                                their overall size, lighting conditions,
                                rotation, translation, scaling or other such
                                transformations including those when one image
                                is a subset of the other, then the software is
                                able to equalize these images and perform the
                                change detection.
                            </p>
                            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                                The AirDiff engine can run on a variety of
                                platforms both on the client and server side. To
                                the left is shown an instance of AirDiff running
                                as an application on the desktop.
                            </p>
                        </div>
                    </div>

                    {/* xFleetY Product */}
                    <div className="flex flex-col">
                        <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-8">
                            <div className="relative h-48 overflow-hidden rounded-lg mb-6">
                                <Image
                                    src="/assets/img/geospatial/xfleety.jpg"
                                    alt="xFleetY - Drone Fleet Management"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                1MW xFleetY
                            </h2>
                            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                                1MW xFleetY is the first software for the Indian
                                UAV industry for monitoring and tracking a fleet
                                of drones. We are building a standards platform
                                for civilian UAVs to be tracked in the low
                                altitude Indian airspace.
                            </p>
                            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                                This is going to largely help the industry
                                takeoff as we believe that not being able to
                                track the number of different drones out there
                                is the predominant reason for the industry being
                                held to a standstill. Although developed for the
                                DGCA, we believe that our technology can also be
                                used across many other industries. So if you
                                would like to know more, kindly get in touch
                                with us.
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
                                src="/assets/img/geospatial/cta-background.jpg"
                                alt="Geospatial mapping"
                                fill
                                className="object-cover opacity-20"
                            />
                        </div>
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                Transform Your Infrastructure Monitoring
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-gray-200">
                                Discover how our geospatial solutions can help
                                you monitor and maintain your infrastructure
                                more efficiently.
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

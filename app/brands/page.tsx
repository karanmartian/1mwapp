import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Brands | 1 Martian Way",
    description:
        "1 Martian Way Brands include IDRL - Indian Drone Racing League and Roboland.",
};

export default function Brands() {
    return (
        <div className="bg-white dark:bg-gray-900 pt-[56px] lg:pt-[64px]">
            <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Our Brands
                    </h1>
                    <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        Discover our innovative brands that are pushing the
                        boundaries of technology and entertainment.
                    </p>
                </div>

                <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {/* IDRL Card */}
                    <div className="flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
                        <div className="aspect-video">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/JNijPHRBqdM?start=63"
                                title="IDRL Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-between p-6">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    IDRL - Indian Drone Racing League
                                </h3>
                                <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
                                    India's First and Largest Drone Racing
                                    Sports League. Since our inception in August
                                    2016 at IIT Gandhinagar, we have completed
                                    multiple successful racing seasons across
                                    the nation at various prominent institutes
                                    and locations.
                                </p>
                                <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
                                    IDRL pioneered night drone racing in India
                                    at IIT Madras and has built a thriving
                                    community of over 5,000 registered pilots.
                                    Our events showcase world-class drone racing
                                    and promote the advancement of drone
                                    technology in sports.
                                </p>
                            </div>
                            <div className="mt-6">
                                <a
                                    href="https://droneracingindia.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                >
                                    Visit Website
                                    <ArrowTopRightIcon className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RoboLand Card */}
                    <div className="flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
                        <div className="aspect-video">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/r0XPzhJlQiI"
                                title="RoboLand Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-between p-6">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    RoboLand
                                </h3>
                                <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
                                    The World's First Human Robot Gaming Zone,
                                    formed as a collaboration between Gade
                                    Autonomous Systems Pvt. Ltd. and 1MW takes
                                    man-machine interaction to unprecedented
                                    levels. We create immersive entertainment
                                    experiences using cutting-edge robotics
                                    technology, perfect for corporate events,
                                    educational workshops, and private
                                    celebrations.
                                </p>
                                <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
                                    Our innovative RoboLand Workshops provide
                                    hands-on learning experiences in robotics
                                    technology. Participants can build their own
                                    robots and gain practical understanding of
                                    robotics principles in an engaging,
                                    interactive environment.
                                </p>
                            </div>
                            <div className="mt-6">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                >
                                    Contact Us
                                    <ArrowTopRightIcon className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

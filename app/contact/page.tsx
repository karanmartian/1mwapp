"use client";

import {
    EnvelopeClosedIcon,
    GlobeIcon,
    HomeIcon,
    MobileIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
        "idle"
    );
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || "Failed to send message");
            }

            setStatus("sent");
            e.currentTarget.reset();
        } catch (error) {
            setStatus("error");
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Failed to send message"
            );
            console.error("Error sending message:", error);
        }
    };

    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                                                <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
                        Get in Touch
                    </h1>
                    <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        We'd love to hear from you. Our team is ready to assist
                        with your inquiries about our advanced drone and AI
                        solutions.
                    </p>
                </div>

                <div className="mx-auto mt-12 max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-xs ring-1 ring-gray-900/5 p-8">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2">
                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Contact Information
                                </h2>
                                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                                    <span className="font-medium">
                                        Pro Tip:
                                    </span>{" "}
                                    Email is our preferred method of
                                    communication. Our dedicated team typically
                                    responds within minutes!
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                                        1 Martian Way Industries Pvt. Ltd
                                    </h3>
                                    <div className="mt-2 flex items-center text-sm text-gray-600 dark:text-gray-300">
                                        <GlobeIcon className="h-5 w-5 text-gray-400 mr-2" />
                                        https://1martianway.com
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                                        Registered Office
                                    </h3>
                                    <div className="mt-2 flex items-start text-sm text-gray-600 dark:text-gray-300">
                                        <HomeIcon className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                                        <div>
                                            502 Satya Sadan, Bhimani Street
                                            <br />
                                            Matunga East
                                            <br />
                                            Mumbai – 400 019
                                            <br />
                                            India
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                        <EnvelopeClosedIcon className="h-5 w-5 text-gray-400 mr-2" />
                                        sales[at]1martianway[dot]com
                                    </div>
                                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                        <MobileIcon className="h-5 w-5 text-gray-400 mr-2" />
                                        +91 8850.227233
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Contact Form */}
                        {/* <div className="lg:border-l lg:border-gray-200 lg:pl-8 dark:lg:border-gray-700">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                Send us a Message
                            </h2>
                            <form
                                onSubmit={handleSubmit}
                                className="mt-6 space-y-4"
                            >
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-xs focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-xs focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-xs focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        disabled={status === "sending"}
                                        className="rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === "sending"
                                            ? "Sending..."
                                            : status === "sent"
                                            ? "Message Sent!"
                                            : status === "error"
                                            ? "Try Again"
                                            : "Send Message"}
                                    </button>
                                    {status === "error" && (
                                        <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                                            {errorMessage}
                                        </p>
                                    )}
                                    {status === "sent" && (
                                        <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                                            Thank you for your message. We'll
                                            get back to you soon!
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

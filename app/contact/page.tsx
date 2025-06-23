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
        <>
            <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h1 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                        Get in Touch
                    </h1>
                    <p className="mt-4 text-lg leading-8 text-white/80">
                        We'd love to hear from you. Our team is ready to assist
                        with your inquiries about our advanced humanoids, Martian OS and AI. 
                        solutions.
                    </p>
                </div>
                <div className="mx-auto mt-12 max-w-2xl bg-slate-900 rounded-2xl shadow-xs ring-1 ring-gray-900/5 p-8">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2">
                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-semibold text-white">
                                    Contact Information
                                </h2>
                                <p className="mt-4 text-sm text-white/80">
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
                                    <h3 className="text-base font-semibold text-white">
                                        1 Martian Way Industries Pvt. Ltd
                                    </h3>
                                    <div className="mt-2 flex items-center text-sm text-white/80">
                                        <GlobeIcon className="h-5 w-5 text-white/50 mr-2" />
                                        https://1martianway.com
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-white">
                                        Registered Office
                                    </h3>
                                    <div className="mt-2 flex items-start text-sm text-white/80">
                                        <HomeIcon className="h-5 w-5 text-white/50 mr-2 mt-0.5" />
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
                                    <div className="flex items-center text-sm text-white/80">
                                        <EnvelopeClosedIcon className="h-5 w-5 text-white/50 mr-2" />
                                        sales[at]1martianway[dot]com
                                    </div>
                                    <div className="flex items-center text-sm text-white/80">
                                        <MobileIcon className="h-5 w-5 text-white/50 mr-2" />
                                        +91 8850.227233
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Quick Contact Form (optional, currently commented out) */}
                        {/* ...form code here if needed... */}
                    </div>
                </div>
            </div>
        </>
    );
}

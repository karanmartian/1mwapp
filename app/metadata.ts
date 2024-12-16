import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://1martianway.com"),
    title: {
        default: "1 Martian Way Industries Pvt. Ltd",
        template: "%s | 1 Martian Way Industries",
    },
    description:
        "1 Martian Way Industries is a leading provider of drone and AI solutions, specializing in geospatial technology and artificial intelligence applications.",
    keywords: [
        "drones",
        "AI",
        "artificial intelligence",
        "geospatial",
        "technology",
        "robotics",
        "automation",
    ],
    authors: [{ name: "1 Martian Way Industries" }],
    creator: "1 Martian Way Industries",
    publisher: "1 Martian Way Industries",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://1martianway.com",
        siteName: "1 Martian Way Industries",
        title: "1 Martian Way Industries - Drone & AI Solutions",
        description:
            "Leading provider of drone and AI solutions, specializing in geospatial technology and artificial intelligence applications.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "1 Martian Way Industries",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "1 Martian Way Industries - Drone & AI Solutions",
        description:
            "Leading provider of drone and AI solutions, specializing in geospatial technology and artificial intelligence applications.",
        images: ["/og-image.jpg"],
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
};

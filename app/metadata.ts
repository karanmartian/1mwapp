import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://1martianway.com"),
    title: {
        default: "1 Martian Way Industries - Humanoid Robots & AI Consciousness",
        template: "%s | 1 Martian Way Industries",
    },
    description:
        "1 Martian Way Industries is a developer of conscious humanoid robots and advanced robot operating systems. We create sentient AI-powered humanoids with Martian OS, the first real-time operating system designed specifically for conscious robotics.",
    keywords: [
        "humanoid robots",
        "robot operating system",
        "conscious AI",
        "artificial consciousness",
        "Martian OS",
        "sentient robots",
        "humanoid robotics",
        "AI consciousness platform",
        "real-time robotics OS",
        "Rust robotics",
        "autonomous humanoids",
        "robot intelligence",
        "conscious machines",
        "advanced robotics",
        "humanoid AI",
        "robotics technology",
        "intelligent robots",
        "robot consciousness",
        "humanoid automation",
        "next-generation robotics"
    ],
    authors: [{ name: "1 Martian Way Industries" }],
    creator: "1 Martian Way Industries",
    publisher: "1 Martian Way Industries",
    category: "Technology",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://1martianway.com",
        siteName: "1 Martian Way Industries",
        title: "1 Martian Way Industries - World's First Conscious Humanoid Robots",
        description:
            "Pioneering conscious humanoid robots with advanced AI consciousness. Powered by Martian OS - the world's first real-time operating system designed for sentient robotics.",
        images: [
            {
                url: "/assets/img/humanoids/martian-x1-assistant.jpg",
                width: 1200,
                height: 630,
                alt: "1 Martian Way Industries - Conscious Humanoid Robots",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "1 Martian Way Industries - Conscious Humanoid Robots & AI",
        description:
            "World's first conscious humanoid robots with advanced AI consciousness, powered by Martian OS real-time robotics operating system.",
        images: ["/assets/img/humanoids/martian-x1-assistant.jpg"],
        creator: "@1MartianWay",
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 5,
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
        shortcut: "/favicon-16x16.png",
    },
    manifest: "/manifest.json",
    alternates: {
        canonical: "https://1martianway.com",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import MainLayout from "./components/MainLayout";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: 'swap',
});

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL("https://1martianway.com"),
    title: {
        default: "1 Martian Way Industries - Humanoid Robots & AI Consciousness",
        template: "%s | 1 Martian Way Industries",
    },
    description:
        "Leading creator of humanoid robots and AI consciousness software. We develop sentient autonomous beings that think, learn, and adapt to transform human-robot collaboration across industries.",
    keywords: [
        "humanoid robots",
        "AI consciousness",
        "artificial intelligence",
        "robotics",
        "sentient robots",
        "autonomous beings",
        "robot consciousness",
        "AI software",
        "humanoid technology",
        "robotic automation",
        "machine consciousness",
        "intelligent robots"
    ],
    authors: [{ name: "1 Martian Way Industries" }],
    creator: "1 Martian Way Industries",
    publisher: "1 Martian Way Industries",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://1martianway.com",
        siteName: "1 Martian Way Industries",
        title: "1 Martian Way Industries - Humanoid Robots & AI Consciousness",
        description:
            "Leading creator of humanoid robots and AI consciousness software. We develop sentient autonomous beings that think, learn, and adapt.",
        images: [
            {
                url: "/assets/img/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "1 Martian Way Industries - Humanoid Robots & AI Consciousness",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "1 Martian Way Industries - Humanoid Robots & AI Consciousness",
        description:
            "Leading creator of humanoid robots and AI consciousness software. We develop sentient autonomous beings that think, learn, and adapt.",
        images: ["/assets/img/og-image.jpg"],
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#0f172a" },
        { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable} dark`} suppressHydrationWarning>
            <body className="min-h-screen bg-slate-950 text-white antialiased">
                <Theme appearance="dark" accentColor="violet" radius="large">
                    <Providers>
                        <MainLayout>{children}</MainLayout>
                    </Providers>
                </Theme>
            </body>
        </html>
    );
}

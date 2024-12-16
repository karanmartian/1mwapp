import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import MainLayout from "./components/MainLayout";
import "./globals.css";
import { Providers } from "./providers";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://1martianway.com"),
    title: {
        default: "1 Martian Way Industries Pvt. Ltd",
        template: "%s",
    },
    description:
        "Leading provider of drone and AI solutions, specializing in geospatial technology and artificial intelligence applications.",
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
    },
    twitter: {
        card: "summary_large_image",
        title: "1 Martian Way Industries - Drone & AI Solutions",
        description:
            "Leading provider of drone and AI solutions, specializing in geospatial technology and artificial intelligence applications.",
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={outfit.className} suppressHydrationWarning>
            <body className="min-h-screen bg-white dark:bg-gray-950">
                <Theme appearance="light" accentColor="blue" radius="medium">
                    <Providers>
                        <MainLayout>{children}</MainLayout>
                    </Providers>
                </Theme>
            </body>
        </html>
    );
}

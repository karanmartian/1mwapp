"use client";

import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-10">{children}</main>
            <Footer />
        </div>
    );
}

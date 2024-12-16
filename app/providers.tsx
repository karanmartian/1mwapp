"use client";

import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    );
}

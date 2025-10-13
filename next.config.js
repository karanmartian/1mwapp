/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["bootstrap"],
    // Enable React Compiler (stable in Next.js 16)
    reactCompiler: true,
    experimental: {
        // Enable Turbopack file system caching (beta)
        turbopackFileSystemCacheForDev: true,
    },
};

module.exports = nextConfig;

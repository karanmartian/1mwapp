import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/private/", "/admin/", "/api/"],
                crawlDelay: 1,
            },
            {
                userAgent: "Googlebot",
                allow: "/",
                disallow: ["/private/", "/admin/"],
                crawlDelay: 0,
            },
            {
                userAgent: "Bingbot",
                allow: "/",
                disallow: ["/private/", "/admin/"],
                crawlDelay: 1,
            },
        ],
        sitemap: "https://1martianway.com/sitemap.xml",
        host: "https://1martianway.com",
    };
}

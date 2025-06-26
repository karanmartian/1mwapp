import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://1martianway.com";

    const routes = [
        { route: "", priority: 1.0, changeFreq: "weekly" as const },
        { route: "/martianos", priority: 0.95, changeFreq: "weekly" as const },
        { route: "/artificialintelligence", priority: 0.9, changeFreq: "weekly" as const },
        { route: "/products", priority: 0.85, changeFreq: "weekly" as const },
        { route: "/brands", priority: 0.8, changeFreq: "monthly" as const },
        { route: "/contact", priority: 0.8, changeFreq: "monthly" as const },
        { route: "/press", priority: 0.7, changeFreq: "monthly" as const },
        { route: "/licensing", priority: 0.6, changeFreq: "monthly" as const },
    ].map(({ route, priority, changeFreq }) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: changeFreq,
        priority: priority,
    }));

    return routes;
}

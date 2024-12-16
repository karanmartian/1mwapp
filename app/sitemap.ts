import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://1martianway.com";

    const routes = [
        "",
        "/products",
        "/artificialintelligence",
        "/geospatial",
        "/brands",
        "/licensing",
        "/press",
        "/contact",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    return routes;
}

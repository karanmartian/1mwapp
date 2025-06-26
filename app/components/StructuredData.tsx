"use client";

interface StructuredDataProps {
    type: 'Organization' | 'Product' | 'TechArticle' | 'SoftwareApplication';
    data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
    const getStructuredData = () => {
        const baseOrganization = {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "1 Martian Way Industries",
            description: "World's leading developer of conscious humanoid robots and advanced robot operating systems",
            url: "https://1martianway.com",
            logo: "https://1martianway.com/assets/img/1mw-logo.png",
            sameAs: [
                "https://twitter.com/1MartianWay",
                "https://linkedin.com/company/1martianway",
                "https://github.com/1martianway"
            ],
            industry: "Robotics Technology",
            foundingDate: "2020",
            address: {
                "@type": "PostalAddress",
                addressCountry: "India"
            },
            contactPoint: {
                "@type": "ContactPoint",
                contactType: "Research Partnerships",
                url: "https://1martianway.com/contact"
            },
            makesOffer: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Product",
                        name: "Conscious Humanoid Robots",
                        description: "AI-powered sentient humanoid robots with advanced consciousness"
                    }
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "SoftwareApplication",
                        name: "Martian OS",
                        description: "Real-time operating system for conscious humanoid robots",
                        operatingSystem: "Rust-based real-time OS",
                        applicationCategory: "Robot Operating System"
                    }
                }
            ]
        };

        switch (type) {
            case 'Organization':
                return baseOrganization;
            
            case 'Product':
                return {
                    "@context": "https://schema.org",
                    "@type": "Product",
                    name: data?.name || "Conscious Humanoid Robots",
                    description: data?.description || "Advanced AI-powered humanoid robots with true consciousness",
                    brand: {
                        "@type": "Brand",
                        name: "1 Martian Way Industries"
                    },
                    manufacturer: {
                        "@type": "Organization",
                        name: "1 Martian Way Industries",
                        url: "https://1martianway.com"
                    },
                    category: "Humanoid Robotics",
                    audience: {
                        "@type": "Audience",
                        audienceType: "Research Institutions, Enterprises"
                    }
                };
            
            case 'SoftwareApplication':
                return {
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    name: "Martian OS",
                    description: "World's first real-time operating system designed specifically for conscious humanoid robots",
                    applicationCategory: "Robot Operating System",
                    operatingSystem: "Rust-based Real-time OS",
                    programmingLanguage: "Rust",
                    creator: {
                        "@type": "Organization",
                        name: "1 Martian Way Industries",
                        url: "https://1martianway.com"
                    },
                    offers: {
                        "@type": "Offer",
                        price: "Contact for licensing",
                        priceCurrency: "USD",
                        availability: "https://schema.org/InStock",
                        url: "https://1martianway.com/licensing"
                    },
                    featureList: [
                        "Sub-microsecond interrupt latency",
                        "Memory safety guarantees",
                        "Real-time scheduling",
                        "Consciousness integration APIs",
                        "Hardware abstraction layer"
                    ]
                };

            case 'TechArticle':
                return {
                    "@context": "https://schema.org",
                    "@type": "TechArticle",
                    headline: data?.title || "Advances in Conscious Humanoid Robotics",
                    description: data?.description || "Latest developments in AI consciousness and humanoid robotics technology",
                    author: {
                        "@type": "Organization",
                        name: "1 Martian Way Industries",
                        url: "https://1martianway.com"
                    },
                    publisher: {
                        "@type": "Organization",
                        name: "1 Martian Way Industries",
                        url: "https://1martianway.com",
                        logo: {
                            "@type": "ImageObject",
                            url: "https://1martianway.com/assets/img/1mw-logo.png"
                        }
                    },
                    dateModified: new Date().toISOString(),
                    mainEntityOfPage: {
                        "@type": "WebPage",
                        "@id": data?.url || "https://1martianway.com"
                    }
                };

            default:
                return baseOrganization;
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(getStructuredData(), null, 2)
            }}
        />
    );
} 
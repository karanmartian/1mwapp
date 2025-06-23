import {
    CameraIcon,
    DrawingPinIcon,
    GlobeIcon
} from "@radix-ui/react-icons";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Robot Spatial Intelligence | 1 Martian Way",
    description:
        "Advanced spatial intelligence systems enabling humanoid robots to navigate, map, and understand complex environments.",
};

const spatialFeatures = [
    {
        name: "3D Environment Mapping",
        description:
            "Real-time spatial mapping on Martian OS with sub-microsecond latency, enabling humanoid robots to build detailed 3D models while maintaining deterministic performance.",
        icon: CameraIcon,
    },
    {
        name: "Autonomous Navigation", 
        description:
            "Rust-powered pathfinding algorithms with memory-safe navigation stacks, enabling safe movement through complex spaces without runtime overhead.",
        icon: DrawingPinIcon,
    },
    {
        name: "Spatial Reasoning",
        description:
            "Advanced spatial AI running on dedicated neural compute units within Martian OS, providing real-time object relationship understanding and interaction optimization.",
        icon: GlobeIcon,
    },
];

export default function Geospatial() {
    return (
        <div className="relative min-h-screen pt-[56px] lg:pt-[64px]">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
            <div className="absolute inset-0 grid-bg opacity-20"></div>
            
            <div className="relative mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
                {/* Hero Section */}
                <div className="relative isolate overflow-hidden glass-card rounded-3xl px-6 py-24 shadow-2xl sm:px-12 lg:px-16 mb-16">
                    <div className="absolute inset-0 -z-10">
                        <Image
                            src="/assets/img/spatial/spatial-reasoning.jpg"
                            alt="Robot spatial intelligence and reasoning"
                            fill
                            className="object-cover opacity-30"
                            priority
                        />
                    </div>
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                            Robot <span className="gradient-text-primary">Spatial Intelligence</span>
                        </h1>
                        <p className="text-lg leading-8 text-white/90 max-w-3xl mx-auto mb-6">
                            Empowering humanoid robots with advanced spatial intelligence, environmental understanding, 
                            and autonomous navigation capabilities for seamless integration into human spaces.
                        </p>
                        <div className="glass rounded-2xl p-6 max-w-3xl mx-auto">
                            <p className="text-sm text-white/80 text-center mb-4">
                                <strong className="gradient-text-primary">Powered by Martian OS</strong> - 
                                Real-time spatial processing with deterministic performance guarantees
                            </p>
                            <div className="flex justify-center gap-4 text-xs text-white/70">
                                <span>🗺️ <strong>Real-time</strong> mapping</span>
                                <span>⚡ <strong>1000Hz</strong> control loops</span>
                                <span>🧭 <strong>Sub-cm</strong> accuracy</span>
                                <span>🔒 <strong>Memory-safe</strong> navigation</span>
                            </div>
                            <div className="text-center mt-4">
                                <Link 
                                    href="/martianos" 
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-500/30 text-blue-300 hover:from-blue-500/30 hover:to-purple-500/30 transition-all-smooth text-sm"
                                >
                                    Explore Martian OS →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="mx-auto mb-16">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl mb-4">
                            Spatial Intelligence Systems
                        </h2>
                        <p className="text-lg text-white/80 max-w-3xl mx-auto">
                            Our humanoid robots use sophisticated spatial intelligence to understand, 
                            navigate, and interact with complex environments.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {spatialFeatures.map((feature) => (
                            <div
                                key={feature.name}
                                className="glass-card rounded-3xl p-8 hover:scale-105 transition-all-smooth group"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-6">
                                    <feature.icon
                                        className="h-6 w-6 text-white"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-4 gradient-text-primary">
                                    {feature.name}
                                </h3>
                                <p className="text-base text-white/80">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Spatial Technologies Section */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-16">
                    {/* Environmental Mapping */}
                    <div className="glass-card rounded-3xl p-8 hover:scale-105 transition-all-smooth">
                        <div className="relative h-48 overflow-hidden rounded-2xl mb-6">
                            <Image
                                src="/assets/img/spatial/environmental-mapping.jpg"
                                alt="Environmental Mapping Technology"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4 gradient-text-primary">
                            Advanced Environmental Mapping
                        </h2>
                        <p className="text-base leading-7 text-white/80 mb-6">
                            Our humanoid robots create detailed, real-time 3D maps of their surroundings using advanced 
                            sensor fusion technology. This enables them to understand spatial relationships, identify 
                            objects, and navigate safely through complex environments.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {[
                                "LiDAR Integration",
                                "Computer Vision", 
                                "Sensor Fusion",
                                "Real-time Processing"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                                    {feature}
                                </div>
                            ))}
                        </div>
                        
                        <Link
                            href="/contact"
                            className="inline-flex items-center text-sm font-semibold gradient-text-cyan hover:text-cyan-300 transition-colors group"
                        >
                            Learn More <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                    </div>

                    {/* Autonomous Navigation */}
                    <div className="glass-card rounded-3xl p-8 hover:scale-105 transition-all-smooth">
                        <div className="relative h-48 overflow-hidden rounded-2xl mb-6">
                            <Image
                                src="/assets/img/spatial/autonomous-navigation.jpg"
                                alt="Autonomous Navigation System"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4 gradient-text-primary">
                            Intelligent Navigation Framework
                        </h2>
                        <p className="text-base leading-7 text-white/80 mb-6">
                            Sophisticated pathfinding algorithms and obstacle avoidance systems enable our humanoid 
                            robots to move naturally through human environments, adapting to dynamic conditions 
                            and ensuring safe interaction with people and objects.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {[
                                "Dynamic Pathfinding",
                                "Obstacle Avoidance",
                                "Human-aware Navigation", 
                                "Adaptive Behavior"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></span>
                                    {feature}
                                </div>
                            ))}
                        </div>
                        
                        <Link
                            href="/contact"
                            className="inline-flex items-center text-sm font-semibold gradient-text-cyan hover:text-cyan-300 transition-colors group"
                        >
                            Request Demo <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                </div>

                {/* Applications Section */}
                <div className="glass-card rounded-3xl p-12 mb-16">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl mb-4">
                            Spatial Intelligence Applications
                        </h2>
                        <p className="text-lg text-white/80 max-w-3xl mx-auto">
                            Our spatial intelligence systems enable humanoid robots to excel in diverse environments and applications.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Indoor Navigation",
                                description: "Navigate homes, offices, and complex indoor spaces",
                                icon: "🏢",
                                color: "from-blue-500 to-cyan-500"
                            },
                            {
                                title: "Outdoor Exploration", 
                                description: "Traverse outdoor environments and rough terrain",
                                icon: "🌳",
                                color: "from-green-500 to-blue-500"
                            },
                            {
                                title: "Industrial Sites",
                                description: "Operate safely in manufacturing and construction",
                                icon: "🏭",
                                color: "from-purple-500 to-pink-500"
                            },
                            {
                                title: "Emergency Response",
                                description: "Navigate disaster zones and rescue scenarios",
                                icon: "🚨",
                                color: "from-red-500 to-orange-500"
                            }
                        ].map((app, index) => (
                            <div key={index} className="text-center glass rounded-3xl p-6 hover:scale-105 transition-all-smooth">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center text-2xl mx-auto mb-4`}>
                                    {app.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{app.title}</h3>
                                <p className="text-sm text-white/70">{app.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="glass-card rounded-3xl p-12 text-center">
                    <h2 className="font-display text-3xl font-bold text-white sm:text-4xl mb-6">
                        Transform Spatial Intelligence with <span className="gradient-text-primary">Humanoid Robots</span>
                    </h2>
                    <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
                        Discover how our advanced spatial intelligence systems can revolutionize how robots 
                        understand and navigate the world around them.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 text-lg font-semibold text-white rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 transition-all-smooth hover:scale-105 shadow-2xl overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all-smooth blur-xl"></div>
                            <span className="relative z-10">Start Spatial Integration</span>
                        </Link>
                        <Link
                            href="/products"
                            className="group text-lg font-semibold text-white/80 hover:text-white transition-colors"
                        >
                            View Humanoid Robots{" "}
                            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

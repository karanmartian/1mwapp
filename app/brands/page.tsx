import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Humanoid Robot Divisions | 1 Martian Way",
    description:
        "1 Martian Way divisions focused on humanoid robotics, AI consciousness, and human-robot collaboration technologies.",
};

export default function Brands() {
    return (
        <div className="relative min-h-screen">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
            <div className="absolute inset-0 grid-bg opacity-20"></div>
            
            <div className="relative mx-auto max-w-7xl px-6 py-6 sm:py-8 lg:px-8">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                        Our <span className="gradient-text-primary">Humanoid</span> Divisions
                    </h1>
                    <p className="text-lg leading-8 text-white/80 max-w-2xl mx-auto">
                        Specialized divisions advancing the frontiers of humanoid robotics, 
                        AI consciousness, and human-robot collaboration across multiple industries.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {/* Martian Consciousness Labs */}
                    <div className="glass-card rounded-3xl overflow-hidden hover:scale-105 transition-all-smooth group">
                        <div className="aspect-video bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🧠</div>
                                    <h3 className="text-2xl font-bold text-white gradient-text-primary">
                                        Martian Consciousness Labs
                                    </h3>
                                    <p className="text-white/70 mt-2">AI Consciousness Research Division</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        <div className="p-8">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-white mb-4 gradient-text-primary">
                                    Martian Consciousness Labs
                                </h3>
                                <p className="text-base text-white/80 mb-4">
                                    Our premier research division dedicated to developing artificial consciousness 
                                    for humanoid robots. We pioneer breakthrough technologies in neural networks, 
                                    emotional intelligence, and self-aware AI systems that power the next generation 
                                    of conscious robots.
                                </p>
                                <p className="text-base text-white/80 mb-6">
                                    Since our establishment, we've developed the world's first commercial consciousness 
                                    platform for humanoid robots, enabling them to think, feel, and make autonomous 
                                    decisions while maintaining ethical guidelines and human compatibility.
                                </p>
                                
                                {/* Key Achievements */}
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    {[
                                        "100+ Conscious AI Models",
                                        "Real-time Emotion Processing",
                                        "Autonomous Learning Systems",
                                        "Ethical AI Framework"
                                    ].map((achievement, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                                            {achievement}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <Link
                                    href="/artificialintelligence"
                                    className="inline-flex items-center px-4 py-2.5 text-sm font-semibold text-white rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all-smooth hover:scale-105 shadow-lg"
                                >
                                    Explore AI Platform
                                    <ArrowTopRightIcon className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Humanoid Integration Studios */}
                    <div className="glass-card rounded-3xl overflow-hidden hover:scale-105 transition-all-smooth group">
                        <div className="aspect-video bg-gradient-to-br from-purple-900 via-cyan-900 to-slate-900 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">🤖</div>
                                    <h3 className="text-2xl font-bold text-white gradient-text-cyan">
                                        Humanoid Integration Studios
                                    </h3>
                                    <p className="text-white/70 mt-2">Human-Robot Collaboration Division</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                        <div className="p-8">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-white mb-4 gradient-text-cyan">
                                    Humanoid Integration Studios
                                </h3>
                                <p className="text-base text-white/80 mb-4">
                                    Specialized in seamless human-robot collaboration experiences. We design and develop 
                                    interaction protocols, social behavior systems, and collaborative frameworks that 
                                    enable humanoid robots to work naturally alongside humans in various environments.
                                </p>
                                <p className="text-base text-white/80 mb-6">
                                    Our studio creates immersive experiences using cutting-edge humanoid robotics 
                                    technology, perfect for research institutions, corporate training programs, 
                                    and demonstration of future human-robot societies.
                                </p>
                                
                                {/* Key Services */}
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    {[
                                        "Collaboration Protocols",
                                        "Social Behavior Design",
                                        "Integration Training",
                                        "Custom Robot Solutions"
                                    ].map((service, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></span>
                                            {service}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center px-4 py-2.5 text-sm font-semibold text-white rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all-smooth hover:scale-105 shadow-lg"
                                >
                                    Schedule Integration
                                    <ArrowTopRightIcon className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Research Initiatives */}
                <div className="mt-16 glass-card rounded-3xl p-12">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl mb-4">
                            Research <span className="gradient-text-primary">Initiatives</span>
                        </h2>
                        <p className="text-lg text-white/80 max-w-3xl mx-auto">
                            Our ongoing research projects that push the boundaries of humanoid robotics and AI consciousness.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Emotional AI",
                                description: "Developing empathetic responses in humanoid robots",
                                icon: "❤️",
                                progress: "Advanced Testing"
                            },
                            {
                                title: "Collective Intelligence",
                                description: "Multi-robot consciousness networks and collaboration",
                                icon: "🌐",
                                progress: "Research Phase"
                            },
                            {
                                title: "Ethical AI",
                                description: "Building moral decision-making frameworks",
                                icon: "⚖️",
                                progress: "Implementation"
                            }
                        ].map((initiative, index) => (
                            <div key={index} className="text-center glass rounded-3xl p-6 hover:scale-105 transition-all-smooth">
                                <div className="text-4xl mb-4">{initiative.icon}</div>
                                <h3 className="text-lg font-semibold text-white mb-2 gradient-text-primary">{initiative.title}</h3>
                                <p className="text-sm text-white/70 mb-3">{initiative.description}</p>
                                <div className="text-xs text-cyan-400 font-medium">{initiative.progress}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 glass-card rounded-3xl p-12 text-center">
                    <h2 className="font-display text-3xl font-bold text-white sm:text-4xl mb-6">
                        Join Our <span className="gradient-text-primary">Humanoid Revolution</span>
                    </h2>
                    <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
                        Partner with our specialized divisions to advance humanoid robotics, develop conscious AI, 
                        and create the future of human-robot collaboration.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 text-lg font-semibold text-white rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 transition-all-smooth hover:scale-105 shadow-2xl overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all-smooth blur-xl"></div>
                            <span className="relative z-10">Partner With Us</span>
                        </Link>
                        <Link
                            href="/products"
                            className="group text-lg font-semibold text-white/80 hover:text-white transition-colors"
                        >
                            View Our Robots{" "}
                            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

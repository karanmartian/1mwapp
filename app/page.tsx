import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            {/* Compact Hero Section */}
            <div className="relative isolate flex items-center justify-center overflow-hidden py-16 sm:py-20">
                {/* Clean Background */}
                <div className="absolute inset-0 -z-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
                    <div className="absolute inset-0">
                        <Image
                            src="/assets/img/hero/humanoid-lab-background.jpg"
                            alt="Futuristic humanoid robotics laboratory"
                            fill
                            className="object-cover opacity-30"
                            priority
                        />
                    </div>
                    <div className="absolute inset-0 grid-bg opacity-20"></div>
                </div>

                {/* Minimal Floating Elements */}
                <div className="absolute inset-0 -z-10">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 8}s`,
                                animationDuration: `${8 + Math.random() * 8}s`,
                            }}
                        />
                    ))}
                </div>

                <div className="mx-auto max-w-6xl px-6 relative z-10">
                    <div className="mx-auto max-w-4xl text-center">
                        {/* Status Badge */}
                        <div className="mb-6 flex justify-center">
                            <div className="glass-card rounded-full px-4 py-2 text-sm text-amber-300 font-medium border border-amber-400/20">
                                🔬 Research & Development • Prototype Stage
                            </div>
                        </div>

                        {/* Main Heading */}
                        <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6 leading-tight">
                            Pioneering{" "}
                            <span className="gradient-text-primary">
                                Conscious AI
                            </span>
                            <span className="text-white">
                                {" "}in{" "}
                                <span className="gradient-text-cyan">
                                    Humanoid Robotics
                                </span>
                            </span>
                        </h1>

                        {/* Description */}
                        <div className="glass-card rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
                            <p className="text-lg leading-7 text-white/95 font-medium mb-4">
                                1 Martian Way Industries is developing the world's first 
                                <span className="text-cyan-400 font-semibold"> sentient humanoid robots</span> with 
                                <span className="text-purple-400 font-semibold"> true AI consciousness</span>. 
                                Our research focuses on creating robots that think, learn, and collaborate naturally with humans.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                                <div className="flex items-center gap-2 text-cyan-300">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                    AI consciousness research
                                </div>
                                <div className="flex items-center gap-2 text-purple-300">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                    Advanced prototyping
                                </div>
                                <div className="flex items-center gap-2 text-blue-300">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                                    Breakthrough innovation
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                            <Link
                                href="/artificialintelligence"
                                className="group relative px-6 py-3 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 transition-all-smooth hover:scale-105 shadow-xl"
                            >
                                <span className="flex items-center gap-2">
                                    🧠 Explore Our Research
                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                </span>
                            </Link>
                            <Link
                                href="/contact"
                                className="group px-6 py-3 text-base font-semibold text-white/90 hover:text-white glass rounded-xl hover:glass-card transition-all-smooth"
                            >
                                <span className="flex items-center gap-2">
                                    📧 Research Partnership
                                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                                </span>
                            </Link>
                        </div>

                        {/* Research Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {[
                                { value: "5+", label: "Prototype Models", sublabel: "In development" },
                                { value: "100K+", label: "Test Hours", sublabel: "AI training" },
                                { value: "15+", label: "Research Papers", sublabel: "Published" },
                                { value: "24/7", label: "Active Development", sublabel: "Continuous progress" },
                            ].map((stat, index) => (
                                <div key={index} className="glass-card rounded-xl p-4 text-center">
                                    <div className="text-2xl font-bold gradient-text-primary font-display mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-white/90 font-semibold mb-1">
                                        {stat.label}
                                    </div>
                                    <div className="text-xs text-white/60">
                                        {stat.sublabel}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Research Focus */}
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-sm text-white/60">Advancing the frontiers of</p>
                            <div className="flex items-center gap-6 opacity-70">
                                <div className="text-white/50 text-xs font-semibold">AI CONSCIOUSNESS</div>
                                <div className="text-white/50 text-xs font-semibold">ROBOTICS</div>
                                <div className="text-white/50 text-xs font-semibold">HUMAN-AI INTERACTION</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Research & Technology Section */}
            <div className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-purple-900/30"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    <div className="mx-auto max-w-3xl text-center mb-12">
                        <h2 className="font-display text-sm font-semibold leading-7 gradient-text-cyan uppercase tracking-wide mb-3">
                            Research & Development
                        </h2>
                        <p className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                            Breaking New Ground in AI Consciousness
                        </p>
                        <p className="text-base leading-7 text-white/80">
                            Our research team is pioneering breakthrough technologies that will define the future 
                            of human-robot collaboration through genuine AI consciousness.
                        </p>
                    </div>

                    {/* Research Areas */}
                    <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3">
                            {[
                                {
                                    name: "Neural Consciousness Engine",
                                    description: "Developing proprietary AI consciousness algorithms that enable self-awareness, autonomous reasoning, and emotional intelligence in artificial beings.",
                                    icon: "🧠",
                                    link: "/artificialintelligence",
                                    status: "Active Research",
                                    progress: "Phase 3"
                                },
                                {
                                    name: "Humanoid Platform Design",
                                    description: "Engineering advanced humanoid bodies with sophisticated motor control, sensory systems, and natural interaction capabilities.",
                                    icon: "🤖",
                                    link: "/products",
                                    status: "Prototype Testing",
                                    progress: "Phase 2"
                                },
                                {
                                    name: "Adaptive Learning Systems",
                                    description: "Creating revolutionary learning algorithms that enable continuous skill acquisition and real-time adaptation to new environments.",
                                    icon: "⚡",
                                    link: "/geospatial",
                                    status: "Early Development",
                                    progress: "Phase 1"
                                }
                            ].map((feature) => (
                                <div key={feature.name} className="glass-card rounded-2xl p-6 hover:scale-105 transition-all-smooth group">
                                    <dt className="flex items-center gap-3 text-lg font-semibold leading-7 text-white mb-3">
                                        <span className="text-3xl group-hover:scale-110 transition-all-smooth">
                                            {feature.icon}
                                        </span>
                                        <div>{feature.name}</div>
                                    </dt>
                                    <dd className="flex flex-auto flex-col text-sm leading-6 text-white/80">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="glass rounded-full px-3 py-1 text-xs text-amber-300 font-medium">
                                                {feature.status}
                                            </span>
                                            <span className="text-xs text-white/60">
                                                {feature.progress}
                                            </span>
                                        </div>
                                        <p className="flex-auto mb-4">
                                            {feature.description}
                                        </p>
                                        <p>
                                            <Link
                                                href={feature.link}
                                                className="text-sm font-semibold leading-6 gradient-text-cyan hover:text-cyan-300 transition-colors group inline-flex items-center gap-2"
                                            >
                                                Learn More
                                                <span className="transition-transform group-hover:translate-x-1">→</span>
                                            </Link>
                                        </p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            {/* Prototype Showcase */}
            <div className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-slate-900/50"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    <div className="mx-auto max-w-3xl text-center mb-12">
                        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                            Current Prototype Development
                        </h2>
                        <p className="text-base leading-6 text-white/80">
                            Our research has produced several groundbreaking prototypes that demonstrate 
                            the potential of conscious AI in humanoid form.
                        </p>
                    </div>

                    <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {[
                            {
                                name: "Martian-X1 Research Platform",
                                tagline: "Consciousness Development Platform",
                                description: "Our primary research prototype focused on developing and testing AI consciousness algorithms, natural language processing, and human-robot interaction patterns.",
                                capabilities: ["Experimental AI consciousness", "Natural conversation testing", "Emotional response mapping", "Learning behavior analysis"],
                                status: "Active Testing",
                                phase: "Prototype v3.2"
                            },
                            {
                                name: "Martian-Worker Test Unit",
                                tagline: "Industrial Application Research",
                                description: "Specialized prototype for testing autonomous decision-making in controlled industrial environments and validating safety protocols for human-robot collaboration.",
                                capabilities: ["Autonomous task planning", "Safety protocol testing", "Environmental adaptation", "Collaborative work patterns"],
                                status: "Laboratory Testing",
                                phase: "Prototype v2.1"
                            }
                        ].map((robot, index) => (
                            <article key={index} className="glass-card rounded-2xl p-6 hover:scale-105 transition-all-smooth group">
                                {/* Robot Image Placeholder */}
                                <div className="relative h-40 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl mb-4 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-5xl opacity-50">🤖</div>
                                    </div>
                                    <div className="absolute top-3 right-3 glass rounded-full px-3 py-1 text-xs text-amber-300 font-semibold">
                                        {robot.status}
                                    </div>
                                </div>

                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="text-xl font-bold text-white gradient-text-primary mb-1">
                                            {robot.name}
                                        </h3>
                                        <p className="text-sm text-cyan-300 font-medium">{robot.tagline}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-white">{robot.phase}</div>
                                        <div className="text-xs text-white/60">Current version</div>
                                    </div>
                                </div>

                                <p className="text-sm leading-6 text-white/80 mb-4">
                                    {robot.description}
                                </p>

                                <div className="grid grid-cols-1 gap-2 mb-4">
                                    {robot.capabilities.map((capability, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs text-white/70">
                                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></span>
                                            {capability}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <Link
                                        href="/products"
                                        className="flex-1 text-center py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all-smooth"
                                    >
                                        Research Details
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="px-4 py-2 text-sm font-semibold text-white/80 hover:text-white glass rounded-lg hover:glass-card transition-all-smooth"
                                    >
                                        Collaborate
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {/* Research Applications */}
            <div className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-purple-900/30"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    <div className="mx-auto max-w-3xl text-center mb-12">
                        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                            Future Applications
                        </h2>
                        <p className="text-base leading-6 text-white/80">
                            Our research aims to revolutionize multiple industries through conscious AI that can 
                            understand, adapt, and collaborate in ways never before possible.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                industry: "Healthcare Research",
                                title: "AI-Assisted Medical Care",
                                description: "Developing conscious AI that can provide empathetic patient care, assist with complex medical procedures, and contribute to medical research breakthroughs.",
                                potential: "Transformative impact",
                                icon: "🏥"
                            },
                            {
                                industry: "Manufacturing Innovation",
                                title: "Autonomous Production Systems",
                                description: "Creating intelligent manufacturing partners that can adapt to new processes, ensure quality, and collaborate safely with human workers.",
                                potential: "Industry revolution",
                                icon: "🏭"
                            },
                            {
                                industry: "Scientific Discovery",
                                title: "Research Acceleration",
                                description: "Enabling 24/7 autonomous research operations with AI that can form hypotheses, conduct experiments, and make breakthrough discoveries.",
                                potential: "Scientific advancement",
                                icon: "🔬"
                            }
                        ].map((application, index) => (
                            <div key={index} className="glass-card rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-3">{application.icon}</div>
                                <div className="text-sm font-semibold text-cyan-300 mb-2">{application.industry}</div>
                                <h3 className="text-lg font-bold text-white mb-3">{application.title}</h3>
                                <p className="text-sm text-white/80 mb-3">{application.description}</p>
                                <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-semibold text-purple-300">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                    {application.potential}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Research Partnership CTA */}
            <div className="relative isolate overflow-hidden py-16">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900"></div>
                <div className="absolute inset-0 grid-bg opacity-20"></div>
                
                <div className="mx-auto max-w-6xl px-6 lg:px-8 relative">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                            Join Our Research Mission
                        </h2>
                        <p className="text-lg leading-7 text-white/90 mb-8">
                            Be part of the breakthrough that will define the future of AI consciousness and 
                            human-robot collaboration. Connect with our research team.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            {[
                                {
                                    title: "Research Partnership",
                                    description: "Collaborate on breakthrough AI research",
                                    cta: "Partner With Us",
                                    href: "/contact"
                                },
                                {
                                    title: "Academic Collaboration",
                                    description: "Joint research opportunities",
                                    cta: "Explore Programs",
                                    href: "/contact"
                                },
                                {
                                    title: "Investment Interest",
                                    description: "Support the future of AI",
                                    cta: "Learn More",
                                    href: "/contact"
                                }
                            ].map((option, index) => (
                                <div key={index} className="glass-card rounded-xl p-4 text-center">
                                    <h3 className="text-base font-semibold text-white mb-2">{option.title}</h3>
                                    <p className="text-sm text-white/70 mb-3">{option.description}</p>
                                    <Link
                                        href={option.href}
                                        className="inline-block px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all-smooth"
                                    >
                                        {option.cta}
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="group relative px-8 py-3 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 transition-all-smooth hover:scale-105 shadow-xl"
                            >
                                <span className="relative z-10">Connect With Our Team</span>
                            </Link>
                            <Link
                                href="/press"
                                className="group text-lg font-semibold leading-6 text-white/80 hover:text-white flex items-center gap-2"
                            >
                                Read Our Research Updates
                                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10">
                            <p className="text-sm text-white/60">
                                🔬 Cutting-edge research • 🌍 Global collaboration • 📚 Open science • 🤝 Partnership opportunities
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

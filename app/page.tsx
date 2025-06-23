import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <div className="relative isolate min-h-screen flex items-center justify-center overflow-hidden">
                {/* Animated Background */}
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
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 -z-10">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white/20 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${5 + Math.random() * 10}s`,
                            }}
                        />
                    ))}
                </div>

                <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8 relative z-10">
                    <div className="mx-auto max-w-4xl text-center">
                        {/* Main Heading */}
                        <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                            The Future of{" "}
                            <span className="gradient-text-primary block mt-1">
                                Humanoid Robotics
                            </span>
                            <span className="gradient-text-cyan block mt-1">
                                & AI Intelligence
                            </span>
                        </h1>

                        {/* Glassmorphic Description Card */}
                        <div className="glass-card rounded-3xl p-6 mb-8 max-w-3xl mx-auto">
                            <p className="text-lg leading-7 text-white/90 font-medium">
                                1 Martian Way Industries is pioneering the next generation of 
                                <span className="text-cyan-400 font-semibold"> humanoid robots</span> and 
                                <span className="text-purple-400 font-semibold"> AI software platforms</span>. 
                                We create sentient, autonomous beings that think, learn, and adapt to transform industries and human-robot collaboration.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                            <Link
                                href="/products"
                                className="group relative px-6 py-3 text-base font-semibold text-white rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 transition-all-smooth hover:scale-105 shadow-2xl overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all-smooth blur-xl"></div>
                                <span className="relative z-10 flex items-center gap-2">
                                    🤖 Explore Our Robots
                                </span>
                            </Link>
                            <Link
                                href="/artificialintelligence"
                                className="group px-6 py-3 text-base font-semibold text-white/90 hover:text-white glass rounded-2xl hover:glass-card transition-all-smooth hover:scale-105"
                            >
                                <span className="flex items-center gap-2">
                                    🧠 AI Software Platform
                                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                                </span>
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                            {[
                                { value: "50+", label: "Humanoid Models" },
                                { value: "100M+", label: "AI Decisions/Day" },
                                { value: "25+", label: "Industries Served" },
                                { value: "99.9%", label: "Uptime Reliability" },
                            ].map((stat, index) => (
                                <div key={index} className="glass-card rounded-2xl p-4 text-center hover:scale-105 transition-all-smooth">
                                    <div className="text-2xl font-bold gradient-text-primary font-display mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-white/70 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* Robotics Solutions Section */}
            <div className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-purple-900/30"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    <div className="mx-auto max-w-2xl lg:text-center mb-12">
                        <h2 className="font-display text-sm font-semibold leading-7 gradient-text-cyan uppercase tracking-wide">
                            Advanced Robotics
                        </h2>
                        <p className="font-display mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Humanoid Robots That Think & Act
                        </p>
                        <p className="mt-4 text-base leading-7 text-white/80">
                            Our humanoid robots combine advanced AI consciousness with physical capabilities, 
                            creating autonomous beings that understand, learn, and interact naturally with humans.
                        </p>
                    </div>

                    <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3">
                            {[
                                {
                                    name: "Sentient AI Consciousness",
                                    description: "Advanced neural networks that enable true understanding, emotion recognition, and autonomous decision-making in complex environments.",
                                    icon: "🧠",
                                    link: "/artificialintelligence"
                                },
                                {
                                    name: "Humanoid Physical Form",
                                    description: "Precision-engineered bodies with human-like movement, dexterity, and sensory capabilities for seamless integration.",
                                    icon: "🤖",
                                    link: "/products"
                                },
                                {
                                    name: "Adaptive Learning Systems",
                                    description: "Continuous learning algorithms that allow robots to adapt, improve, and evolve their capabilities over time.",
                                    icon: "⚡",
                                    link: "/geospatial"
                                }
                            ].map((feature) => (
                                <div key={feature.name} className="glass-card rounded-3xl p-6 hover:scale-105 transition-all-smooth group">
                                    <dt className="flex items-center gap-3 text-xl font-semibold leading-7 text-white mb-3">
                                        <span className="text-3xl group-hover:scale-110 transition-all-smooth">
                                            {feature.icon}
                                        </span>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-3 flex flex-auto flex-col text-sm leading-6 text-white/80">
                                        <p className="flex-auto mb-4">
                                            {feature.description}
                                        </p>
                                        <p>
                                            <Link
                                                href={feature.link}
                                                className="text-xs font-semibold leading-6 gradient-text-cyan hover:text-cyan-300 transition-colors group inline-flex items-center gap-2"
                                            >
                                                Learn more
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

            {/* AI Software Platform Section */}
            <div className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-slate-900/50"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    <div className="mx-auto max-w-2xl lg:mx-0 mb-12">
                        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            AI Software Platform
                        </h2>
                        <p className="mt-4 text-base leading-7 text-white/80">
                            Power your robots with our cutting-edge AI software that enables consciousness, 
                            learning, and autonomous decision-making across any robotic platform.
                        </p>
                    </div>

                    <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {[
                            {
                                title: "Neural Consciousness Engine",
                                description: "Our proprietary AI consciousness platform that gives robots the ability to think, feel, and make autonomous decisions with human-like reasoning.",
                                features: ["Self-aware AI", "Emotional intelligence", "Autonomous reasoning", "Learning adaptation"]
                            },
                            {
                                title: "Robotic Control Systems",
                                description: "Advanced motion control and coordination software that enables fluid, human-like movement and precise manipulation in any environment.",
                                features: ["Real-time control", "Predictive movement", "Sensory integration", "Safety protocols"]
                            }
                        ].map((platform, index) => (
                            <article key={index} className="glass-card rounded-3xl p-6 hover:scale-105 transition-all-smooth">
                                <h3 className="text-xl font-semibold leading-6 text-white mb-3 gradient-text-primary">
                                    {platform.title}
                                </h3>
                                <p className="text-sm leading-6 text-white/80 mb-4">
                                    {platform.description}
                                </p>
                                <ul className="space-y-1 mb-4">
                                    {platform.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-xs text-white/70">
                                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/artificialintelligence"
                                    className="inline-flex items-center gap-2 text-xs font-semibold gradient-text-cyan hover:text-cyan-300 transition-colors group"
                                >
                                    Explore Platform
                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Products */}
            <div className="relative py-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-purple-900/30"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    <div className="mx-auto max-w-2xl lg:mx-0 mb-12">
                        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Featured Humanoid Models
                        </h2>
                        <p className="mt-3 text-base leading-7 text-white/80">
                            Discover our latest humanoid robots that are revolutionizing industries 
                            through advanced AI consciousness and human-like capabilities.
                        </p>
                    </div>

                    <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {[
                            {
                                name: "Martian-X1 Assistant",
                                description: "Advanced humanoid assistant robot with consciousness-level AI for complex problem-solving, human interaction, and autonomous task execution in professional environments.",
                                capabilities: ["Natural conversation", "Complex reasoning", "Emotional intelligence", "Autonomous learning"]
                            },
                            {
                                name: "Martian-Worker Industrial",
                                description: "Heavy-duty humanoid robot designed for industrial applications with enhanced strength, precision, and safety protocols for manufacturing and construction.",
                                capabilities: ["Precision manipulation", "Heavy lifting", "Safety compliance", "Predictive maintenance"]
                            }
                        ].map((robot, index) => (
                            <article key={index} className="glass-card rounded-3xl p-6 hover:scale-105 transition-all-smooth group">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xl">
                                        🤖
                                    </div>
                                    <h3 className="text-xl font-semibold leading-6 text-white gradient-text-primary">
                                        {robot.name}
                                    </h3>
                                </div>
                                <p className="text-sm leading-6 text-white/80 mb-4">
                                    {robot.description}
                                </p>
                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    {robot.capabilities.map((capability, i) => (
                                        <div key={i} className="flex items-center gap-2 text-xs text-white/70">
                                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></span>
                                            {capability}
                                        </div>
                                    ))}
                                </div>
                                <Link
                                    href="/products"
                                    className="inline-flex items-center gap-2 text-xs font-semibold gradient-text-cyan hover:text-cyan-300 transition-colors group"
                                >
                                    View Specifications
                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative isolate overflow-hidden py-16">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900"></div>
                <div className="absolute inset-0 grid-bg opacity-10"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready to Build the Future?
                        </h2>
                        <p className="mt-4 text-base leading-7 text-white/80">
                            Join us in creating the next generation of humanoid robots and AI consciousness. 
                            Let's shape tomorrow's world together.
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="group relative px-6 py-3 text-base font-semibold text-white rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 transition-all-smooth hover:scale-105 shadow-2xl overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all-smooth blur-xl"></div>
                                <span className="relative z-10">Start Your Project</span>
                            </Link>
                            <Link
                                href="/press"
                                className="group text-base font-semibold leading-6 text-white/80 hover:text-white"
                            >
                                Learn More{" "}
                                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

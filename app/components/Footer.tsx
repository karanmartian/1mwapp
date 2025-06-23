"use client";

import Image from "next/image";
import Link from "next/link";

const navigation = {
    solutions: [
        { name: 'Humanoid Robots', href: '/products' },
        { name: 'AI Consciousness', href: '/artificialintelligence' },
        { name: 'Robotic Control Systems', href: '/geospatial' },
        { name: 'AI Software Platform', href: '/artificialintelligence' },
    ],
    company: [
        { name: 'About Us', href: '/press' },
        { name: 'Our Brands', href: '/brands' },
        { name: 'Careers', href: '/contact' },
        { name: 'Press & Media', href: '/press' },
    ],
    resources: [
        { name: 'Documentation', href: '/contact' },
        { name: 'Support', href: '/contact' },
        { name: 'Contact', href: '/contact' },
        { name: 'Licensing', href: '/licensing' },
    ],
    social: [
        {
            name: 'Twitter',
            href: '#',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: '#',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: '#',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
};

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-t from-slate-950 via-purple-950/50 to-slate-900/50" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="grid-bg opacity-5 absolute inset-0"></div>
            </div>

            <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32 relative">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white gradient-text-primary">
                                    Solutions
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <Link 
                                                href={item.href} 
                                                className="text-sm leading-6 text-white/70 hover:text-white transition-colors hover:gradient-text-cyan"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white gradient-text-primary">
                                    Company
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.name}>
                                            <Link 
                                                href={item.href} 
                                                className="text-sm leading-6 text-white/70 hover:text-white transition-colors hover:gradient-text-cyan"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white gradient-text-primary">
                                    Resources
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.resources.map((item) => (
                                        <li key={item.name}>
                                            <Link 
                                                href={item.href} 
                                                className="text-sm leading-6 text-white/70 hover:text-white transition-colors hover:gradient-text-cyan"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white gradient-text-primary">
                                    Connect
                                </h3>
                                <div className="mt-6 flex space-x-6">
                                    {navigation.social.map((item) => (
                                        <Link 
                                            key={item.name} 
                                            href={item.href} 
                                            className="text-white/60 hover:text-white transition-colors"
                                        >
                                            <span className="sr-only">{item.name}</span>
                                            <item.icon className="h-6 w-6" aria-hidden="true" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 xl:mt-0">
                        <h3 className="text-sm font-semibold leading-6 text-white gradient-text-primary">
                            Subscribe to our newsletter
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-white/70">
                            Get the latest updates on humanoid robotics and AI consciousness technology.
                        </p>
                        <form className="mt-6 sm:flex sm:max-w-md">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                required
                                className="w-full min-w-0 appearance-none rounded-xl border-0 bg-white/5 px-4 py-2 text-base text-white placeholder:text-white/60 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:w-64 sm:text-sm sm:leading-6 backdrop-blur-sm"
                                placeholder="Enter your email"
                            />
                            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:from-violet-500 hover:to-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 transition-all-smooth hover:scale-105"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Company info section */}
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="flex items-center space-x-3 group">
                                <div className="relative">
                                    <Image
                                        className="h-10 w-auto transition-all-smooth group-hover:rotate-12"
                                        src="/assets/img/1mw-logo.svg"
                                        alt="1MW"
                                        width={40}
                                        height={40}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-all-smooth blur-xl"></div>
                                </div>
                                <div>
                                    <div className="text-xl font-bold gradient-text-primary font-display">
                                        1 Martian Way Industries
                                    </div>
                                    <div className="text-xs text-white/60 font-medium">
                                        Pioneering Humanoid Robotics & AI Consciousness
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <p className="text-xs leading-5 text-white/60">
                                &copy; {new Date().getFullYear()} 1 Martian Way Industries Pvt. Ltd. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tech specs */}
                <div className="mt-8 glass-card rounded-2xl p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-2xl font-bold gradient-text-cyan font-display">24/7</div>
                            <div className="text-xs text-white/60">AI Monitoring</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold gradient-text-cyan font-display">99.9%</div>
                            <div className="text-xs text-white/60">Uptime SLA</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold gradient-text-cyan font-display">&lt; 1ms</div>
                            <div className="text-xs text-white/60">Response Time</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold gradient-text-cyan font-display">∞</div>
                            <div className="text-xs text-white/60">Learning Capacity</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

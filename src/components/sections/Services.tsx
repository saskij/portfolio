"use client";

import { motion } from "framer-motion";
import { Code2, LayoutTemplate, Zap } from "lucide-react";

export function Services() {
    const services = [
        {
            icon: <Code2 className="w-8 h-8 text-accent-blue" />,
            title: "Custom Web Applications",
            description: "Complex, high-performance, and secure portals tailored specifically to your business processes.",
        },
        {
            icon: <LayoutTemplate className="w-8 h-8 text-accent-amber" />,
            title: "High-Conversion Landing Pages",
            description: "Premium landing pages, like this portfolio, designed for high conversion and architectural impact.",
        },
        {
            icon: <Zap className="w-8 h-8 text-accent-violet-dark" />,
            title: "Performance Optimization",
            description: "Optimization of site speed and SEO to maximize reach and improve search engine rankings.",
        },
    ];

    return (
        <section id="services" className="py-24 md:py-32 relative bg-zinc-950 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

            <div className="container px-6 md:px-12 mx-auto relative z-10">
                <div className="max-w-3xl mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div className="inline-flex items-center gap-3 py-1.5 px-3 border border-zinc-800 bg-zinc-900/50 mb-6 rounded-full">
                            <span className="block w-1.5 h-1.5 bg-accent-blue rounded-full shadow-[0_0_8px_rgba(58,109,255,0.8)]" />
                            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-zinc-400">
                                Expertise
                            </span>
                        </div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white"
                    >
                        What I <span className="text-zinc-500">Deliver.</span>
                    </motion.h2>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: {
                                    opacity: 1, y: 0,
                                    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
                                }
                            }}
                            className="bg-black border border-white/5 rounded-3xl p-8 hover:border-accent-amber/40 hover:shadow-[0_0_25px_rgba(245,166,35,0.15)] transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit border border-white/5 group-hover:scale-110 transition-transform duration-500">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

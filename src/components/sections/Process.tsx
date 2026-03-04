"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

export function Process() {
    const steps = [
        {
            num: "01",
            title: "Discovery & Strategy",
            description: "Understanding your business goals, target audience, and functional requirements. We lay the foundation before a single line of code is written.",
            icon: <Search className="w-8 h-8" />
        },
        {
            num: "02",
            title: "UI/UX Design",
            description: "Crafting intuitive user flows and pixel-perfect interfaces. Prototypes are validated to ensure seamless user experiences.",
            icon: <PenTool className="w-8 h-8" />
        },
        {
            num: "03",
            title: "Development",
            description: "Translating designs into clean, scalable architecture. Focus on performance, security, and responsive implementation.",
            icon: <Code className="w-8 h-8" />
        },
        {
            num: "04",
            title: "Delivery & QA",
            description: "Rigorous testing, optimization, and seamless deployment. Post-launch support ensures everything runs flawlessly.",
            icon: <Rocket className="w-8 h-8" />
        }
    ];

    return (
        <section id="process" className="py-24 md:py-32 bg-zinc-950/80 relative overflow-hidden">
            {/* Deep Violet Radial Background Gradient */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,43,92,0.15)_0%,transparent_70%)]" />
                <div className="w-[1000px] h-[500px] bg-accent-violet-light/10 rounded-full blur-[100px] -translate-y-1/4" />
            </div>

            <div className="container px-6 md:px-12 mx-auto relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        How it <span className="text-zinc-500">gets done.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="text-lg text-zinc-400"
                    >
                        A systematic, transparent process designed to turn complex problems into elegant solutions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) - Muted Electric Blue */}
                    <div className="hidden lg:block absolute top-[48px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent" />

                    {/* Glowing dividers between stages on the line */}
                    <div className="hidden lg:flex absolute top-[48px] left-[25%] right-[25%] justify-between pointer-events-none">
                        <div className="w-1.5 h-[1px] rounded-full bg-accent-blue shadow-[0_0_8px_rgba(58,109,255,0.8)]" />
                        <div className="w-1.5 h-[1px] rounded-full bg-accent-blue shadow-[0_0_8px_rgba(58,109,255,0.8)]" />
                        <div className="w-1.5 h-[1px] rounded-full bg-accent-blue shadow-[0_0_8px_rgba(58,109,255,0.8)]" />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            {/* Icon Container with Hover Interaction: amber highlight + blue glow */}
                            <div className="w-24 h-24 rounded-full bg-black border border-white/5 flex items-center justify-center z-10 mb-6 group-hover:border-accent-amber/50 group-hover:shadow-[0_0_30px_rgba(58,109,255,0.15)] transition-all duration-500 relative overflow-hidden">
                                {/* Amber circular node indicator */}
                                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-accent-amber/40 group-hover:bg-accent-amber group-hover:shadow-[0_0_10px_rgba(245,166,35,0.8)] transition-all duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="z-10 text-zinc-500 group-hover:text-accent-amber transition-colors duration-300">
                                    {step.icon}
                                </div>
                            </div>

                            <div className="text-5xl font-bold text-white/5 mb-4 group-hover:text-white/10 transition-colors">
                                {step.num}
                            </div>

                            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                            <p className="text-zinc-500 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

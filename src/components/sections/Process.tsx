"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

export function Process() {
    const steps = [
        {
            num: "01",
            title: "Discovery & Strategy",
            description: "Understanding your business goals, target audience, and functional requirements. We lay the foundation before a single line of code is written.",
            icon: <Search className="w-8 h-8 text-white/50" />
        },
        {
            num: "02",
            title: "UI/UX Design",
            description: "Crafting intuitive user flows and pixel-perfect interfaces. Prototypes are validated to ensure seamless user experiences.",
            icon: <PenTool className="w-8 h-8 text-white/50" />
        },
        {
            num: "03",
            title: "Development",
            description: "Translating designs into clean, scalable architecture. Focus on performance, security, and responsive implementation.",
            icon: <Code className="w-8 h-8 text-white/50" />
        },
        {
            num: "04",
            title: "Delivery & QA",
            description: "Rigorous testing, optimization, and seamless deployment. Post-launch support ensures everything runs flawlessly.",
            icon: <Rocket className="w-8 h-8 text-white/50" />
        }
    ];

    return (
        <section id="process" className="py-24 md:py-32">
            <div className="container px-6 md:px-12 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        How it <span className="text-zinc-500">gets done.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-zinc-400"
                    >
                        A systematic, transparent process designed to turn complex problems into elegant solutions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            {/* Icon Container */}
                            <div className="w-24 h-24 rounded-full bg-black border border-white/10 flex items-center justify-center z-10 mb-6 group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                {step.icon}
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

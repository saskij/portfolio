"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

export function About() {
    return (
        <section id="about" className="py-24 md:py-32 relative bg-zinc-950 overflow-hidden">
            {/* Technical Divider */}
            <div className="absolute top-0 left-0 w-full flex justify-center">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />
                {/* Core highlight for precision */}
                <div className="absolute top-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-zinc-500/40 to-transparent blur-[1px]" />
            </div>

            {/* Subtle Architectural Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-end">
                <div className="w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] translate-x-1/3" />
            </div>

            <div className="container px-6 md:px-12 mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-2 md:order-1"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Driven by <span className="text-zinc-500">intent.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-zinc-400">
                            <p>
                                I am a web developer focused on building reliable, well-designed applications that solve real-world challenges for small businesses and startups. I believe that good software is the result of clarity, consistent communication, and a focus on the user&apos;s actual needs.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0" />
                                    <span><strong>Clarity and Design:</strong> I prioritize clean, intuitive user interfaces that make complex tasks feel simple and straightforward.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0" />
                                    <span><strong>Maintainable Code:</strong> I focus on writing clear, organized code that is easy to manage and scale as your business grows.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0" />
                                    <span><strong>Reliable Partnership:</strong> I take pride in being a dependable developer who delivers intentional work with strong attention to detail.</span>
                                </li>
                            </ul>

                            <p>
                                I am dedicated to steady improvement and refining my craft with every project. My goal is to deliver honest work that provides immediate value while maintaining a focus on long-term stability and growth.
                            </p>
                        </div>

                    </motion.div>

                    {/* Abstract Image or Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-1 md:order-2 relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glass-card border-white/10"
                    >
                        <Image
                            src={getAssetPath("/images/about/engineering-empathy-premium.webp")}
                            alt="Engineering Empathy UI components"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-top"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";

export function About() {
    return (
        <section id="about" className="py-24 md:py-32 relative">
            <div className="container px-6 md:px-12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-2 md:order-1"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                            Engineering with <span className="text-zinc-500">empathy.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-zinc-400">
                            <p>
                                As a dedicated hybrid developer, I bridge the gap between design and engineering. I don't just write code; I craft digital experiences that solve real business problems.
                            </p>
                            <p>
                                My approach is rooted in product thinking. I believe that elegant architecture and beautiful UI are two sides of the same coin. Whether I'm building a design system from scratch or optimizing a React application, my focus is always on the end user.
                            </p>
                            <p>
                                With a strong foundation in modern web technologies, I bring technical focus, strategic thinking, and a meticulous eye for detail to every project.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-4xl font-bold text-white mb-2">100%</h4>
                                <p className="text-sm text-zinc-500">Dedication</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-white mb-2">24/7</h4>
                                <p className="text-sm text-zinc-500">Focus on Quality</p>
                            </div>
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
                            src={getAssetPath("/images/about/engineering-empathy.jpg")}
                            alt="Engineering UI components"
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

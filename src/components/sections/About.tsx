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
                            Grounded in <span className="text-zinc-500">learning.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-zinc-400">
                            <p>
                                I am a self-taught web developer who believes that clear communication and reliable code are the foundation of every successful project. My journey is defined by curiosity and a commitment to building practical solutions that work for people.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0" />
                                    <span><strong>Continuous Learning:</strong> I actively stay updated with modern tools and best practices to ensure your projects are built on a solid, current foundation.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0" />
                                    <span><strong>Reliability:</strong> I take pride in being a dependable partner for small businesses, delivering what I promise with attention to detail.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0" />
                                    <span><strong>Problem Solving:</strong> My focus is on understanding your actual needs and building straightforward, maintainable applications that solve real-world challenges.</span>
                                </li>
                            </ul>

                            <p>
                                I don&apos;t claim to have decades of enterprise experience, but I do promise a high level of intentionality in everything I build. I am constantly refining my craft and looking for ways to improve both my code and the user experience it creates.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-4xl font-bold text-white mb-2">Honest</h4>
                                <p className="text-sm text-zinc-500">Approach</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-white mb-2">Growth</h4>
                                <p className="text-sm text-zinc-500">Mindset</p>
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
                            src={getAssetPath("/images/about/engineering-empathy-premium.jpg")}
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

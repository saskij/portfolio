"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Hero() {
    return (
        <motion.section
            initial="initial"
            whileHover="hover"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Gradient Orbs */}
            <motion.div
                variants={{
                    initial: { boxShadow: "0 0 250px 150px rgba(147, 51, 234, 0.15)" },
                    hover: {
                        boxShadow: [
                            "0 0 250px 150px rgba(147, 51, 234, 0.15)",
                            "0 0 250px 150px rgba(6, 182, 212, 0.15)",
                            "0 0 250px 150px rgba(236, 72, 153, 0.15)",
                            "0 0 250px 150px rgba(59, 130, 246, 0.15)",
                            "0 0 250px 150px rgba(147, 51, 234, 0.15)"
                        ],
                        transition: { duration: 10, repeat: Infinity, ease: "linear" }
                    }
                }}
                className="absolute top-1/3 left-1/3 w-0 h-0 pointer-events-none z-0 rounded-full"
            />
            <motion.div
                variants={{
                    initial: { boxShadow: "0 0 250px 150px rgba(37, 99, 235, 0.15)" },
                    hover: {
                        boxShadow: [
                            "0 0 250px 150px rgba(37, 99, 235, 0.15)",
                            "0 0 250px 150px rgba(147, 51, 234, 0.15)",
                            "0 0 250px 150px rgba(6, 182, 212, 0.15)",
                            "0 0 250px 150px rgba(236, 72, 153, 0.15)",
                            "0 0 250px 150px rgba(37, 99, 235, 0.15)"
                        ],
                        transition: { duration: 10, repeat: Infinity, ease: "linear" }
                    }
                }}
                className="absolute bottom-1/3 right-1/3 w-0 h-0 pointer-events-none z-0 rounded-full"
            />

            <div className="container px-6 md:px-12 z-10 text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.span
                        whileHover={{
                            backgroundColor: [
                                "rgba(255,255,255,0.05)",
                                "rgba(139,92,246,0.2)",
                                "rgba(6,182,212,0.2)",
                                "rgba(236,72,153,0.2)",
                                "rgba(255,255,255,0.05)"
                            ],
                            borderColor: [
                                "rgba(255,255,255,0.1)",
                                "rgba(139,92,246,0.5)",
                                "rgba(6,182,212,0.5)",
                                "rgba(236,72,153,0.5)",
                                "rgba(255,255,255,0.1)"
                            ],
                            color: ["#d4d4d8", "#ffffff", "#ffffff", "#ffffff", "#d4d4d8"],
                            transition: { duration: 4, repeat: Infinity, ease: "linear" }
                        }}
                        className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-zinc-300 mb-6 cursor-pointer"
                    >
                        Available for new opportunities
                    </motion.span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
                >
                    Frontend Engineer & <br className="hidden md:block" /> UI/UX Designer.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto"
                >
                    I build high-performance web applications that merge stunning design with solid engineering. Let&apos;s create something extraordinary.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="#work" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full">
                            View My Work
                        </Button>
                    </Link>
                    <Link href="#contact" className="w-full sm:w-auto">
                        <Button size="lg" variant="outline" className="w-full">
                            Contact Me
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-zinc-500 uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"
                />
            </motion.div>
        </motion.section>
    );
}

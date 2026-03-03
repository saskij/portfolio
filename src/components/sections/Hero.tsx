"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Hero() {
    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const target = targetId.startsWith('#') ? targetId.substring(1) : targetId;
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', `#${target}`);
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Atmospheric Glow */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center bg-black">
                {/* Subtle Noise Texture */}
                <div className="absolute inset-0 bg-noise opacity-[0.035] mix-blend-screen" />

                {/* Layer 1: Base Ambient Glow (Very diffuse, neutral/incandescent) */}
                <motion.div
                    animate={{
                        opacity: [0.05, 0.10, 0.05],
                        scale: [0.98, 1.02, 0.98],
                        backgroundImage: [
                            "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, rgba(200,200,210,0.03) 40%, transparent 80%)",
                            "radial-gradient(ellipse at center, rgba(240,240,250,0.08) 0%, rgba(210,210,225,0.03) 40%, transparent 80%)",
                            "radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, rgba(200,200,210,0.03) 40%, transparent 80%)"
                        ]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute w-[120vw] h-[100vh] max-w-[1400px] max-h-[900px] rounded-full blur-[140px]"
                />

                {/* Layer 2: Core Focused Glow behind Headline (Subtle architectural warmth) */}
                <motion.div
                    animate={{
                        opacity: [0.08, 0.14, 0.08],
                        scale: [0.98, 1.02, 0.98],
                        backgroundImage: [
                            "radial-gradient(ellipse at center, rgba(250,245,235,0.06) 0%, rgba(230,225,235,0.02) 40%, transparent 70%)",
                            "radial-gradient(ellipse at center, rgba(255,250,240,0.06) 0%, rgba(240,235,245,0.02) 40%, transparent 70%)",
                            "radial-gradient(ellipse at center, rgba(250,245,235,0.06) 0%, rgba(230,225,235,0.02) 40%, transparent 70%)"
                        ]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute top-[20%] w-[600px] h-[500px] md:w-[900px] md:h-[600px] rounded-full blur-[120px]"
                />
            </div>

            <div className="relative container px-6 md:px-12 z-10 text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                        className="inline-flex items-center gap-3 py-1.5 px-3 border border-zinc-800 bg-zinc-950/50 mb-6 cursor-pointer"
                    >
                        <span className="block w-1.5 h-1.5 bg-zinc-500" />
                        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-zinc-400">
                            Status: Available
                        </span>
                    </motion.div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 leading-[1.1]"
                >
                    Modern Web Apps <br className="hidden md:block" /> for Growing Businesses.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    I build reliable, well-designed web applications. My focus is on writing maintainable code and delivering clean user interfaces that help startups and small businesses succeed online.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#portfolio" onClick={(e) => handleScrollTo(e, '#portfolio')} className="w-full sm:w-auto">
                        <Button size="lg" className="w-full hover:scale-[1.02] transition-transform">
                            View My Work
                        </Button>
                    </a>
                    <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="w-full sm:w-auto">
                        <Button size="lg" variant="outline" className="w-full hover:scale-[1.02] transition-transform">
                            Contact Me
                        </Button>
                    </a>
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
        </section>
    );
}

"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { LogoAnimation } from "@/components/ui/LogoAnimation";

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    React.useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Process", href: "#process" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Work", href: "#work" },
        { name: "Contact", href: "#contact" },
    ];

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
                className={`fixed top-0 left-0 right-0 z-[60] flex h-24 items-center justify-between px-6 md:px-12 transition-all duration-500 transform-gpu ${isScrolled && !menuOpen
                    ? "bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/50"
                    : "bg-transparent"
                    }`}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="z-[60] relative flex items-center group"
                    onClick={closeMenu}
                >
                    <LogoAnimation />
                </Link>

                {/* Right Actions: CTA + Menu Trigger */}
                <div className="flex items-center gap-6 md:gap-8 z-[60]">
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="hidden sm:inline-block rounded-full bg-white px-6 py-2.5 text-sm font-semibold tracking-wide text-black hover:bg-zinc-200 transition-colors"
                        onClick={closeMenu}
                    >
                        Let&apos;s Talk
                    </motion.a>

                    {/* Custom Menu Trigger */}
                    <button
                        onClick={toggleMenu}
                        className="relative w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors group focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-4 relative flex flex-col justify-between items-end">
                            {/* Top Line */}
                            <motion.span
                                animate={{
                                    rotate: menuOpen ? 45 : 0,
                                    y: menuOpen ? 6 : 0,
                                    width: menuOpen ? "24px" : "24px" // Keep full width when closed
                                }}
                                transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                                className="h-[2px] bg-white w-full rounded-full origin-center group-hover:bg-zinc-300 transition-colors"
                            />
                            {/* Bottom Line (Offset when closed) */}
                            <motion.span
                                animate={{
                                    rotate: menuOpen ? -45 : 0,
                                    y: menuOpen ? -8 : 0,
                                    width: menuOpen ? "24px" : "16px" // Offset effect when closed
                                }}
                                transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                                className="h-[2px] bg-white rounded-full origin-center group-hover:w-[24px] group-hover:bg-zinc-300 transition-all duration-300"
                            />
                        </div>
                    </button>
                </div>
            </motion.header>

            {/* Fullscreen Premium Overlay Navigation */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="fixed inset-0 z-50 bg-[#0b0b0b] flex flex-col pt-32 pb-12 overflow-y-auto"
                    >
                        {/* Decorative background element for premium feel */}
                        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

                        <nav className="flex flex-col items-center justify-center gap-6 md:gap-10 w-full max-w-4xl px-6 relative z-10 my-auto mx-auto mt-[10vh]">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                                    className="overflow-hidden w-full flex justify-center"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={closeMenu}
                                        className="group relative flex items-center text-5xl sm:text-6xl md:text-[80px] font-bold tracking-tighter text-zinc-500 hover:text-white transition-colors duration-500"
                                    >
                                        {/* Number prefix for structure */}
                                        <span className="absolute -left-12 md:-left-16 top-2 md:top-4 text-sm md:text-lg font-mono font-normal text-zinc-700 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0 hidden sm:block">
                                            0{i + 1}.
                                        </span>

                                        {/* Text with slight horizontal shift on hover */}
                                        <span className="transform-gpu group-hover:translate-x-4 transition-transform duration-500 ease-[0.21,0.47,0.32,0.98]">
                                            {link.name}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Footer Info inside Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-sm font-medium tracking-wide mt-auto pt-12 relative z-10"
                        >
                            <span className="mb-4 md:mb-0">© {new Date().getFullYear()} ASHA. All rights reserved.</span>
                            <div className="flex gap-6">
                                <a href="mailto:hello@example.com" className="hover:text-white transition-colors">hello@example.com</a>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}


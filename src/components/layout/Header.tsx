"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { GlobalLogo } from "@/components/ui/GlobalLogo";
import { useLogo } from "@/context/LogoContext";

/* ─────────────────────────────────────────
   Framer Motion Variants
───────────────────────────────────────── */
const capsuleVariants = {
    closed: {
        maxWidth: 0,
        opacity: 0,
        transition: {
            when: "afterChildren" as const,
            duration: 0.2,
            ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
        },
    },
    open: {
        maxWidth: 700,
        opacity: 1,
        transition: {
            when: "beforeChildren" as const,
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
            staggerChildren: 0.04,
            delayChildren: 0.05,
        },
    },
};

const itemVariants = {
    closed: {
        opacity: 0,
        x: 8,
        transition: { duration: 0.15, ease: "easeIn" as const },
    },
    open: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
    },
};


/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */
export function Header() {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const { isSplashComplete } = useLogo();
    const navRef = React.useRef<HTMLElement>(null);
    const triggerRef = React.useRef<HTMLButtonElement>(null);

    // Close on Escape key
    React.useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape" && menuOpen) {
                setMenuOpen(false);
                triggerRef.current?.focus();
            }
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [menuOpen]);

    // Close on outside click
    React.useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (
                menuOpen &&
                navRef.current &&
                !navRef.current.contains(e.target as Node) &&
                triggerRef.current &&
                !triggerRef.current.contains(e.target as Node)
            ) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [menuOpen]);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Process", href: "#process" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" },
    ];

    const toggleMenu = () => setMenuOpen((prev) => !prev);
    const closeMenu = () => setMenuOpen(false);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        closeMenu();
        const id = targetId.startsWith("#") ? targetId.substring(1) : targetId;
        setTimeout(() => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", `#${id}`);
            }
        }, 50);
    };

    return (
        <motion.header
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute top-0 left-0 right-0 z-[60] flex h-32 items-center justify-between px-6 md:px-12 transition-all duration-500 transform-gpu bg-transparent"
        >
            {/* Logo */}
            <Link
                href="/"
                className="z-[60] relative flex items-center group h-[180px] w-auto aspect-[422/396] translate-y-[10%]"
                onClick={closeMenu}
            >
                <GlobalLogo className="w-full h-full" />
            </Link>

            {/* Right Actions */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isSplashComplete ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3 z-[60]"
            >
                {/* Let's Talk CTA */}
                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="hidden sm:inline-block rounded-full bg-white px-6 py-2.5 text-sm font-semibold tracking-wide text-black hover:bg-zinc-200 transition-colors cursor-pointer mr-2"
                    onClick={(e) => handleScrollTo(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#contact")}
                >
                    Let&apos;s Talk
                </motion.a>

                {/* ── Desktop Capsule Nav (hidden on mobile) ── */}
                <div className="hidden md:flex items-center gap-3">
                    <AnimatePresence initial={false}>
                        <motion.nav
                            ref={navRef}
                            key="capsule-nav"
                            variants={capsuleVariants}
                            initial="closed"
                            animate={menuOpen ? "open" : "closed"}
                            aria-label="Desktop navigation"
                            aria-hidden={!menuOpen}
                            className="capsule-nav overflow-hidden whitespace-nowrap"
                        >
                            <ul className="flex items-center gap-[48px] list-none px-7 py-[11px]" role="list">
                                {navLinks.map((link) => (
                                    <motion.li key={link.name} variants={itemVariants} role="none">
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleScrollTo(e, link.href)}
                                            className="capsule-nav-link relative inline-block text-[13px] font-medium tracking-[0.02em] text-white/50 hover:text-white/92 py-1 transition-colors duration-250"
                                        >
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.nav>
                    </AnimatePresence>

                    {/* Desktop Hamburger / Close Trigger */}
                    <button
                        ref={triggerRef}
                        onClick={toggleMenu}
                        aria-expanded={menuOpen}
                        aria-controls="capsule-nav"
                        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                        className="relative w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors group focus:outline-none"
                    >
                        <div className="w-6 h-4 relative flex flex-col justify-between items-end">
                            <motion.span
                                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0, width: "24px" }}
                                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                className="h-[2px] bg-white rounded-full origin-center group-hover:bg-zinc-300 transition-colors"
                            />
                            <motion.span
                                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0, width: menuOpen ? "24px" : "16px" }}
                                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                className="h-[2px] bg-white rounded-full origin-center group-hover:w-[24px] group-hover:bg-zinc-300 transition-colors"
                            />
                        </div>
                    </button>
                </div>

                {/* ── Mobile Hamburger Trigger ── */}
                <button
                    onClick={toggleMenu}
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                    className="md:hidden relative w-12 h-12 flex items-center justify-center z-[70] focus:outline-none"
                >
                    <div className="w-6 h-4 relative flex flex-col justify-between items-end">
                        <motion.span
                            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0, width: "24px" }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="h-[2px] bg-white rounded-full origin-center"
                        />
                        <motion.span
                            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0, width: menuOpen ? "24px" : "16px" }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="h-[2px] bg-white rounded-full origin-center"
                        />
                    </div>
                </button>
            </motion.div>

            {/* ── Mobile Drawer Nav ── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="md:hidden fixed inset-0 z-[65] flex"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeMenu} />

                        {/* Drawer Panel */}
                        <motion.nav
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                            className="relative w-[300px] max-w-[80vw] h-full bg-zinc-950 border-r border-white/10 shadow-2xl flex flex-col pt-32 px-8"
                        >
                            <ul className="flex flex-col gap-8 list-none" role="list">
                                {navLinks.map((link, i) => (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3, delay: i * 0.1 + 0.1 }}
                                    >
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleScrollTo(e, link.href)}
                                            className="text-2xl font-bold tracking-tight text-white/70 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                                <motion.li
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3, delay: navLinks.length * 0.1 + 0.1 }}
                                    className="pt-8 border-t border-white/10 mt-4"
                                >
                                    <a
                                        href="#contact"
                                        onClick={(e) => handleScrollTo(e, "#contact")}
                                        className="inline-block rounded-full bg-accent-amber px-8 py-3 text-sm font-semibold tracking-wide text-black hover:bg-accent-amber/90 transition-colors"
                                    >
                                        Let&apos;s Talk
                                    </a>
                                </motion.li>
                            </ul>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

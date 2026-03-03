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
            duration: 0.42,
            ease: [0.77, 0, 0.175, 1] as [number, number, number, number],
        },
    },
    open: {
        maxWidth: 700,
        opacity: 1,
        transition: {
            when: "beforeChildren" as const,
            duration: 0.55,
            ease: [0.77, 0, 0.175, 1] as [number, number, number, number],
            staggerChildren: 0.07,
            delayChildren: 0.18,
        },
    },
};

const itemVariants = {
    closed: {
        opacity: 0,
        x: 16,
        transition: { duration: 0.2, ease: "easeIn" as const },
    },
    open: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.42, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] },
    },
};


/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */
export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);
    const { isSplashComplete } = useLogo();
    const navRef = React.useRef<HTMLElement>(null);
    const triggerRef = React.useRef<HTMLButtonElement>(null);

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                className="z-[60] relative flex items-center group h-[180px] w-auto aspect-[422/396] translate-y-3"
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
                    onClick={(e) => handleScrollTo(e as any, "#contact")}
                >
                    Let&apos;s Talk
                </motion.a>

                {/* ── Capsule + Trigger wrapper ── */}
                <div className="flex items-center gap-3">

                    {/* Expanding Capsule Nav */}
                    <AnimatePresence initial={false}>
                        <motion.nav
                            ref={navRef}
                            key="capsule-nav"
                            variants={capsuleVariants}
                            initial="closed"
                            animate={menuOpen ? "open" : "closed"}
                            aria-label="Main navigation"
                            aria-hidden={!menuOpen}
                            className="capsule-nav overflow-hidden whitespace-nowrap"
                        >
                            <ul
                                className="flex items-center gap-[48px] list-none px-7 py-[11px]"
                                role="list"
                            >
                                {navLinks.map((link) => (
                                    <motion.li
                                        key={link.name}
                                        variants={itemVariants}
                                        role="none"
                                    >
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

                    {/* Hamburger / Close Trigger — two-line offset design */}
                    <button
                        ref={triggerRef}
                        onClick={toggleMenu}
                        aria-expanded={menuOpen}
                        aria-controls="capsule-nav"
                        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                        className="relative w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors group focus:outline-none"
                    >
                        <div className="w-6 h-4 relative flex flex-col justify-between items-end">
                            {/* Top line — full width */}
                            <motion.span
                                animate={{
                                    rotate: menuOpen ? 45 : 0,
                                    y: menuOpen ? 6 : 0,
                                    width: "24px",
                                }}
                                transition={{ duration: 0.42, ease: [0.21, 0.47, 0.32, 0.98] }}
                                className="h-[2px] bg-white rounded-full origin-center group-hover:bg-zinc-300 transition-colors"
                                style={{ width: "24px" }}
                            />
                            {/* Bottom line — offset (shorter) when closed, full width on open */}
                            <motion.span
                                animate={{
                                    rotate: menuOpen ? -45 : 0,
                                    y: menuOpen ? -8 : 0,
                                    width: menuOpen ? "24px" : "16px",
                                }}
                                transition={{ duration: 0.42, ease: [0.21, 0.47, 0.32, 0.98] }}
                                className="h-[2px] bg-white rounded-full origin-center group-hover:w-[24px] group-hover:bg-zinc-300 transition-colors"
                            />
                        </div>
                    </button>

                </div>
            </motion.div>
        </motion.header>
    );
}

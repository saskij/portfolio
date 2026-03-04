"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 40,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-accent-amber origin-left z-[100] shadow-[0_0_10px_rgba(245,166,35,0.8)]"
            style={{ scaleX, willChange: "transform" }}
        />
    );
}

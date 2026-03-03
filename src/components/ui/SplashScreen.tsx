"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlobalLogo } from "./GlobalLogo";
import { useLogo } from "@/context/LogoContext";

export function SplashScreen() {
    const { isSplashComplete, setSplashComplete } = useLogo();
    const [phase, setPhase] = useState<"start" | "construction" | "solid" | "transition">("start");

    useEffect(() => {
        // Phase 1: Start (brief delay)
        const t1 = setTimeout(() => setPhase("construction"), 100);

        // Phase 2: Construction (1.1s)
        const t2 = setTimeout(() => setPhase("solid"), 1200);

        // Phase 3: Hold solid (0.3s)
        const t3 = setTimeout(() => setPhase("transition"), 1500);

        // Phase 4: Finalize splash
        const t4 = setTimeout(() => {
            setSplashComplete(true);
        }, 2100); // 1.5s + 0.6s transition

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
        };
    }, [setSplashComplete]);

    return (
        <AnimatePresence>
            {!isSplashComplete && (
                <motion.div
                    key="splash-screen"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transitionEnd: { display: "none" } }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center overflow-hidden pointer-events-auto"
                >
                    {/* Architectural Blueprint HUD Animation */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                        {/* Blueprint Container Matches Logo Aspect Ratio 422x396 */}
                        <div className="relative w-[50vh] aspect-[422/396]">
                            <svg className="absolute inset-[0] w-full h-full overflow-visible" viewBox="0 0 422 396">
                                <AnimatePresence>
                                    {phase === "construction" && (
                                        <motion.g
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            stroke="rgba(255, 255, 255, 0.4)"
                                            strokeWidth="1"
                                            fill="none"
                                            className="mix-blend-screen"
                                        >
                                            {/* Center Crosshairs */}
                                            <motion.path
                                                d="M 211 -100 L 211 496 M -100 198 L 522 198"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 0.15 }}
                                                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                                            />

                                            {/* Outer Bounding Box */}
                                            <motion.rect
                                                x="0" y="0" width="422" height="396"
                                                strokeDasharray="4 4"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 0.2 }}
                                                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                            />

                                            {/* Corner Markers (Top Left) */}
                                            <motion.path
                                                d="M -15 -15 L 0 -15 L 0 0"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 0.4 }}
                                                transition={{ duration: 0.5, delay: 0.4 }}
                                            />
                                            {/* Corner Markers (Top Right) */}
                                            <motion.path
                                                d="M 437 -15 L 422 -15 L 422 0"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 0.4 }}
                                                transition={{ duration: 0.5, delay: 0.5 }}
                                            />
                                            {/* Corner Markers (Bottom Right) */}
                                            <motion.path
                                                d="M 437 411 L 422 411 L 422 396"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 0.4 }}
                                                transition={{ duration: 0.5, delay: 0.6 }}
                                            />
                                            {/* Corner Markers (Bottom Left) */}
                                            <motion.path
                                                d="M -15 411 L 0 411 L 0 396"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 0.4 }}
                                                transition={{ duration: 0.5, delay: 0.7 }}
                                            />

                                            {/* Inner Guides for "A-S" monogram shape */}
                                            <motion.path
                                                // Main upward and downward bounding angles
                                                d="M 211 50 L 50 350 M 211 50 L 372 350 M 120 180 L 300 180 M 120 280 L 300 280 M 211 50 L 211 350"
                                                initial={{ pathLength: 0, opacity: 0 }}
                                                animate={{ pathLength: 1, opacity: 0.1 }}
                                                transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                                            />
                                        </motion.g>
                                    )}
                                </AnimatePresence>
                            </svg>
                        </div>
                    </div>

                    <div className="relative z-10 flex items-center justify-center pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            animate={{ opacity: phase === "solid" || phase === "transition" ? 1 : 0, filter: phase === "solid" || phase === "transition" ? "blur(0px)" : "blur(10px)" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="w-[50vh] aspect-[422/396]"
                        >
                            <GlobalLogo className="w-full h-full" priority />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

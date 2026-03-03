"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlobalLogo } from "./GlobalLogo";
import { useLogo } from "@/context/LogoContext";

export function SplashScreen() {
    const { isSplashComplete, setSplashComplete } = useLogo();
    const [phase, setPhase] = useState<"hidden" | "visible">("hidden");

    useEffect(() => {
        // Phase 1: Smooth fade in (0.2s delay to ensure load)
        const t1 = setTimeout(() => setPhase("visible"), 200);

        // Phase 2: Finalize splash and fade out
        const t2 = setTimeout(() => {
            setSplashComplete(true);
        }, 1200); // Wait 1s total before completing

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [setSplashComplete]);

    return (
        <AnimatePresence>
            {!isSplashComplete && (
                <motion.div
                    key="splash-screen"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transitionEnd: { display: "none" } }}
                    transition={{ duration: 0.8, ease: "easeInOut" }} // Slower fade out of the black background
                    className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center overflow-hidden pointer-events-auto"
                >
                    <div className="relative z-10 flex items-center justify-center pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{
                                opacity: phase === "visible" ? 1 : 0,
                                scale: phase === "visible" ? 1 : 0.95
                            }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Elegant, faster ease-out scale/fade
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

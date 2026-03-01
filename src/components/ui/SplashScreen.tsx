"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoAnimation } from "./LogoAnimation";
import { useLogo } from "@/context/LogoContext";

export function SplashScreen() {
    const { isSplashComplete, setSplashComplete } = useLogo();

    useEffect(() => {
        // Construction takes 1.2s
        // We stay centered for 0.3s after completion
        // Total time before transition: 1.5s
        const timer = setTimeout(() => {
            setSplashComplete(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, [setSplashComplete]);

    return (
        <AnimatePresence>
            {!isSplashComplete && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
                >
                    <LogoAnimation isSplash={true} />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

"use client";

import React from "react";
import { motion } from "framer-motion";

import { getAssetPath } from "@/lib/utils";

interface GlobalLogoProps {
    className?: string;
}

export function GlobalLogo({ className = "" }: GlobalLogoProps) {
    return (
        <motion.div
            layoutId="main-logo"
            transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }}
            className={`relative flex items-center justify-center ${className}`}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                {/* 
                  We use mask-image to clip the background to the shape of the SVG logo.
                  The background itself is a complex linear-gradient simulating brushed metal/silver.
                */}
                <div
                    className="w-full h-full"
                    style={{
                        // Standard & Webkit mask properties
                        WebkitMaskImage: `url('${getAssetPath("/images/Logo.svg")}')`,
                        maskImage: `url('${getAssetPath("/images/Logo.svg")}')`,
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",

                        // Metallic Gradient Background
                        background: "linear-gradient(135deg, #f5f5f5 0%, #c0c0c0 25%, #808080 50%, #e6e6e6 75%, #ffffff 100%)",
                        backgroundSize: "200% 200%",

                        // Optional subtle drop-shadow to give it depth
                        filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.5))"
                    }}
                />

                {/* 
                  Optional: Add a subtle animated shimmer over the logo.
                  This overlay is also masked so the shimmer only appears on the logo itself.
                */}
                <motion.div
                    className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-50"
                    style={{
                        WebkitMaskImage: `url('${getAssetPath("/images/Logo.svg")}')`,
                        maskImage: `url('${getAssetPath("/images/Logo.svg")}')`,
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.8) 25%, transparent 30%)",
                        backgroundSize: "200% 100%",
                    }}
                    animate={{
                        backgroundPosition: ["200% 0", "-200% 0"],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 6,
                        ease: "linear",
                    }}
                />
            </div>
        </motion.div>
    );
}

"use client";

import React from "react";
import { motion } from "framer-motion";

export function LogoAnimation({ isSplash = false }: { isSplash?: boolean }) {
    // Elegant, smooth timing configuration
    const bezier1: [number, number, number, number] = [0.16, 1, 0.3, 1];
    const bezier2: [number, number, number, number] = [0.25, 1, 0.5, 1];
    const transitionGrid = { duration: 1, ease: bezier1 };
    const transitionDraw = { duration: 1.2, ease: bezier2, delay: isSplash ? 0.1 : 0 };
    const transitionFade = { duration: 0.8, ease: "easeOut" as const, delay: isSplash ? 1.4 : 0 };

    return (
        <motion.div
            layoutId="logo-container"
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className={`relative flex items-center ${isSplash ? "h-[60vh] w-[60vh]" : "w-12 h-12 -ml-2"}`}
        >
            <svg
                viewBox="0 0 100 100"
                className="w-full h-full overflow-visible"
                preserveAspectRatio="xMidYMid meet"
            >
                {/* 1) Subtle Blueprint Grid */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.08, 0] }}
                    transition={{ duration: 3.5, times: [0, 0.2, 1], ease: "easeInOut" }}
                    stroke="white"
                    strokeWidth="0.5"
                >
                    {/* Vertical Lines */}
                    <line x1="10" y1="-20" x2="10" y2="120" />
                    <line x1="30" y1="-20" x2="30" y2="120" />
                    <line x1="50" y1="-20" x2="50" y2="120" />
                    <line x1="70" y1="-20" x2="70" y2="120" />
                    <line x1="90" y1="-20" x2="90" y2="120" />
                    {/* Horizontal Lines */}
                    <line x1="-20" y1="15" x2="120" y2="15" />
                    <line x1="-20" y1="35" x2="120" y2="35" />
                    <line x1="-20" y1="55" x2="120" y2="55" />
                    <line x1="-20" y1="75" x2="120" y2="75" />
                    <line x1="-20" y1="95" x2="120" y2="95" />
                    {/* Architectural Diagonals */}
                    <line x1="50" y1="-10" x2="2" y2="110" />
                    <line x1="50" y1="-10" x2="98" y2="110" />
                    <line x1="-10" y1="0" x2="110" y2="100" />
                </motion.g>

                {/* 2) Grid Highlight / Emphasis */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.4, 0] }}
                    transition={{ duration: 2, delay: 0.5, times: [0, 0.5, 1], ease: "easeInOut" }}
                    stroke="#ffffff"
                    strokeWidth="1"
                >
                    <line x1="50" y1="15" x2="18" y2="95" />
                    <line x1="50" y1="15" x2="82" y2="95" />
                    <line x1="34" y1="55" x2="66" y2="55" />
                </motion.g>

                {/* 3) Exact ASHA Monogram Construction */}
                <motion.g
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="0"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    animate={{ strokeWidth: [2, 2, 0] }}
                    transition={transitionFade}
                >
                    {/* Outer A structure */}
                    <motion.path
                        d="M 50 15 L 18 95 L 30 95 L 50 45 L 70 95 L 82 95 Z"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={transitionDraw}
                    />

                    {/* Intersecting S Shape */}
                    <motion.path
                        d="M 62 45 L 38 45 L 30 65 L 70 65 L 62 85 L 38 85"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ ...transitionDraw, delay: 1.4 }}
                    />
                </motion.g>

                {/* 4) Final Solid Resolve */}
                <motion.g
                    initial={{ fillOpacity: 0 }}
                    animate={{ fillOpacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
                    fill="#ffffff"
                >
                    {/* The resulting boolean paths of the A-S monogram */}
                    {/* Left Leg Base */}
                    <polygon points="18,95 30,95 34,85 22,85" />
                    {/* Right Leg Base */}
                    <polygon points="82,95 70,95 66,85 78,85" />
                    {/* Top Apex */}
                    <polygon points="50,15 38,45 62,45" />
                    {/* Middle Crossbar / Center of S */}
                    <polygon points="30,65 70,65 66,75 34,75" />
                    {/* Connecting Slopes for S */}
                    <polygon points="34,65 30,75 26,65" />
                    <polygon points="66,65 70,55 74,65" />
                    <polygon points="62,45 66,55 54,55" />
                    <polygon points="38,45 34,55 46,55" />
                </motion.g>
            </svg>

            {/* 5) Text Reveal */}
            <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: isSplash ? 1.5 : 0, ease: "easeOut" }}
                className={`text-2xl font-extrabold tracking-tighter text-white whitespace-nowrap ${isSplash ? "ml-8" : "ml-4"}`}
            >
                ASHA.
            </motion.span>
        </motion.div>
    );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { getAssetPath } from "@/lib/utils";

interface GlobalLogoProps {
    className?: string;
    priority?: boolean;
}

export function GlobalLogo({ className = "", priority = false }: GlobalLogoProps) {
    return (
        <motion.div
            layoutId="main-logo"
            transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }}
            className={`relative flex items-center justify-center ${className}`}
        >
            <div className="relative w-full h-full">
                <Image
                    src={getAssetPath("/images/Logo.svg")}
                    alt="Logo"
                    fill
                    priority={priority}
                    className="object-contain"
                />
            </div>
        </motion.div>
    );
}

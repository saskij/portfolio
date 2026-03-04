"use client";

import React from "react";

import { getAssetPath } from "@/lib/utils";

interface GlobalLogoProps {
    className?: string;
}

export function GlobalLogo({ className = "" }: GlobalLogoProps) {
    return (
        <div
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
                  Shimmer overlay — uses pure CSS animation for GPU compositing.
                  Masked to only appear on the logo shape.
                */}
                <div
                    className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-50 logo-shimmer"
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
                />
            </div>
        </div>
    );
}

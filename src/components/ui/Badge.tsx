"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface BadgeProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                className={cn(
                    "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 transition-colors backdrop-blur-md",
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Badge.displayName = "Badge";

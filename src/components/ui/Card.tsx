"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    gradient?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, gradient = false, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={cn(
                    "rounded-2xl border border-white/10 p-6 md:p-8",
                    gradient ? "glass-card" : "bg-[#111111]",
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Card.displayName = "Card";

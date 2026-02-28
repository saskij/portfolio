"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        // Force scroll to top on refresh/mount
        window.scrollTo(0, 0);

        // Also handle Cases where browser restores scroll position
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        return () => {
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'auto';
            }
        };
    }, [pathname]);

    return null;
}

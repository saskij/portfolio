"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type LogoContextType = {
    isSplashComplete: boolean;
    setSplashComplete: (complete: boolean) => void;
};

const LogoContext = createContext<LogoContextType | undefined>(undefined);

export function LogoProvider({ children }: { children: React.ReactNode }) {
    const [isSplashComplete, setIsSplashComplete] = useState(false);

    return (
        <LogoContext.Provider value={{ isSplashComplete, setSplashComplete: setIsSplashComplete }}>
            {children}
        </LogoContext.Provider>
    );
}

export function useLogo() {
    const context = useContext(LogoContext);
    if (!context) {
        throw new Error("useLogo must be used within a LogoProvider");
    }
    return context;
}

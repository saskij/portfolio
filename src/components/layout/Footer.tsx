import * as React from "react";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { GlobalLogo } from "@/components/ui/GlobalLogo";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black py-8 md:py-8">
            <div className="container mx-auto px-6 md:px-12 flex flex-col gap-3 md:gap-4">
                {/* Top Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Left: Logo and Description */}
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                        <Link href="#hero" className="z-[60] relative flex items-center group h-[64px] w-auto aspect-[422/396]">
                            <GlobalLogo className="w-full h-full" />
                        </Link>
                        <p className="text-[14px] leading-tight text-zinc-400/90 font-medium tracking-tight text-center md:text-left max-w-md">
                            Designing and building premium digital experiences for forward-thinking brands.
                        </p>
                    </div>

                    {/* Right: Social Icons */}
                    <div className="flex items-center gap-3">
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                            <Instagram className="w-[18px] h-[18px]" strokeWidth={1.5} />
                        </a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                            <Facebook className="w-[18px] h-[18px]" strokeWidth={1.5} />
                        </a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                            <Linkedin className="w-[18px] h-[18px]" strokeWidth={1.5} />
                        </a>
                        <a href="mailto:hello@example.com" className="text-zinc-500 hover:text-white transition-colors">
                            <Mail className="w-[18px] h-[18px]" strokeWidth={1.5} />
                        </a>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-2 gap-3 mt-2">
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-[11px] text-zinc-500 font-medium">
                        <p className="text-zinc-600">© {currentYear} Asha. All rights reserved.</p>
                        <div className="flex items-center gap-3 md:gap-4">
                            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
                            <Link href="/sitemap" className="hover:text-zinc-300 transition-colors">Site Map</Link>
                        </div>
                    </div>
                    <p className="text-[11px] text-zinc-600 font-medium">
                        Built with Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}

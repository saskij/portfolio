import * as React from "react";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { GlobalLogo } from "@/components/ui/GlobalLogo";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 bg-black py-12 md:py-16">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link href="#hero" className="z-[60] relative flex items-center group h-[180px] w-auto aspect-[422/396]">
                        <GlobalLogo className="w-full h-full" />
                    </Link>
                    <p className="text-sm text-zinc-500 text-center md:text-left max-w-xs">
                        Designing and building premium digital experiences for forward-thinking brands.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <a href="#" className="p-2 text-zinc-400 hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 text-zinc-400 hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 text-zinc-400 hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:hello@example.com" className="p-2 text-zinc-400 hover:text-white transition-colors bg-white/5 rounded-full hover:bg-white/10">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-xs text-zinc-600">
                    © {currentYear} Asha. All rights reserved.
                </p>
                <p className="text-xs text-zinc-600 flex items-center gap-1">
                    Built with Next.js & Tailwind CSS
                </p>
            </div>
        </footer>
    );
}

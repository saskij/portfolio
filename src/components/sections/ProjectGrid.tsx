"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export function ProjectGrid() {
    const gridItems = [
        {
            id: 1,
            title: "Cool Mountain Logistics",
            description: "Premium logistics portal featuring professional driver recruitment and complex freight solutions.",
            techStack: ["Next.js", "React", "Tailwind CSS"],
            image: "/images/projects/coolmountain.png",
            link: "https://saskij.github.io/Coolmountain/"
        },
        {
            id: 2,
            title: "New Path Logistics",
            description: "Modern trucking operations website with clear performance metrics and service overviews.",
            techStack: ["Next.js", "Framer Motion", "Tailwind CSS"],
            image: "/images/projects/newpath.png",
            link: "https://www.newpathlogisticllc.com"
        },
        {
            id: 3,
            title: "Honor Auto Detailing",
            description: "High-end auto detailing service platform with a dark, premium aesthetic.",
            techStack: ["React", "Tailwind CSS", "Vercel"],
            image: "/images/projects/honor.png",
            link: "https://www.honorautodetailing.com"
        },
        {
            id: 4,
            title: "Revive & Shine",
            description: "Upholstery and interior cleaning showcase with dynamic pricing and service sections.",
            techStack: ["Next.js", "Tailwind CSS", "Vercel"],
            image: "/images/projects/rsm.png",
            link: "https://rsmidaho.com"
        }
    ];

    return (
        <section id="portfolio" className="py-32 bg-black border-t border-white/5 relative">
            <div className="container px-6 md:px-12 mx-auto max-w-7xl">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-3xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 text-white leading-tight"
                        >
                            Selected <span className="text-zinc-600 block sm:inline">Case Studies.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-zinc-400 font-medium leading-relaxed max-w-2xl"
                        >
                            A curated showcase of recent high-end web implementations, focusing on aesthetic precision, modern architecture, and performance.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                    {gridItems.map((item, index) => (
                        <motion.a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                            className="group flex flex-col gap-8 outline-none"
                        >
                            {/* Image Container with Subtle Depth */}
                            <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl shadow-black/80">
                                {/* Subtle Inner Glow Overlay for Premium Feel */}
                                <div className="absolute inset-0 border border-white/10 rounded-[24px] z-20 pointer-events-none mix-blend-overlay" />

                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover group-hover:scale-[1.03] transition-transform duration-[800ms] ease-[0.21,0.47,0.32,0.98] transform-gpu will-change-transform z-10"
                                />
                            </div>

                            {/* Content Details */}
                            <div className="flex flex-col gap-4 px-2">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-3xl font-bold text-white group-hover:text-zinc-300 transition-colors duration-300 tracking-tight">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-zinc-400 group-hover:text-white transition-colors duration-300 mt-1.5 shrink-0">
                                        <span className="text-sm font-semibold tracking-wide uppercase">Live Site</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </div>
                                </div>
                                <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                                    {item.description}
                                </p>
                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                    {item.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-4 py-1.5 text-xs font-semibold tracking-wide text-zinc-300 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

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
                            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                        >
                            Selected <span className="text-zinc-500">Works.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-zinc-400"
                        >
                            A showcase of recent projects bridging complex engineering and premium design.
                        </motion.p>
                    </div>
                </div>

                <div className="flex flex-col gap-32 md:gap-48">
                    {gridItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-20 items-center`}
                        >
                            {/* Image Side - 60% width on Desktop */}
                            <motion.a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.01 }}
                                className="w-full md:w-[60%] group relative aspect-[16/10] rounded-[24px] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl transition-all duration-500"
                            >
                                <div className="absolute inset-0 border border-white/10 rounded-[24px] z-20 pointer-events-none mix-blend-overlay" />
                                <Image
                                    src={getAssetPath(item.image)}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                    className="object-cover group-hover:scale-[1.03] transition-transform duration-[1000ms] ease-[0.21,0.47,0.32,0.98] transform-gpu will-change-transform z-10"
                                />
                            </motion.a>

                            {/* Content Side - 40% width on Desktop */}
                            <div className="w-full md:w-[40%] flex flex-col gap-6 md:gap-8">
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                                        {item.title}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-2 mt-2">
                                        {item.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-1.5 text-[10px] md:text-xs font-bold tracking-widest text-zinc-400 uppercase bg-white/5 border border-white/10 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl">
                                    {item.description}
                                </p>

                                <div className="pt-4">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 text-white font-semibold group/link border-b border-white/20 pb-2 hover:border-white transition-all duration-300"
                                    >
                                        <span className="text-lg">Explory Case Study</span>
                                        <ExternalLink className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

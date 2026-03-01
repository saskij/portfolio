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
            problem: "The company needed a professional way to attract drivers and manage freight inquiries without a complex backend.",
            solution: "I built a clean, dark-themed landing page that highlights their services and provides a direct intake form.",
            technology: "Next.js and Framer Motion for subtle transitions that keep the focus on the content.",
            result: "Improved brand credibility and a simplified driver application process.",
            techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
            image: "/images/projects/coolmountain.png",
            link: "https://saskij.github.io/Coolmountain/"
        },
        {
            id: 2,
            title: "New Path Logistics",
            problem: "A startup in a competitive freight market needed to clearly communicate their operational metrics and reliability.",
            solution: "I designed a performance-focused site with a metric dashboard view to showcase their efficiency.",
            technology: "Next.js and Tailwind CSS prioritized fast load times and a consistent mobile-first experience.",
            result: "A reliable digital introduction for new logistics partners.",
            techStack: ["Next.js", "React", "Framer Motion", "Vercel"],
            image: "/images/projects/newpath.png",
            link: "https://www.newpathlogisticllc.com"
        },
        {
            id: 3,
            title: "Honor Auto Detailing",
            problem: "A luxury detailing service required a portfolio that reflected their high level of craft and attention to detail.",
            solution: "I created a cinematic, dark-themed gallery and service structure mirroring the premium feel of their work.",
            technology: "Built with Next.js, focusing on custom CSS animations for a polished user journey.",
            result: "Successfully guided customers from viewing work to requesting specialized quotes.",
            techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "Stripe API"],
            image: "/images/projects/honor.png",
            link: "https://www.honorautodetailing.com"
        },
        {
            id: 4,
            title: "Revive & Shine",
            problem: "A service business struggled to manage varied upholstery cleaning tiers and pricing clarity on a single page.",
            solution: "I developed an interactive service catalog that categorizes their work and clarifies pricing.",
            technology: "React and Lucide icons provided a functional, easy-to-navigate interface for mobile users.",
            result: "Reduced customer confusion and provided a clear source of truth for service levels.",
            techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
            image: "/images/projects/rsm.png",
            link: "https://rsmidaho.com"
        },
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
                            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
                        >
                            Selected <span className="text-zinc-500">Works.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-base md:text-lg text-zinc-400"
                        >
                            A showcase of recent projects bridging complex engineering and premium design.
                        </motion.p>
                    </div>
                </div>

                <div className="flex flex-col gap-48 md:gap-72">
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
                                className="w-full md:w-[60%] group relative aspect-[16/10] rounded-[24px] overflow-hidden bg-zinc-900 border border-white/5 transition-all duration-500"
                            >
                                <Image
                                    src={getAssetPath(item.image)}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out transform-gpu will-change-transform z-10"
                                />
                            </motion.a>

                            {/* Content Side - 40% width on Desktop */}
                            <div className="w-full md:w-[40%] flex flex-col gap-6 md:gap-8">
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.05]">
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

                                <div className="flex flex-col gap-4 text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
                                    <p><strong className="text-zinc-200">Problem:</strong> {item.problem}</p>
                                    <p><strong className="text-zinc-200">Solution:</strong> {item.solution}</p>
                                    <p><strong className="text-zinc-200">Tech:</strong> {item.technology}</p>
                                    <p><strong className="text-zinc-200">Result:</strong> {item.result}</p>
                                </div>

                                <div className="pt-4">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 text-white font-semibold group/link border-b border-white/20 pb-2 hover:border-white transition-all duration-300"
                                    >
                                        <span className="text-lg">Explore Case Study</span>
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

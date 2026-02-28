"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function Projects() {
    const projects = [
        {
            title: "Aura FinTech",
            description: "A comprehensive financial dashboard merging real-time data visualization with a sleek, intuitive dark-mode interface.",
            tech: ["Next.js", "Tailwind CSS", "Reagents", "Supabase"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Lumine E-Commerce",
            description: "A premium headless e-commerce experience optimized for high conversion rates and blazing fast performance.",
            tech: ["React", "Shopify Hydrogen", "Framer Motion", "Stripe"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
            liveUrl: "#",
            githubUrl: "#"
        },
        {
            title: "Nexus Platform",
            description: "SaaS platform architecture designed for enterprise scaling, featuring advanced role-based access control and analytics.",
            tech: ["TypeScript", "Node.js", "PostgreSQL", "Docker"],
            image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1000",
            liveUrl: "#",
            githubUrl: "#"
        }
    ];

    return (
        <section id="work" className="py-24 md:py-32 bg-black/50 border-t border-white/5">
            <div className="container px-6 md:px-12 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
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
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-white hover:text-zinc-300 transition-colors flex items-center gap-2 pb-1 border-b border-white/20 hover:border-white"
                    >
                        View Full Archive <ExternalLink className="w-4 h-4" />
                    </motion.a>
                </div>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
                        >
                            {/* Image Column */}
                            <div className="w-full md:w-3/5 group relative rounded-2xl overflow-hidden aspect-video bg-zinc-900 border border-white/10">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu will-change-transform"
                                />
                            </div>

                            {/* Content Column */}
                            <div className="w-full md:w-2/5 flex flex-col justify-center">
                                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                                <p className="text-zinc-400 mb-6 text-lg leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((tech, i) => (
                                        <Badge key={i} className="bg-white/5 border-white/10">{tech}</Badge>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4">
                                    <a href={project.liveUrl} className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                        <span className="sr-only">Live Demo</span>
                                    </a>
                                    <a href={project.githubUrl} className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:bg-white hover:text-black transition-colors">
                                        <Github className="w-5 h-5" />
                                        <span className="sr-only">Source Code</span>
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

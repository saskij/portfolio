"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Layers, Terminal, PenTool, Database } from "lucide-react";

export function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const skillCategories = [
        {
            title: "Frontend Engineering",
            icon: <Terminal className="w-6 h-6 text-zinc-400" />,
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "Zustand"]
        },
        {
            title: "UI/UX Design",
            icon: <PenTool className="w-6 h-6 text-zinc-400" />,
            skills: ["Figma", "Design Systems", "Prototyping", "Wireframing", "Interaction Design", "Accessibility"]
        },
        {
            title: "Backend & Systems",
            icon: <Database className="w-6 h-6 text-zinc-400" />,
            skills: ["Node.js", "Express", "PostgreSQL", "Supabase", "Prisma", "REST APIs", "GraphQL"]
        },
        {
            title: "Architecture & Tools",
            icon: <Layers className="w-6 h-6 text-zinc-400" />,
            skills: ["Git", "Docker", "CI/CD", "Jest", "Cypress", "Performance Optimization", "SEO"]
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-black/50 relative">
            {/* Top Technical Divider */}
            <div className="absolute top-0 left-0 w-full flex justify-center">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />
                <div className="absolute top-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-zinc-500/40 to-transparent blur-[1px]" />
            </div>

            {/* Bottom Technical Divider */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-700/50 to-transparent" />
                <div className="absolute top-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-zinc-500/40 to-transparent blur-[1px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Technical Arsenal.
                    </motion.h2>
                    {/* Electric Blue Underline */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="w-24 h-[1px] bg-accent-blue shadow-[0_0_12px_rgba(58,109,255,0.8)] mx-auto mb-6"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-lg text-zinc-400"
                    >
                        A comprehensive toolkit designed for building scalable, high-performance applications from the ground up.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div key={index} variants={item}>
                            <Card className="h-full bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 border-white/5 hover:border-accent-blue/40 hover:shadow-[0_0_25px_rgba(58,109,255,0.15)] group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, sIndex) => (
                                        <Badge key={sIndex}>{skill}</Badge>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

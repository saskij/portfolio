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
            icon: <Terminal className="w-6 h-6 text-blue-400" />,
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux", "Zustand"]
        },
        {
            title: "UI/UX Design",
            icon: <PenTool className="w-6 h-6 text-purple-400" />,
            skills: ["Figma", "Design Systems", "Prototyping", "Wireframing", "Interaction Design", "Accessibility"]
        },
        {
            title: "Backend & Systems",
            icon: <Database className="w-6 h-6 text-green-400" />,
            skills: ["Node.js", "Express", "PostgreSQL", "Supabase", "Prisma", "REST APIs", "GraphQL"]
        },
        {
            title: "Architecture & Tools",
            icon: <Layers className="w-6 h-6 text-orange-400" />,
            skills: ["Git", "Docker", "CI/CD", "Jest", "Cypress", "Performance Optimization", "SEO"]
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-black/50 border-y border-white/5 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Technical Arsenal.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
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
                            <Card className="h-full bg-white/[0.02] hover:bg-white/[0.04] transition-colors border-white/5">
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

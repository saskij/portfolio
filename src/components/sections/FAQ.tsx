"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How long does it take to build a website?",
        answer: "Timelines depend on the complexity of the project. A single-page landing or portfolio typically takes 1-2 weeks. Complex web applications or corporate portals may require 4 to 8 weeks of development.",
    },
    {
        question: "What is the minimum budget to get started?",
        answer: "The minimum budget for developing a premium landing page starts at $1,000. This includes analysis, design, development, and basic analytics integration. The final cost is always calculated individually after the initial consultation.",
    },
    {
        question: "Do you only write code, or do you design as well?",
        answer: "I am a full-stack developer with a strong focus on UI/UX design (as you can see from this portfolio). I design the interface in Figma and then bring it to life in code, ensuring the final result perfectly matches the vision.",
    },
    {
        question: "Do you provide support after launch?",
        answer: "Yes, all projects come with a 1-month warranty period for fixing any bugs. We can also arrange for ongoing monthly technical support and further development of your project.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 relative bg-black overflow-hidden border-t border-white/5 border-b border-white/5">
            <div className="container px-6 md:px-12 mx-auto max-w-4xl relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                    >
                        Frequent <span className="text-zinc-500">Questions.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="text-lg text-zinc-400 max-w-2xl mx-auto"
                    >
                        Transparency is the foundation of my approach. Here are answers to the most common questions about the working process.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                                className={`border border-white/5 rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-zinc-900/40 border-white/10' : 'bg-transparent hover:bg-white/[0.02]'}`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none focus-visible:bg-white/5"
                                    aria-expanded={isOpen}
                                >
                                    <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-zinc-300'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`flex items-center justify-center w-8 h-8 rounded-full border border-white/10 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-white/5' : ''}`}>
                                        <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? 'text-white' : 'text-zinc-500'}`} />
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 md:p-8 pt-0 text-zinc-400 text-base md:text-lg leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

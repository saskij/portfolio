"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Сколько времени занимает создание сайта?",
        answer: "Сроки зависят от сложности проекта. Одностраничный лендинг или портфолио обычно занимает 1-2 недели. Сложные веб-приложения или корпоративные порталы могут потребовать от 4 до 8 недель разработки.",
    },
    {
        question: "Каков минимальный бюджет для старта?",
        answer: "Минимальный бюджет на разработку премиального лендинга начинается от $1000. В эту стоимость входит анализ, дизайн, верстка и интеграция базовых систем аналитики. Итоговая стоимость всегда рассчитывается индивидуально после первой консультации.",
    },
    {
        question: "Вы занимаетесь только кодом или дизайном тоже?",
        answer: "Я фулл-стек разработчик с сильным уклоном в UI/UX дизайн (как вы можете видеть по этому портфолио). Я проектирую интерфейс в Figma, а затем воплощаю его в код, обеспечивая полное соответствие конечного результата задумке.",
    },
    {
        question: "Обеспечиваете ли вы поддержку после запуска?",
        answer: "Да, на все проекты предоставляется гарантийный период 1 месяц для исправления любых багов. Также мы можем договориться о ежемесячной технической поддержке и развитии вашего проекта.",
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
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                    >
                        Frequent <span className="text-zinc-500">Questions.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-zinc-400 max-w-2xl mx-auto"
                    >
                        Прозрачность — основа моего подхода. Вот ответы на самые популярные вопросы о процессе работы.
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
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
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

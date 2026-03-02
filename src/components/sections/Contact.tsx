"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Contact() {
    return (
        <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="container px-6 md:px-12 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
                    >
                        <span className="block w-3 h-3 rounded-full bg-green-500 animate-pulse mx-auto mb-2" />
                        <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium">Accepting new projects</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        Let&apos;s talk about your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-500 text-zinc-500">next project.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl"
                    >
                        I help growing businesses build reliable and well-designed web applications. I&apos;m currently accepting new projects and typically respond to all inquiries within 24 hours.
                    </motion.p>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-full max-w-md space-y-4"
                        action="https://formsubmit.co/bstuashurov@gmail.com"
                        method="POST"
                    >
                        {/* Hidden fields for FormSubmit configuration */}
                        <input type="hidden" name="_subject" value="New Project Inquiry - Portfolio" />
                        <input type="hidden" name="_template" value="box" />

                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all focus:bg-white/10"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all focus:bg-white/10"
                                required
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Tell me about your project"
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all resize-none focus:bg-white/10"
                            required
                        ></textarea>
                        <Button type="submit" size="lg" className="w-full hover:scale-[1.02] transition-transform">
                            Start a Conversation
                        </Button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

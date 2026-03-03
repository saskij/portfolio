import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfService() {
    return (
        <>
            <Header />
            <main className="flex flex-col w-full text-white bg-black min-h-screen pt-32 pb-24">
                <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight">Terms of Service</h1>

                    <div className="prose prose-invert max-w-none text-zinc-400">
                        <p className="text-sm text-zinc-500 mb-8 border-b border-white/10 pb-4">Last Updated: March 2026</p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-medium text-white mb-4">1. Agreement to Terms</h2>
                            <p className="mb-4">
                                By viewing or using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-medium text-white mb-4">2. Intellectual Property Rights</h2>
                            <p className="mb-4">
                                Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site are owned or controlled by us, and are protected by copyright and trademark laws.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-medium text-white mb-4">3. User Representations</h2>
                            <p className="mb-4">
                                By using the Site, you represent and warrant that:
                            </p>
                            <ul className="list-disc pl-5 mb-4 space-y-2">
                                <li>All information you submit will be true, accurate, current, and complete.</li>
                                <li>You will maintain the accuracy of such information and promptly update it as necessary.</li>
                                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                                <li>You are not a minor in the jurisdiction in which you reside.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-medium text-white mb-4">4. Limitations</h2>
                            <p className="mb-4">
                                In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-medium text-white mb-4">5. Revisions and Errata</h2>
                            <p className="mb-4">
                                The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-medium text-white mb-4">6. Governing Law</h2>
                            <p className="mb-4">
                                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

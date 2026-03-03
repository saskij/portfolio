import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicy() {
    return (
        <>
            <Header />
            <main className="flex flex-col w-full text-white bg-black min-h-screen pt-32 pb-24">
                <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight">Privacy Policy</h1>

                    <div className="prose prose-invert max-w-none text-zinc-400">
                        <p className="text-sm text-zinc-500 mb-8 border-b border-white/10 pb-4">Last Updated: March 2026</p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-medium text-white mb-4">1. Introduction</h2>
                            <p className="mb-4">
                                We respect your privacy and are committed to protecting your personal data.
                                This privacy policy will inform you as to how we look after your personal data
                                when you visit our website and tell you about your privacy rights.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-medium text-white mb-4">2. The Data We Collect</h2>
                            <p className="mb-4">
                                We may collect, use, store and transfer different kinds of personal data about you
                                which we have grouped together as follows:
                            </p>
                            <ul className="list-disc pl-5 mb-4 space-y-2">
                                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                                <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                                <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-medium text-white mb-4">3. How We Use Your Data</h2>
                            <p className="mb-4">
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc pl-5 mb-4 space-y-2">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li>Where it is necessary for our legitimate interests and your interests do not override those interests.</li>
                                <li>Where we need to comply with a legal or regulatory obligation.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-medium text-white mb-4">4. Data Security</h2>
                            <p className="mb-4">
                                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-medium text-white mb-4">5. Contact Us</h2>
                            <p className="mb-4">
                                If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:hello@example.com" className="text-white underline hover:text-zinc-300">hello@example.com</a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

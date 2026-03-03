import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function SiteMap() {
    const sitemapLinks = [
        {
            category: "Main Pages",
            links: [
                { name: "Home", url: "/" },
            ]
        },
        {
            category: "Legal",
            links: [
                { name: "Privacy Policy", url: "/privacy" },
                { name: "Terms of Service", url: "/terms" },
            ]
        },
        {
            category: "Socials",
            links: [
                { name: "Instagram", url: "#" },
                { name: "Facebook", url: "#" },
                { name: "LinkedIn", url: "#" },
            ]
        }
    ];

    return (
        <>
            <Header />
            <main className="flex flex-col w-full text-white bg-black min-h-screen pt-32 pb-24">
                <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-semibold mb-12 tracking-tight">Site Map</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {sitemapLinks.map((section, index) => (
                            <div key={index} className="flex flex-col">
                                <h2 className="text-xl font-medium text-white mb-6 border-b border-white/10 pb-4">
                                    {section.category}
                                </h2>
                                <ul className="flex flex-col gap-4">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link
                                                href={link.url}
                                                className="text-zinc-400 hover:text-white transition-colors capitalize"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

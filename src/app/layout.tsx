import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { ScrollToTop } from "@/components/utils/ScrollToTop";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Portfolio | Developer & Designer",
  description: "A high-end portfolio showcasing technical depth, modern design, and problem-solving skills.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}

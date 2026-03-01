import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Process } from "@/components/sections/Process";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full text-white bg-black">
        <Hero />
        <About />
        <Skills />
        <Process />
        <ProjectGrid />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

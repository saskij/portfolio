import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Process } from "@/components/sections/Process";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="flex flex-col w-full text-white bg-black">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Process />
        <ProjectGrid />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Hobbies } from "@/components/Hobbies";
import { Links } from "@/components/Links";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-atmosphere flex min-h-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        {/* YOUR TURN: implement components/About.tsx */}
        <About />
        {/* YOUR TURN: implement components/ProjectCard.tsx (list is wired) */}
        <Projects />
        <Hobbies />
        <Links />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

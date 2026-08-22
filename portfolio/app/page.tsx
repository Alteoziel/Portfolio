import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { getProjects } from "@/lib/github";

export const revalidate = 3600;

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects projects={projects} />
        <About />
      </main>
      <SiteFooter />
    </>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { stacks, projects, socials } from "./data/data";

export default function Home() {
  return (
    <main className="bg-[#222831]">
      <Navbar/>
      <Hero />
      <TechStack stacks={stacks} />
      <Projects projects={projects} />
      <Contact />
      <Footer socials={socials} />
    </main>
  );
}

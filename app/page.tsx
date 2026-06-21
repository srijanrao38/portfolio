import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import CustomCursor from "@/app/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

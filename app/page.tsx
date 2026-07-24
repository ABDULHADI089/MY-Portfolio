import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AICVWork from "@/components/AICVWork";
import WebWork from "@/components/WebWork";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Mascot from "@/components/Mascot";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <AICVWork />
      <WebWork />
      <Skills />
      <Contact />
      <Footer />
      <Mascot />
    </main>
  );
}

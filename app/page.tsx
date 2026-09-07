import Preloader from "@/components/Preloader";
import Reveals from "@/components/Reveals";
import Ambient from "@/components/Ambient";
import DotNav from "@/components/DotNav";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Process from "@/components/Process";
import Toolkit from "@/components/Toolkit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>

      <Preloader />
      <Reveals />
      <Ambient />
      <DotNav />
      <Nav />

      <Hero />
      <Ticker />

      <main>
        <section style={{ paddingBlock: "clamp(46px,7vw,80px) 0" }}>
          <div className="wrap">
            <Stats />
          </div>
        </section>

        <About />
        <Work />
        <Experience />
        <Process />
        <Toolkit />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

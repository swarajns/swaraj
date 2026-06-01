import { Hero }      from "@/components/sections/Hero";
import { WhoIAm }   from "@/components/sections/WhoIAm";
import { About }    from "@/components/sections/About";
import { Work }     from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Skills }   from "@/components/sections/Skills";
import { Contact }  from "@/components/sections/Contact";
import { Navbar }   from "@/components/Navbar";
import { Footer }   from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoIAm />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
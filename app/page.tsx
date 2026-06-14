import About from '@/components/sections/About/About';
import Bootcamp from '@/components/sections/Bootcamp/Bootcamp';
import CaseStudy from '@/components/sections/CaseStudy/CaseStudy';
import Experience from '@/components/sections/Experience/Experience';
import Hero from '@/components/sections/Hero/Hero';
import Skills from '@/components/sections/Skills/Skills';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CaseStudy />
      <Bootcamp />
      <Experience />
      <Skills />
    </>
  );
}

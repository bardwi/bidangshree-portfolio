import Hero from '@/components/sections/Hero/Hero';
import About from '@/components/sections/About/About';
import CaseStudy from '@/components/sections/CaseStudy/CaseStudy';
import Bootcamp from '@/components/sections/Bootcamp/Bootcamp';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CaseStudy />
      <Bootcamp />
    </>
  );
}

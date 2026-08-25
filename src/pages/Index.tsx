import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import SectionTOC from "@/components/SectionTOC";
import SectionReveal from "@/components/SectionReveal";
import BackgroundScene from "@/components/BackgroundScene";

const Index = () => {
  return (
    <div className="min-h-screen">
      <BackgroundScene />
      <ScrollProgress />
      <SectionTOC />
      <Navigation />
      <main>
        <Hero />
        <SectionReveal><About /></SectionReveal>
        <SectionReveal><TechStack /></SectionReveal>
        <SectionReveal><Experience /></SectionReveal>
        <SectionReveal><Projects /></SectionReveal>
        <SectionReveal><Contact /></SectionReveal>
      </main>
    </div>
  );
};

export default Index;
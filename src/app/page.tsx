import Hero from "../components/HeroSection/Hero";
import Skills from "@/components/SkillsSection/skills";
import AboutSection from "@/components/AboutSection/AboutSection";
import SelectedProjectsSection from "@/components/SelectedProjectsSection/SelectedProjectsSection";
import Experience from "@/components/ExperienceSection/Experience";
import Approach from "@/components/ApproachSection/Approach";
import ContactSection from "@/components/ContactSection/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SelectedProjectsSection />
      <Experience />
      <Skills />
      <Approach />
      <ContactSection />
    </>
  );
}

import { ContactSection } from "../sections/ContactSection";
import { EducationSection } from "../sections/EducationSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import HeroSection from "../sections/HeroSection";
import { SkillsSection } from "../sections/SkillsSection";
import { TestimonialsSecion } from "../sections/TestimonialsSection";
import { AboutSection } from "./AboutSection";
import { ProjectsSection } from "../sections/ProjectsSection";

async function PortfolioContent() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TestimonialsSecion />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}

export default PortfolioContent;

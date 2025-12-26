import { ContactSection } from "../sections/ContactSection";
import { EducationSection } from "../sections/EducationSection";
import { ExperienceSection } from "../sections/ExperienceSection";
import HeroSection from "../sections/HeroSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { SkillsSection } from "../sections/SkillsSection";
import { TestimonialsSecion } from "../sections/TestimonialsSection";
import { AboutSection } from "./AboutSection";

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

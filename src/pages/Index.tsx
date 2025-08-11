import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { EducationSection } from "@/components/portfolio/EducationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
    </div>
  );
};

export default Index;

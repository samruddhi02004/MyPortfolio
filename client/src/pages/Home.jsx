import { Navbar } from "../components/layout/Navbar";
import { StarBackground } from "@/components/common/StarBackground";
import { HeroSection } from "../sections/HeroSection";
import { AboutSection } from "../sections/AboutSection";
import { SkillsSection } from "../sections/SkillsSection";
import { StatsSection } from "../sections/StatsSection";
import { ProjectsSection } from "../sections/ProjectsSection";
import { ContactSection } from "../sections/ContactSection";
import { Footer } from "../components/layout/Footer";
import { TestimonialSection } from "../sections/Testimonial";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <StatsSection />
        <ProjectsSection />
        <TestimonialSection />
        <ContactSection />
        
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

import AboutSection from "@/components/home/AboutSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import HeroSection from "@/components/home/HeroSection";
import LogoSlider from "@/components/home/LogoSlider";
import ProjectsSection from "@/components/home/ProjectsSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">      
      <HeroSection />
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-navy/50 z-10" /> {/* Overlay */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src="/assets/videos/company.mp4"
        />
      </div>
      <ExperienceSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <LogoSlider />
    </div>
  );
}
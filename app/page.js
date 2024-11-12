import ExperienceSection from "@/components/home/ExperienceSection";
import HeroSection from "@/components/home/HeroSection";
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
        >
          <source src="/assets/videos/TWilson May Mash-Up.webm" type="video/mp4" />
        </video>
      </div>
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
    </div>
  );
}
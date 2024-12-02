import AboutSection from "@/components/home/AboutSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import HeroSection from "@/components/home/HeroSection";
import LogoSlider from "@/components/home/LogoSlider";
import ProjectsSection from "@/components/home/ProjectsSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SideNavigation from "@/components/SideNavigation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <SideNavigation />
      <HeroSection />
      {/* Responsive Background Video/Image */}
      <div className="fixed inset-0 z-0">
        {/* Overlay - stays consistent across all devices */}
        <div className="absolute inset-0 bg-navy/50 z-10" />

        {/* Background Video - Hidden on Mobile */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/poster-image.webp"
          className="hidden md:block w-full h-full object-cover"
          src="/assets/videos/company.mp4"
        />

        {/* Background Image - Visible only on Mobile */}
        <div className="block md:hidden w-full h-full">
          <Image
            src="/assets/images/poster-image.webp"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 1px"
            className="object-cover object-center"
            loading="lazy"
            quality={75}
          />
        </div>
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

"use client"
import AboutSection from "@/components/home/AboutSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import HeroSection from "@/components/home/HeroSection";
import LogoSlider from "@/components/home/LogoSlider";
import ProjectsSection from "@/components/home/ProjectsSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SideNavigation from "@/components/SideNavigation";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  
  // Your Cloudinary video URL
  const CLOUDINARY_URL = "https://res.cloudinary.com/dt7jcrlid/video/upload/v1/company_mkynek.webm";
  
  // Optimized URL with quality and format parameters
  const OPTIMIZED_URL = `${CLOUDINARY_URL.replace('/upload/', '/upload/q_auto,f_auto/')}`;
  
  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Run on initial load
    checkMobile();
    
    // Set up listener for window resize
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  useEffect(() => {
    // Only set up video loading if not on mobile
    if (!isMobile) {
      // Implement lazy loading with Intersection Observer
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && videoRef.current) {
            // Only start loading the video when it's in viewport
            videoRef.current.src = OPTIMIZED_URL;
            videoRef.current.load();
            observer.unobserve(entry.target);
          }
        });
      }, options);
      
      if (videoRef.current) {
        observer.observe(videoRef.current);
      }
      
      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
      };
    }
  }, [isMobile, OPTIMIZED_URL]);

  return (
    <div className="relative min-h-screen">
      <SideNavigation />
      <HeroSection />
      
      {/* Responsive Background Video/Image */}
      <div className="fixed inset-0 z-0">
        {/* Overlay - stays consistent across all devices */}
        <div className="absolute inset-0 bg-navy/50 z-10" />

        {/* Poster image - always visible on mobile, or as fallback on desktop until video loads */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/poster-image.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            style={{
              objectFit: 'cover',
              display: (!isMobile && videoLoaded) ? 'none' : 'block'
            }}
          />
        </div>
        
        {/* Video - only rendered for non-mobile devices */}
        {!isMobile && (
          <div className="absolute inset-0 z-1">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              poster="/assets/images/poster-image.webp"
              loading="lazy"
              onLoadedData={() => setVideoLoaded(true)}
            />
          </div>
        )}
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
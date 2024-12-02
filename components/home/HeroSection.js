"use client";
import React, { useState, useEffect } from "react";
import { Facebook, Youtube, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroContent = [
    {
      welcome: "Welcome to T.Wilson Builders",
      title: "Quality Building Solutions for Your Dream Home",
    },
    {
      welcome: "Expert Building Services",
      title: "Crafting Beautiful Spaces That Last a Lifetime",
    },
    {
      welcome: "Renovation Specialists",
      title: "Transform Your Space with Our Expertise",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      Icon: Facebook,
      url: "https://www.facebook.com/twilsonbuilders/",
    },
    {
      name: "YouTube",
      Icon: Youtube,
      url: "https://www.instagram.com/twilsonbuilders/",
    },
    {
      name: "Instagram",
      Icon: Instagram,
      url: "https://www.youtube.com/watch?v=wK6aKXu5NbE",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Header - Logo and Menu aligned */}
      <header className="relative z-20 px-4 sm:px-8 pt-4 sm:pt-8 flex justify-between items-center">
        <Link href="/" className="inline-block">
          <Image
            src="/assets/images/logo.webp"
            alt="T.Wilson Builders"
            width={160} 
            height={200} 
            priority={true} // Ensures immediate loading
            className="h-24 sm:h-32 md:h-40 w-auto"
          />
        </Link>
      </header>

      {/* Social Media Icons */}
      <div
        className="absolute z-50 bottom-0 left-0 right-0 md:right-12 md:left-auto md:bottom-auto md:top-1/2 
                md:-translate-y-1/2 bg-transparent"
      >
        <div className="flex md:flex-col justify-center items-center gap-4 p-4">
          {socialLinks.map(({ name, Icon, url }) => (
            <Link
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${name} page`}
              className="w-14 h-14 rounded-full border border-white/50 flex items-center justify-center
                 bg-black/20 backdrop-blur-sm hover:bg-black/40 transition-all duration-300
                 text-white hover:border-white"
            >
              <Icon size={30} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content with Animation */}
      <div className="relative z-10 container mx-auto px-4 sm:px-8 pt-8 sm:pt-20">
        <div className="max-w-4xl mx-auto md:mx-0">
          {/* Welcome Text */}
          <h5
            className="text-orange text-base sm:text-lg md:text-xl font-bold uppercase tracking-[0.2em] 
                         sm:tracking-[0.3em] mb-4 sm:mb-8 transition-all duration-500 ease-in-out transform
                         text-center md:text-left"
          >
            {heroContent[currentSlide].welcome}
          </h5>

          {/* Main Title */}
          <h1
            className="text-white text-3xl sm:text-5xl md:text-7xl font-bold leading-[1.2] mb-8 sm:mb-12 
                         transition-all duration-500 ease-in-out transform text-center md:text-left"
          >
            {heroContent[currentSlide].title.split(" ").map((word, index) => (
              <span
                key={index}
                className="inline-block mr-[0.3em]"
                style={{
                  animation: `fadeInUp 0.5s ease forwards`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8 sm:mb-16 justify-center md:justify-start">
            <Link
              href="tel:+64123456789"
              className="px-6 sm:px-10 py-3 sm:py-4 bg-orange text-white text-base sm:text-lg 
                       font-semibold rounded-full hover:bg-orange/90 transition-colors duration-300 text-center"
            >
              Call Us
            </Link>
            <Link
              href="/contact/contact-us"
              className="px-6 sm:px-10 py-3 sm:py-4 bg-transparent text-white text-base sm:text-lg 
                       font-semibold rounded-full border-2 border-white/20 hover:border-white/40 
                       hover:bg-white/10 transition-all duration-300 text-center"
            >
              Get a Quote
            </Link>
          </div>

          {/* Slide Indicators */}
          <div className="flex gap-2 sm:gap-3 pb-4 sm:pb-8 justify-center md:justify-start">
            {heroContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentSlide === index ? "true" : "false"}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-orange w-6 sm:w-8"
                    : "bg-white/20 hover:bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

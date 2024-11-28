"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const LogoSlider = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  const logos = [
    { id: 1, name: "Hosorem", url: "/assets/images/logos/1.webp" },
    { id: 2, name: "Wood Work", url: "/assets/images/logos/2.webp" },
    { id: 3, name: "Woodwork", url: "/assets/images/logos/3.webp" },
    { id: 4, name: "Bear Brand", url: "/assets/images/logos/4.webp" },
    { id: 5, name: "Wood", url: "/assets/images/logos/5.webp" },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      autoPlayRef.current = setInterval(() => {
        if (sliderRef.current) {
          const isAtEnd =
            sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
            sliderRef.current.scrollWidth;

          if (isAtEnd) {
            sliderRef.current.scrollLeft = 0;
          } else {
            sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
          }
        }
      }, 3000); // Slide every 3 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPlaying]);

  // Pause autoplay when hovering
  const handleMouseEnter = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  // Resume autoplay when mouse leaves
  const handleMouseLeave = () => {
    stopDragging();
    if (isPlaying) {
      handleMouseEnter(); // Clear any existing interval
      autoPlayRef.current = setInterval(() => {
        if (sliderRef.current) {
          sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
      }, 2000);
    }
  };

  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    handleMouseEnter(); // Pause autoplay while dragging
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const handleDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Card className="w-full bg-white p-4 sm:p-6 md:p-8 relative">
      {/* Section Title */}
      <div className="text-center mb-4 sm:mb-6 md:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-3 sm:mb-4">
          Our Partners
        </h2>
        <div className="flex justify-center items-center gap-1">
          <div className="w-12 sm:w-16 h-[1px] bg-gray-300"></div>
          <div className="w-3 sm:w-4 h-1 bg-orange"></div>
          <div className="w-12 sm:w-16 h-[1px] bg-gray-300"></div>
        </div>
      </div>

      {/* Logo Slider Container */}
      <div
        ref={sliderRef}
        className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-hidden cursor-grab active:cursor-grabbing scroll-smooth"
        onMouseDown={startDragging}
        onMouseUp={stopDragging}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleDrag}
        onTouchStart={(e) => {
          setIsDragging(true);
          setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
          setScrollLeft(sliderRef.current.scrollLeft);
          handleMouseEnter();
        }}
        onTouchMove={(e) => {
          if (!isDragging) return;
          const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
          const walk = (x - startX) * 2;
          sliderRef.current.scrollLeft = scrollLeft - walk;
        }}
        onTouchEnd={() => {
          stopDragging();
          handleMouseLeave();
        }}
      >
        {/* Double the logos for infinite scroll effect */}
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0 transition-all duration-300 group"
          >
            <div className="w-28 sm:w-32 md:w-40 h-40 sm:h-48 md:h-60 flex items-center justify-center bg-white rounded-lg">
              <div className="relative w-full h-auto px-4">
                <Image
                  src={logo.url}
                  alt={logo.name}
                  width={160}
                  height={240}
                  className="transition-all duration-300 filter grayscale hover:grayscale-0 opacity-50 hover:opacity-100
                           w-full h-auto object-contain"
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 160px"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default LogoSlider;
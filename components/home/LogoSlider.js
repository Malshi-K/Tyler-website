"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { logos } from "@/app/data/logos";

const LogoSlider = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

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
      <div ref={sliderRef} className="flex overflow-x-hidden scroll-smooth">
        <div className="flex gap-8 sm:gap-12 md:gap-16">
          {[...logos, ...logos].map((logo, index) => (
            <div key={`${logo.id}-${index}`} className="flex-none">
              <div className="w-32 sm:w-40 md:w-48 flex items-center justify-center">
                <div className="relative w-full h-auto">
                  <Image
                    src={logo.url}
                    alt={logo.name}
                    width={160}
                    height={240}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default LogoSlider;

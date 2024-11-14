"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const LogoSlider = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  const logos = [
    { id: 1, name: "Hosorem", url: "/assets/images/logos/1.jpg" },
    { id: 2, name: "Wood Work", url: "/assets/images/logos/2.jpg" },
    { id: 3, name: "Woodwork", url: "/assets/images/logos/3.png" },
    { id: 4, name: "Bear Brand", url: "/assets/images/logos/4.png" },
    { id: 5, name: "Wood", url: "/assets/images/logos/5.gif" },
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

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
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
    <Card className="w-full bg-white p-6 relative">
      {/* Section Title */}
      <div className="text-center mb-5">
        <h2 className="text-4xl font-bold text-navy mb-4">Our Partners</h2>
        <div className="flex justify-center items-center gap-1">
          <div className="w-16 h-[1px] bg-gray-300"></div>
          <div className="w-4 h-1 bg-orange"></div>
          <div className="w-16 h-[1px] bg-gray-300"></div>
        </div>
      </div>      

      <div
        ref={sliderRef}
        className="flex gap-8 overflow-x-hidden cursor-grab active:cursor-grabbing scroll-smooth"
        onMouseDown={startDragging}
        onMouseUp={stopDragging}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleDrag}
      >
        {/* Double the logos for infinite scroll effect */}
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0 transition-all duration-300 group"
          >
            <div className="w-40 h-60 flex items-center justify-center bg-white rounded-lg">
              <img
                src={logo.url}
                alt={logo.name}
                className="max-w-full h-auto transition-all duration-300 filter grayscale hover:grayscale-0 opacity-50 hover:opacity-100"
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default LogoSlider;

"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/app/data/testimonials";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/background/pattern-4.webp"
          alt="" // Empty alt for decorative background
          fill
          sizes="100vw"
          className="w-full h-full object-cover"
          loading="lazy" // Enable lazy loading
          quality={75} // Reduce quality for background image
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJyEkMj4xLy4wMy85OjU8OURJRD5FPUg5Mz1IOUhJSFZJSjxIPUdHSEr/2wBDAQYXFx4aHh4kHBwkSjclJEpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkr/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className="absolute inset-0 bg-navy/90" />
        {/* Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('/assets/images/background/pattern-1.webp')`,
            backgroundRepeat: "repeat",
            backgroundSize: "80px sm:100px",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-orange mb-3 sm:mb-4">
            This is why
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
            We do what we do!
          </h3>
          <div className="flex items-center justify-center gap-1">
            <div className="w-12 sm:w-16 h-[1px] bg-white/20"></div>
            <div className="w-3 sm:w-4 h-1 bg-orange"></div>
            <div className="w-12 sm:w-16 h-[1px] bg-white/20"></div>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-lg">
              {/* Quote Icon */}
              <div className="absolute -left-2 sm:-left-4 -top-2 sm:-top-4 text-4xl sm:text-6xl text-orange/40 font-serif">
                &ldquo;
              </div>

              {/* Testimonial Text */}
              <div className="space-y-4 sm:space-y-6">
                <h4 className="text-xl sm:text-2xl font-semibold text-white text-center">
                  {testimonials[currentSlide].title}
                </h4>
                <p className="text-white/90 text-base sm:text-lg leading-relaxed italic text-center">
                  {testimonials[currentSlide].quote}
                </p>

                {/* Client Info */}
                <div className="pt-4 sm:pt-6 border-t border-white/10">
                  <p className="text-orange text-center text-sm sm:text-base">
                    {testimonials[currentSlide].name}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <button
                onClick={prevSlide}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center
                         text-white hover:border-orange hover:text-orange transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center
                         text-white hover:border-orange hover:text-orange transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-4 sm:mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 
                    ${
                      currentSlide === index
                        ? "bg-orange w-3 sm:w-4"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;

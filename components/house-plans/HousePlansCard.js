"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ScrollText, Download } from "lucide-react";
import Image from "next/image";
import { roomsData } from "@/app/data/roomsData";

const HousePlansCard = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) =>
      prev === 0 ? roomsData.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) =>
      prev === roomsData.length - 1 ? 0 : prev + 1
    );
  };

  const handleDownload = (e, downloadLink) => {
    e.preventDefault();
    // You can add analytics tracking here if needed
    window.open(downloadLink, "_blank");
  };

  // Get current room data
  const currentRoom = roomsData[currentImageIndex];

  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Image Carousel Section */}
          <div className="relative w-full lg:w-3/5">
            <div className="relative w-full pt-[75%] sm:pt-[66.67%]">
              <Image
                src={currentRoom.image}
                alt={`${currentRoom.title} View`}
                fill
                className="object-contain transition-opacity duration-300"
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevImage}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 p-1 sm:p-2 rounded-full hover:bg-white/90 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 p-1 sm:p-2 rounded-full hover:bg-white/90 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
              {roomsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors
                    ${
                      currentImageIndex === index ? "bg-white" : "bg-white/50"
                    }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-2/5 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
            <div className="space-y-4 sm:space-y-6">
              {/* Title and Description */}
              <div className="space-y-2 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                  {currentRoom.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {currentRoom.description}
                </p>
              </div>

              {/* Features Grid */}
              <div>
                <h3 className="font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                  <ScrollText className="w-4 h-4 sm:w-5 sm:h-5 text-navy" />
                  House Features
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-4">
                  {currentRoom.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="border-t pt-4 sm:pt-6 mt-4 sm:mt-6">
              <button
                onClick={(e) => handleDownload(e, currentRoom.downloadLink)}
                className="w-full bg-navy text-white px-4 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-navy/90 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download Floor Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousePlansCard;

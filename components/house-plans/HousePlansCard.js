"use client";
import React, { useState } from "react";
import {
  BedSingle,
  Sofa,
  Bath,
  Car,
  DoorOpen,
  Warehouse,
  BedDouble,
  ShowerHead,
  ChevronLeft,
  ChevronRight,
  ScrollText,
  Download,
  UtensilsCrossed,
} from "lucide-react";
import Image from "next/image";

const HousePlansCard = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Updated room data with appropriate icons and download links
  const roomsData = [
    {
      id: 1,
      image: "/assets/images/house-plans/1.jpg",
      title: "Tawa - 4 Bedroom / 251m²",
      downloadLink: "/assets/downloads/tawa-plan.pdf",
      description:
        "This large, luxury family home features a central courtyard and a beautifully appointed chef's kitchen for entertaining and extended Family gatherings. Outdoor living can be accessed via the master bedroom as well as from all three spacious, open plan living areas",
      features: [
        {
          icon: <BedSingle className="w-5 h-5 text-navy" />,
          text: "4 Bedrooms",
        },
        {
          icon: <Sofa className="w-5 h-5 text-navy" />,
          text: "3 Living Rooms",
        },
        {
          icon: <Bath className="w-5 h-5 text-navy" />,
          text: "2 Toilets",
        },
        {
          icon: <ShowerHead className="w-5 h-5 text-navy" />,
          text: "2 Bathrooms",
        },
        {
          icon: <Car className="w-5 h-5 text-navy" />,
          text: "2 Car Garage",
        },
        {
          icon: <DoorOpen className="w-5 h-5 text-navy" />,
          text: "1 Walk-in Robe",
        },
        {
          icon: <BedDouble className="w-5 h-5 text-navy" />,
          text: "1 Ensuite",
        },
        {
          icon: <Warehouse className="w-5 h-5 text-navy" />,
          text: "1 Separate Laundry",
        },
      ],
    },
    {
      id: 2,
      image: "/assets/images/house-plans/2.jpg",
      title: "Matai - 4 Bedroom 311m²",
      downloadLink: "/assets/downloads/matai-plan.pdf",
      description:
        "If you love entertaining, check out Matai. The front entrance welcomes family and friends into a well-appointed layout. The kitchen is a good host's delight, with separate scullery, and there's an area for alfresco dining plus a formal lounge. Your guest room has a semi-ensuite.",
      features: [
        {
          icon: <BedSingle className="w-5 h-5 text-navy" />,
          text: "4 Bedrooms",
        },
        {
          icon: <Sofa className="w-5 h-5 text-navy" />,
          text: "3 Living Rooms",
        },
        {
          icon: <Bath className="w-5 h-5 text-navy" />,
          text: "2 Toilets",
        },
        {
          icon: <ShowerHead className="w-5 h-5 text-navy" />,
          text: "1 Bathroom",
        },
        {
          icon: <Car className="w-5 h-5 text-navy" />,
          text: "3 Car Garage",
        },
        {
          icon: <DoorOpen className="w-5 h-5 text-navy" />,
          text: "1 Walk-in Robe",
        },
        {
          icon: <BedDouble className="w-5 h-5 text-navy" />,
          text: "1 Ensuite",
        },
        {
          icon: <ScrollText className="w-5 h-5 text-navy" />,
          text: "Study",
        },
        {
          icon: <UtensilsCrossed className="w-5 h-5 text-navy" />,
          text: "Scullery",
        },
        {
          icon: <Warehouse className="w-5 h-5 text-navy" />,
          text: "Separate Laundry",
        },
      ],
    },
    {
      id: 3,
      image: "/assets/images/house-plans/3.jpg",
      title: "Kauri - 4 bedroom 364m²",
      downloadLink: "/assets/downloads/kauri-plan.pdf",
      description:
        "If you seek space, Kauri is perfect. At over 360 square metres, you have a separate formal living room, separate guest wing, and a garage workshop that could be used as an office. Outside, there's a stunning entertaining area, framed by schist-clad columns and exposed gable beams.",
      features: [
        {
          icon: <BedSingle className="w-5 h-5 text-navy" />,
          text: "4 Bedrooms",
        },
        {
          icon: <Sofa className="w-5 h-5 text-navy" />,
          text: "3 Living Rooms",
        },
        {
          icon: <Bath className="w-5 h-5 text-navy" />,
          text: "4 Toilets",
        },
        {
          icon: <ShowerHead className="w-5 h-5 text-navy" />,
          text: "2 Bathrooms",
        },
        {
          icon: <Car className="w-5 h-5 text-navy" />,
          text: "3 Car Garage",
        },
        {
          icon: <DoorOpen className="w-5 h-5 text-navy" />,
          text: "2 Walk-in Robes",
        },
        {
          icon: <BedDouble className="w-5 h-5 text-navy" />,
          text: "2 Ensuites",
        },
        {
          icon: <ScrollText className="w-5 h-5 text-navy" />,
          text: "Study",
        },
        {
          icon: <Warehouse className="w-5 h-5 text-navy" />,
          text: "Separate Laundry",
        },
      ],
    },
    {
      id: 4,
      image: "/assets/images/house-plans/4.jpg",
      title: "Kea - 4 Bedroom 195m²",
      downloadLink: "/assets/downloads/kea-plan.pdf",
      description:
        "If you enjoy good company, this home is an entertainer's dream. Stacked rooflines draw attention to the welcoming foyer. Inside, the expansive living area allows multiple options to dress and use the space to reflect your personality",
      features: [
        {
          icon: <BedSingle className="w-5 h-5 text-navy" />,
          text: "4 Bedrooms",
        },
        {
          icon: <Sofa className="w-5 h-5 text-navy" />,
          text: "3 Living Rooms",
        },
        {
          icon: <Bath className="w-5 h-5 text-navy" />,
          text: "2 Toilets",
        },
        {
          icon: <ShowerHead className="w-5 h-5 text-navy" />,
          text: "1 Bathroom",
        },
        {
          icon: <Car className="w-5 h-5 text-navy" />,
          text: "2 Car Garage",
        },
        {
          icon: <DoorOpen className="w-5 h-5 text-navy" />,
          text: "1 Walk-in Robe",
        },
        {
          icon: <BedDouble className="w-5 h-5 text-navy" />,
          text: "1 Ensuite",
        },
        {
          icon: <ScrollText className="w-5 h-5 text-navy" />,
          text: "Study",
        },
        {
          icon: <Warehouse className="w-5 h-5 text-navy" />,
          text: "Laundry",
        },
      ],
    },
    {
      id: 5,
      image: "/assets/images/house-plans/5.jpg",
      title: "Takahe - 3 Bedroom 223m²",
      downloadLink: "/assets/downloads/takahe-plan.pdf",
      description:
        "Designed for visual impact, this split-level home combines striking mid-century modern lines with a spacious, contemporary layout. With three bedrooms and a large, open plan living area on the upper level and a garage and study below, it would be ideal for a home-based business.",
      features: [
        {
          icon: <BedSingle className="w-5 h-5 text-navy" />,
          text: "3 Bedrooms",
        },
        {
          icon: <Sofa className="w-5 h-5 text-navy" />,
          text: "3 Living Rooms",
        },
        {
          icon: <Bath className="w-5 h-5 text-navy" />,
          text: "2 Toilets",
        },
        {
          icon: <ShowerHead className="w-5 h-5 text-navy" />,
          text: "2 Bathrooms",
        },
        {
          icon: <Car className="w-5 h-5 text-navy" />,
          text: "2 Car Garage",
        },
        {
          icon: <DoorOpen className="w-5 h-5 text-navy" />,
          text: "1 Walk-in Robe",
        },
        {
          icon: <BedDouble className="w-5 h-5 text-navy" />,
          text: "1 Ensuite",
        },
        {
          icon: <ScrollText className="w-5 h-5 text-navy" />,
          text: "Study",
        },
        {
          icon: <Warehouse className="w-5 h-5 text-navy" />,
          text: "Separate Laundry",
        },
      ],
    },
  ];

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
    <div className="py-20">
      <div className="max-w-6xl mx-auto bg-white rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Image Carousel Section */}
          <div className="relative w-full md:w-3/5">
            <div className="relative w-full pt-[75%]"> {/* 4:3 aspect ratio container */}
              <Image
                src={currentRoom.image}
                alt={`${currentRoom.title} View`}
                fill
                className="object-contain rounded-l-lg transition-opacity duration-300"
                priority
              />
            </div>
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white/90 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white/90 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
  
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {roomsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors
                    ${currentImageIndex === index ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
          </div>
  
          {/* Details Section */}
          <div className="w-full md:w-2/5 p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Title and Description */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {currentRoom.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {currentRoom.description}
                </p>
              </div>
  
              {/* Features Grid */}
              <div>
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <ScrollText className="w-5 h-5 text-navy" />
                  House Features
                </h3>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {currentRoom.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {feature.icon}
                      <p className="text-sm text-gray-600">{feature.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Download Button */}
            <div className="border-t pt-6 mt-6">
              <button
                onClick={(e) => handleDownload(e, currentRoom.downloadLink)}
                className="w-full bg-navy text-white px-8 py-3 rounded-md hover:bg-navy/90 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
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

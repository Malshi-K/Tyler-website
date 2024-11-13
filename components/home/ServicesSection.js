"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServicesSection = () => {
  const services = [
    {
      title: "Design & Build",
      image: "/assets/images/services/DJI_0028.jpg",
      description:
        "We also done furniture manufacturing, our experts are help you building your dream furnitures with in more than your expectation...",
      link: "/services/furniture",
    },
    {
      title: "Renovations & Extensions",
      image: "/assets/images/services/DJI_0028.jpg",
      description:
        "Our expert carpenters provide top-quality woodworking services for all your construction and renovation needs...",
      link: "/services/carpentry",
    },
    {
      title: "Light Commercial",
      image: "/assets/images/services/DJI_0028.jpg",
      description:
        "Transform your existing furniture into beautiful pieces that match your style and requirements...",
      link: "/services/remodeling",
    },
    {
      title: "New Builds",
      image: "/assets/images/services/DJI_0028.jpg",
      description:
        "We also done furniture manufacturing, our experts are help you building your dream furnitures with in more than your expectation...",
      link: "/services/furniture",
    },
    {
      title: "Bathrooms & Kitchens",
      image: "/assets/images/services/DJI_0028.jpg",
      description:
        "Our expert carpenters provide top-quality woodworking services for all your construction and renovation needs...",
      link: "/services/carpentry",
    },
    {
      title: "Decks & Fences",
      image: "/assets/images/services/DJI_0028.jpg",
      description:
        "Transform your existing furniture into beautiful pieces that match your style and requirements...",
      link: "/services/remodeling",
    },
  ];

  return (
    <div className="relative py-20 px-8">
      {/* Overlay Background */}
      <div className="absolute inset-0 bg-navy/80" />

      {/* Section Title */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
        <div className="flex justify-center items-center gap-1">
          <div className="w-16 h-[1px] bg-white/20"></div>
          <div className="w-4 h-1 bg-orange"></div>
          <div className="w-16 h-[1px] bg-white/20"></div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative cursor-pointer h-[400px]"
            >
              {/* Main Image */}

              <div className="relative h-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Default Overlay */}
                <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0" />

                {/* Default Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center transition-transform duration-300 group-hover:-translate-y-full">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-orange mx-auto" />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-orange/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/90 mb-6">{service.description}</p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-white border-2 border-white px-6 py-2 rounded-full
          hover:bg-white hover:text-orange transition-colors duration-300"
                    >
                      Read More
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

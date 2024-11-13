"use client";
import React, { useState } from "react";
import { Link } from "lucide-react";
import Image from "next/image";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("0");

  const categories = [
    { id: "0", label: "All", count: 15 },
    { id: "1", label: "Design & Build" },
    { id: "2", label: "Renovations & Extensions" },
    { id: "3", label: "Light Commercial" },
    { id: "4", label: "New Builds" },
    { id: "5", label: "Bathrooms & Kitchens" },
    { id: "6", label: "Decks & Fences" },
  ];

  const projects = {
    1: [
      {
        id: "1-1",
        title: "Marae Project",
        description: "Modern family home with sustainable features",
        image: "/assets/images/projects/December - Marae Project/DSC05681.jpg",
        size: "large",
      },
      {
        id: "1-2",
        title: "Marae Project",
        description: "Modern family home with sustainable features",
        image: "/assets/images/projects/December - Marae Project/DSC05681.jpg",
        size: "medium",
      },
    ],
    2: [
      {
        id: "2-1",
        title: "Villa Extension",
        description: "Modern extension adding extra living space",
        image: "/assets/images/projects/December - Marae Project/DSC05681.jpg",
        size: "small",
      },
    ],
  };

  const getAllProjects = () => {
    return Object.values(projects).flat();
  };

  const getFilteredProjects = () => {
    if (activeCategory === "0") {
      return getAllProjects();
    }
    return projects[activeCategory] || [];
  };

  const categoriesWithCounts = categories.map((category) => ({
    ...category,
    count:
      category.id === "0"
        ? getAllProjects().length
        : projects[category.id]?.length || 0,
  }));

  const filteredProjects = getFilteredProjects();

  return (
    <div className="relative py-20 px-8">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Our Featured Projects
          </h2>
          <div className="flex justify-center items-center gap-1">
            <div className="w-16 h-[1px] bg-gray-300"></div>
            <div className="w-4 h-1 bg-orange"></div>
            <div className="w-16 h-[1px] bg-gray-300"></div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categoriesWithCounts.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 
                  ${
                    activeCategory === category.id
                      ? "border border-orange text-orange font-bold scale-105"
                      : "text-navy font-bold hover:text-orange hover:border border-navy"
                  }
                `}
              >
                {category.label}
                {category.count > 0 && (
                  <span className="ml-2 text-sm">({category.count})</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Masonry Grid */}
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="break-inside-avoid group relative overflow-hidden rounded-lg 
    bg-white hover:shadow-xl transition-all duration-300"
                style={{
                  height:
                    project.size === "large"
                      ? "600px"
                      : project.size === "medium"
                      ? "400px"
                      : "300px",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-cover"
                  priority
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

                {/* Title and Description Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {/* Action Icons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center
        hover:bg-white/20 transition-colors duration-300"
                    >
                      <Link className="w-5 h-5 text-white" />
                    </button>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title.toUpperCase()}
                  </h3>

                  {/* Project Category/Type */}
                  <p className="text-white/80 text-sm font-medium mb-4">
                    {/* You can add a subtitle or category here */}
                    Wood Work & Projects
                  </p>

                  {/* Accent Line */}
                  <div className="w-12 h-0.5 bg-orange mb-0 group-hover:mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;

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
    2: [
      {
        id: "2-1",
        title: "Kotahitanga Marae",
        description: "Renovations",
        image: "/assets/images/projects/Kotahitanga Marae - Reno/DSC05681.jpg",
        size: "large",
      },
    ],
    3: [
      {
        id: "3-1",
        title: "The Base car wash",
        description: "Light Commercial",
        image: "/assets/images/projects/The Base car wash/IMG_4400.JPG",
        size: "large",
      },
      {
        id: "3-2",
        title: "Kaipaki Berry Farm",
        description: "Light Commercial",
        image: "/assets/images/projects/Kaipaki Berry Farm ( Big warehosue)/F7249D3E-5DA3-49A4-9506-B98F055EE117.JPEG",
        size: "large",
      },
    ],
    4: [
      {
        id: "4-1",
        title: "Galloway Street New Build - House Hamilton East",
        description: "New Build",
        image: "/assets/images/projects/Galloway Street New Build - House Hamilton East/DSC01410.jpg",
        size: "small",
      },
      {
        id: "4-2",
        title: "Hamilton - House Greenhill",
        description: "New Build",
        image: "/assets/images/projects/Hamilton - New Build - House Greenhill/DJI_0034.jpg",
        size: "small",
      },
      {
        id: "4-3",
        title: "Ragan - New Builds Rangatahi",
        description: "New Build",
        image: "/assets/images/projects/Ragan - New Builds Rangatahi/DJI_0043.jpg",
        size: "large",
      },
      {
        id: "4-4",
        title: "Taare - Wharenui New Build",
        description: "New Build",
        image: "/assets/images/projects/Taare - Wharenui New Build/DSC02893.jpg",
        size: "medium",
      },
      {
        id: "4-5",
        title: "Tamahere New Build",
        description: "New Build",
        image: "/assets/images/projects/Tamahere New Build/DSC08057.jpg",
        size: "small",
      },
      {
        id: "4-6",
        title: "Te Kowhari New Build",
        description: "New Build",
        image: "/assets/images/projects/Te Kowhari New Build/DJI_0029.jpg",
        size: "medium",
      },
    ],
    5: [
      {
        id: "5-1",
        title: "Bathrooms",
        description: "Bathrooms",
        image: "/assets/images/projects/Bathrooms & Kitchens/Copy of IMG_9136.jpg",
        size: "small",
      },
      {
        id: "5-2",
        title: "Kitchens",
        description: "Kitchens",
        image: "/assets/images/projects/Bathrooms & Kitchens/DSC03679.jpg",
        size: "small",
      },
    ],
    6: [
      {
        id: "6-1",
        title: "Decks",
        description: "Decks",
        image: "/assets/images/projects/decks and kitchen bathrooms/IMG_0554 Kwilla deck Tyler Wilson.jpg",
        size: "small",
      },
      {
        id: "6-2",
        title: "Decks",
        description: "Decks",
        image: "/assets/images/projects/decks and kitchen bathrooms/IMG_2717 Tyler Wilson.JPG",
        size: "small",
      },
      {
        id: "6-3",
        title: "Decks",
        description: "Decks",
        image: "/assets/images/projects/decks and kitchen bathrooms/Photo 29-09-19, 7 51 57 AM Tyler Wilson.jpg",
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
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10">
        {/* Section Title - unchanged */}
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

        {/* Category Filter - unchanged */}
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

        {/* Projects Grid - Updated with uniform sizing */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl"
              >
                {/* Fixed aspect ratio container */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gray-100 rounded-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full h-full object-cover rounded-2xl"
                      priority
                    />
                  </div>

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-2xl" />

                  {/* Content Overlay */}
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
                      {project.description}
                    </p>

                    {/* Accent Line */}
                    <div className="w-12 h-0.5 bg-orange mb-0 group-hover:mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
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
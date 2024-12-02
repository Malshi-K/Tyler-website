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
        image: "/assets/images/projects/Kotahitanga Marae - Reno/DSC05681.webp",
        size: "large",
      },
    ],
    3: [
      {
        id: "3-1",
        title: "The Base car wash",
        description: "Light Commercial",
        image: "/assets/images/projects/The Base car wash/IMG_4400.webp",
        size: "large",
      },
      {
        id: "3-2",
        title: "Kaipaki Berry Farm",
        description: "Light Commercial",
        image:
          "/assets/images/projects/Kaipaki Berry Farm ( Big warehosue)/1.webp",
        size: "large",
      },
    ],
    4: [
      {
        id: "4-1",
        title: "Galloway Street New Build - House Hamilton East",
        description: "New Build",
        image:
          "/assets/images/projects/Galloway Street New Build - House Hamilton East/DSC01410.webp",
        size: "small",
      },
      {
        id: "4-2",
        title: "Hamilton - House Greenhill",
        description: "New Build",
        image:
          "/assets/images/projects/Hamilton - New Build - House Greenhill/DJI_0034.webp",
        size: "small",
      },
      {
        id: "4-3",
        title: "Raglan - New Builds Rangatahi",
        description: "New Build",
        image:
          "/assets/images/projects/Ragan - New Builds Rangatahi/DJI_0043.webp",
        size: "large",
      },
      {
        id: "4-4",
        title: "Taare - Wharenui New Build",
        description: "New Build",
        image:
          "/assets/images/projects/Taare - Wharenui New Build/DSC02893.webp",
        size: "medium",
      },
      {
        id: "4-5",
        title: "Tamahere New Build",
        description: "New Build",
        image: "/assets/images/projects/Tamahere New Build/DSC08057.webp",
        size: "small",
      },
      {
        id: "4-6",
        title: "Te Kowhari New Build",
        description: "New Build",
        image: "/assets/images/projects/Te Kowhari New Build/DJI_0029.webp",
        size: "medium",
      },
    ],
    5: [
      {
        id: "5-1",
        title: "Bathrooms",
        description: "Bathrooms",
        image:
          "/assets/images/projects/Bathrooms & Kitchens/Copy of IMG_9136.webp",
        size: "small",
      },
      {
        id: "5-2",
        title: "Kitchens",
        description: "Kitchens",
        image: "/assets/images/projects/Bathrooms & Kitchens/DSC03679.webp",
        size: "small",
      },
    ],
    6: [
      {
        id: "6-1",
        title: "Decks",
        description: "Decks",
        image: "/assets/images/projects/Decks/1.webp",
        size: "small",
      },
      {
        id: "6-2",
        title: "Decks",
        description: "Decks",
        image: "/assets/images/projects/Decks/2.webp",
        size: "small",
      },
      {
        id: "6-3",
        title: "Decks",
        description: "Decks",
        image: "/assets/images/projects/Decks/3.webp",
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
    <div className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
            Our Featured Projects
          </h2>
          <div className="flex justify-center items-center gap-1">
            <div className="w-12 sm:w-16 h-[1px] bg-gray-300"></div>
            <div className="w-3 sm:w-4 h-1 bg-orange"></div>
            <div className="w-12 sm:w-16 h-[1px] bg-gray-300"></div>
          </div>
        </div>

        {/* Category Filter - Scrollable on mobile */}
        <div className="container mx-auto mb-8 sm:mb-12">
          <div className="overflow-x-auto pb-4 sm:pb-0 hide-scrollbar">
            <div className="flex flex-nowrap sm:flex-wrap sm:justify-center gap-3 sm:gap-4 min-w-max sm:min-w-0 px-4">
              {categoriesWithCounts.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base whitespace-nowrap transition-all duration-300
                    ${
                      activeCategory === category.id
                        ? "border-2 border-orange text-orange font-bold scale-105"
                        : "border border-navy/20 text-navy hover:text-orange hover:border-orange"
                    }
                  `}
                >
                  {category.label}
                  {category.count > 0 && (
                    <span className="ml-1 sm:ml-2 text-xs sm:text-sm">
                      ({category.count})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-lg sm:rounded-2xl overflow-hidden"
              >
                {/* Project Container */}
                <div className="relative w-full aspect-[4/3]">
                  <div className="absolute inset-0 bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority={false}
                      loading={project.id.endsWith("-1") ? "eager" : "lazy"}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJyEkMj4xLy4wMy85OjU8OURJRD5FPUg5Mz1IOUhJSFZJSjxIPUdHSEr/2wBDAQYXFx4aHh4kHBwkSjclJEpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkr/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  </div>

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 translate-y-1/2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {/* Action Icons */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm 
                                 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                      >
                        <Link className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </button>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                      {project.title.toUpperCase()}
                    </h3>

                    {/* Project Category/Type */}
                    <p className="text-white/80 text-xs sm:text-sm font-medium mb-2 sm:mb-4">
                      {project.description}
                    </p>

                    {/* Accent Line */}
                    <div className="w-8 sm:w-12 h-0.5 bg-orange transition-all duration-500" />
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

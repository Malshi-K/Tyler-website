"use client";
import React, { useState } from "react";
import { Link, X } from "lucide-react";
import Image from "next/image";
import { categories, projects } from "@/app/data/projects";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("0");
  const [selectedProject, setSelectedProject] = useState(null);

  const getAllProjects = () => {
    // Get all projects as a flat array
    const allProjects = Object.values(projects).flat();

    // Create a Map to store projects with combined descriptions
    const uniqueProjects = new Map();

    // Process each project
    allProjects.forEach((project) => {
      if (!uniqueProjects.has(project.title)) {
        // First occurrence of this title
        uniqueProjects.set(project.title, { ...project });
      } else {
        // Project with this title already exists, combine descriptions
        const existingProject = uniqueProjects.get(project.title);
        const existingDesc = existingProject.description;
        const newDesc = project.description;

        // Only add new description if it's different
        if (!existingDesc.includes(newDesc)) {
          existingProject.description = `${existingDesc} • ${newDesc}`;
        }
      }
    });

    // Convert Map values back to array
    return Array.from(uniqueProjects.values());
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

  // Rest of the component remains the same...
  const MasonryGallery = ({ project, onClose }) => {
    return (
      <div className="fixed inset-0 z-50 bg-black/95 overflow-y-auto">
        <div className="relative min-h-screen p-4 md:p-8">
          {/* Header */}
          <div className="sticky top-0 z-50 flex justify-between items-center mb-6 bg-black/50 backdrop-blur-sm p-4 rounded-lg">
            <div>
              <p className="text-md md:text-lg font-semibold text-white">
                {project.location}
              </p>
              <h2 className="text-lg md:text-xl font-bold text-white">
                {project.title}
              </h2>
              <p className="text-white/70">{project.description}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
            {/* Main Image */}
            <div className="relative mb-4 break-inside-avoid">
              <div className="relative w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            </div>

            {/* Additional Images */}
            {project.additionalImages?.map((imgSrc, index) => (
              <div key={index} className="relative mb-4 break-inside-avoid">
                <div className="relative w-full">
                  <Image
                    src={imgSrc}
                    alt={`${project.title} - Image ${index + 1}`}
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

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

        {/* Category Filter */}
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
                className="group bg-white rounded-lg sm:rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
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
                    {/* Add location here */}
                    <p className="text-white/90 text-sm font-medium mb-1">
                      {project.location}
                    </p>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                      {project.title.toUpperCase()}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm font-medium mb-2 sm:mb-4">
                      {project.description}
                    </p>
                    <div className="w-8 sm:w-12 h-0.5 bg-orange transition-all duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Modal */}
        {selectedProject && (
          <MasonryGallery
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;

import React from "react";
import { projects } from "@/app/data/projects";

const ProjectSlider = ({ serviceCategory }) => {
  const getServiceCategoryId = (serviceName) => {
    const serviceToCategoryMap = {
      "Design & Build": "1",
      "Renovations & Extensions": "2",
      "Light Commercial": "3",
      "New Builds": "4",
      Bathrooms: "5",
      Kitchens: "6",
      "Decks & Fences": "7",
    };
    return serviceToCategoryMap[serviceName];
  };

  const categoryId = getServiceCategoryId(serviceCategory);
  const relevantProjects = projects[categoryId] || [];

  if (!relevantProjects.length) {
    return null;
  }

  return (
    <div className="w-full bg-white py-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold text-navy mb-6">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {relevantProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl h-64"
            >
              <div className="relative h-full w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-1 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-200 line-clamp-2">
                      {project.description}
                    </p>
                    {project.additionalImages && (
                      <p className="text-xs text-gray-300 mt-1">
                        +{project.additionalImages.length} more photos
                      </p>
                    )}
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

export default ProjectSlider;

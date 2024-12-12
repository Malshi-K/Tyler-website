import React from 'react';
import { categories, projects } from '@/app/data/projects';

const ProjectSlider = ({ serviceCategory }) => {
  const getServiceCategoryId = (serviceName) => {
    const serviceToCategoryMap = {
      "Design & Build": "1",
      "Renovations & Extensions": "2",
      "Light Commercial": "3",
      "New Builds": "4",
      "Bathrooms & Kitchens": "5",
      "Decks & Fences": "6"
    };
    return serviceToCategoryMap[serviceName];
  };

  const categoryId = getServiceCategoryId(serviceCategory);
  const relevantProjects = projects[categoryId] || [];

  // Function to determine image size class based on index
  const getImageSizeClass = (index) => {
    // Create different patterns for image sizes
    const patterns = {
      0: 'md:col-span-1 md:row-span-1', // Normal size
      1: 'md:col-span-2 md:row-span-1', // Wide
      2: 'md:col-span-1 md:row-span-2', // Tall
      3: 'md:col-span-1 md:row-span-1', // Normal size
      4: 'md:col-span-2 md:row-span-2', // Large square
      5: 'md:col-span-1 md:row-span-1', // Normal size
      6: 'md:col-span-2 md:row-span-1', // Wide
      7: 'md:col-span-1 md:row-span-1', // Normal size
      8: 'md:col-span-1 md:row-span-2', // Tall
    };
    
    return patterns[index % 9] || 'md:col-span-1 md:row-span-1';
  };

  // Function to determine aspect ratio based on size class
  const getAspectRatio = (index) => {
    const sizeClass = getImageSizeClass(index);
    if (sizeClass.includes('col-span-2') && sizeClass.includes('row-span-2')) {
      return 'aspect-square';
    } else if (sizeClass.includes('col-span-2')) {
      return 'aspect-[2/1]';
    } else if (sizeClass.includes('row-span-2')) {
      return 'aspect-[1/2]';
    }
    return 'aspect-square';
  };

  if (!relevantProjects.length) {
    return null;
  }

  return (
    <div className="w-full bg-white py-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold text-navy mb-6">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {relevantProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl ${getImageSizeClass(index)}`}
            >
              <div className={`relative h-full w-full`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-1 line-clamp-2">{project.title}</h3>
                    <p className="text-sm text-gray-200 line-clamp-2">{project.description}</p>
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
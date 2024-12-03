import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = ({ data }) => {
  const [isVisible, setIsVisible] = useState(true);

  const scrollToNextSection = () => {
    const heroHeight = window.innerHeight - 80;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[calc(100vh-80px)] min-h-[400px] md:min-h-[600px] w-full">
        <div className="relative">
          {/* Image container with gradient overlay */}
          <div className="relative">
            <img 
              className="w-full object-cover h-[calc(100vh-80px)] min-h-[400px] md:min-h-[600px]" 
              src={data.backgroundImage} 
              alt={data.title}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange/70 to-navy/50" />
          </div>
          
          {/* Title with adjusted position */}
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            text-center text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl 
            font-bold z-10 px-4 w-full md:w-auto">
            {data.title}
          </h1>

          {/* Double animated scroll arrows */}
          <button
            onClick={scrollToNextSection}
            className={`absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 
              text-white transition-all duration-300 hover:translate-y-2
              ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            aria-label="Scroll to next section"
          >
            <div className="flex flex-col items-center space-y-[-0.75rem] md:space-y-[-1rem]">
              <ChevronDown 
                size={32}
                className="animate-bounce-slow md:w-12 md:h-12" 
              />
              <ChevronDown 
                size={32}
                className="animate-bounce-delayed md:w-12 md:h-12" 
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
// components/services/HeroSection.jsx
import "@/app/pageTitle.css";
import { useEffect, useState } from "react";

const HeroSection = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const displayTitle = isMobile ? data.title : data.title;

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[calc(100vh-80px)] min-h-[600px] w-full">
        <div className="the-long-way">
          <img
            className="pageImage"
            src={data.backgroundImage}
            alt={data.title}
          />
          <h1
            data-title={data.title}
            className={isMobile ? "mobile-title" : ""}
          >
            {displayTitle}
            {!isMobile && ( // Only show the wrap/split effect on desktop
              <span className="wrap" aria-hidden="true">
                <span className="split" data-letters={data.title}>
                  {data.title}
                </span>
              </span>
            )}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

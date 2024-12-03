"use client";
import React from "react";
import { usePathname } from "next/navigation";
import "@/app/pageTitle.css";

const pageTitleData = {
  "/about/about-us": {
    title: "About Us",
    mobileTitle: "About Us",
    backgroundImage: "/assets/images/page-title/14.webp",
  },
  "/about/our-guarantee": {
    title: "Our Guarantee",
    mobileTitle: "Our Guarantee",
    backgroundImage: "/assets/images/page-title/1.webp",
  },
  "/about/testimonials": {
    title: "Testimonials",
    mobileTitle: "Testimonials",
    backgroundImage: "/assets/images/page-title/2.webp",
  },
  "/about/who-we-are": {
    title: "How we work",
    mobileTitle: "How we work",
    backgroundImage: "/assets/images/page-title/3.webp",
  },
  "/about/gallery": {
    title: "Gallery",
    mobileTitle: "Gallery",
    backgroundImage: "/assets/images/page-title/4.webp",
  },
  "/house-plans": {
    title: "House Plans",
    mobileTitle: "House Plans",
    backgroundImage: "/assets/images/page-title/5.webp",
  },
  "/blog": {
    title: "Our Blog",
    mobileTitle: "Our Blog",
    backgroundImage: "/assets/images/page-title/6.webp",
  },
  "/contact/contact-us": {
    title: "Contact Us",
    mobileTitle: "Contact Us",
    backgroundImage: "/assets/images/page-title/7.webp",
  },
  "/contact/questionnaire": {
    title: "Project Questionnaire",
    mobileTitle: "Project Questionnaire",
    backgroundImage: "/assets/images/page-title/7.webp",
  },
};

const PageTitle = () => {
  const pathname = usePathname();
  const pageData = pageTitleData[pathname] || pageTitleData["/"];
  const [isMobile, setIsMobile] = React.useState(false);

  // Function to determine padding class based on title length
  const getPaddingClass = (title) => {
    return title.length < 10 ? "short-title" : "long-title";
  };

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const displayTitle = isMobile ? pageData.mobileTitle : pageData.title;

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[calc(100vh-80px)] min-h-[600px] w-full">
        <div className="the-long-way">
          <img
            className="pageImage"
            src={pageData.backgroundImage}
            alt={pageData.title}
          />
          <h1            
            data-title={pageData.title}
            className={`${isMobile ? "mobile-title" : ""} ${getPaddingClass(pageData.title)}`}
          >
            {displayTitle}
            {!isMobile && (
              <span className="wrap" aria-hidden="true">
                <span className="split" data-letters={pageData.title}>
                  {pageData.title}
                </span>
              </span>
            )}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default PageTitle;

"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

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
  "/about/how-we-work": {
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

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:block relative h-[600px] w-full overflow-hidden">
        {/* Left Side with Content and Diagonal Shape */}
        <div 
          className="absolute inset-0 w-3/5 bg-[#e67817]"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)',
          }}
        >
          {/* Content Container */}
          <div className="relative h-full flex items-center px-12 lg:px-24">
            <div className="max-w-xl">
              <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {pageData.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Right Side with Image */}
        <div className="absolute top-0 right-0 w-[60%] h-full">
          <img
            src={pageData.backgroundImage}
            alt={pageData.title}
            className="w-full h-full object-cover"
            style={{
              clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0 100%)',
            }}
          />
        </div>
      </div>

      {/* Mobile View - with centered text */}
      <div className="md:hidden relative h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            src={pageData.backgroundImage}
            alt={pageData.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center justify-center px-6">
          <div className="max-w-xl text-center">
            <h1 className="text-3xl font-bold text-white mb-4 leading-tight">
              {pageData.mobileTitle}
            </h1>
            {pathname === "/" && (
              <>
                <p className="text-white mb-6">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <Button 
                  asChild
                  className="bg-white hover:bg-gray-100 text-black font-semibold px-6 py-4 rounded-md"
                >
                  <Link href="#get-started">
                    Get Started
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
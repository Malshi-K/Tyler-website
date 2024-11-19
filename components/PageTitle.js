"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const pageTitleData = {
  "/about/our-guarantee": {
    title: "Our Guarantee",
    description: "Home / Our Guarantee",
    backgroundImage: "/assets/images/page-title/1.png",
  },
  "/about/testimonials": {
    title: "Testimonials",
    description: "Home / Testimonials",
    backgroundImage: "/assets/images/page-title/2.png",
  },
  "/about/who-we-are": {
    title: "How we work",
    description: "Home / How we work",
    backgroundImage: "/assets/images/page-title/3.png",
  },
  "/about/gallery": {
    title: "Gallery",
    description: "Home / Gallery",
    backgroundImage: "/assets/images/page-title/4.png",
  },
  "/house-plans": {
    title: "House Plans",
    description: "Home / House Plans",
    backgroundImage: "/assets/images/page-title/5.png",
  },
  "/blog": {
    title: "Our Blog",
    description: "Home / Our Blog",
    backgroundImage: "/assets/images/page-title/6.png",
  },
  "/contact/contact-us": {
    title: "Contact Us",
    description: "Home / Contact Us",
    backgroundImage: "/assets/images/page-title/7.png",
  },
  "/contact/questionniare": {
    title: "Project Questionniare",
    description: "Home / Project Questionniare",
    backgroundImage: "/assets/images/page-title/7.png",
  },
  "/services/design-build": {
    title: "Design Build",
    description: "Home / Design Build",
    backgroundImage: "/assets/images/page-title/8.png",
  },
  "/services/renovations": {
    title: "Renovations & Extensions",
    description: "Home / Renovations & Extensions",
    backgroundImage: "/assets/images/page-title/9.png",
  },
  "/services/commercial": {
    title: "Light Commercial",
    description: "Home / Light Commercial",
    backgroundImage: "/assets/images/page-title/10.png",
  },
  "/services/new-builds": {
    title: "New Builds",
    description: "Home / New Builds",
    backgroundImage: "/assets/images/page-title/11.png",
  },
  "/services/bathrooms-kitchens": {
    title: "Bathrooms & Kitchens",
    description: "Home / Bathrooms & Kitchens",
    backgroundImage: "/assets/images/page-title/12.png",
  },
  "/services/decks-fences": {
    title: "Decks & Fences",
    description: "Home / Decks & Fences",
    backgroundImage: "/assets/images/page-title/13.png",
  },
};

const PageTitle = () => {
  const pathname = usePathname();
  const pageData = pageTitleData[pathname] || pageTitleData["/"];

  return (
    <div className="relative w-full">
      {/* Header spacer - dark navy color matching the screenshot */}

      {/* Main hero section */}
      <div className="relative h-[calc(100vh-80px)] min-h-[600px] w-full">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <Image
            src={pageData.backgroundImage}
            alt="Background"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0" />
        </div>

        <div className="h-[40px]" />

        {/* Content container */}
        <div className="relative h-full max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col justify-center h-full max-w-3xl">
            {/* Description - using lighter opacity for subtle text */}
            <p className="text-lg text-orange mb-5 max-w-2xl">
              {pageData.description}
            </p>
            {/* Title - using gray color as seen in the screenshot */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-navy whitespace-pre-line leading-tight">
              {pageData.title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;

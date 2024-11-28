import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="relative bg-navy/90 text-gray-100">
        <div className="absolute inset-0 bg-navy/60 z-0"></div>

        <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-5 gap-8 xl:gap-12">
            {/* Company Logo - Responsive sizing */}
            <div className="xs:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-start space-y-4">
              <div className="relative w-[140px] h-[60px] sm:w-[150px] sm:h-[50px] md:w-[180px] md:h-[60px]">
                <Image
                  src="/assets/images/logo.webp"
                  alt="T.Wilson Builders"
                  fill
                  sizes="(max-width: 660px) 120px, (max-width: 770px) 150px, 180px"
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
                NAVIGATION
                <span className="absolute bottom-0 left-1/2 lg:left-0 w-12 h-0.5 bg-orange-500 -mb-2 transform -translate-x-1/2 lg:translate-x-0"></span>
              </h3>
              <nav className="flex flex-col items-center lg:items-start space-y-3">
                {[
                  { text: "Home", path: "/home" },
                  { text: "About Us", path: "/about/our-guarantee" },
                  { text: "House Plans", path: "/house-plans" },
                  { text: "Our Blogs", path: "/our-blogs" },
                ].map((item) => (
                  <Link
                    key={item.text}
                    href={item.path}
                    className="text-gray-100 hover:text-orange-500 transition-colors font-medium text-center lg:text-left"
                  >
                    {item.text}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
                SERVICES
                <span className="absolute bottom-0 left-1/2 lg:left-0 w-12 h-0.5 bg-orange-500 -mb-2 transform -translate-x-1/2 lg:translate-x-0"></span>
              </h3>
              <nav className="flex flex-col items-center lg:items-start space-y-3">
                {[
                  "Design & Build",
                  "Renovations & Extensions",
                  "Light Commercial",
                  "New Builds",
                  "Bathrooms & Kitchens",
                  "Decks & Fences",
                ].map((service) => (
                  <Link
                    key={service}
                    href={`/services/${service
                      .toLowerCase()
                      .replace(/ & /g, "-")
                      .replace(/ /g, "-")}`}
                    className="text-gray-100 hover:text-orange-500 transition-colors font-medium text-center lg:text-left whitespace-nowrap"
                  >
                    {service}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
                GET IN TOUCH
                <span className="absolute bottom-0 left-1/2 lg:left-0 w-12 h-0.5 bg-orange-500 -mb-2 transform -translate-x-1/2 lg:translate-x-0"></span>
              </h3>
              <div className="flex flex-col items-center lg:items-start space-y-4">
                <div className="text-center lg:text-left">
                  <p className="font-bold text-white">Phone:</p>
                  <a
                    href="tel:0224197176"
                    className="text-gray-100 hover:text-orange-500 transition-colors"
                  >
                    0224197176
                  </a>
                </div>
                <div className="text-center lg:text-left">
                  <p className="font-bold text-white">Email:</p>
                  <a
                    href="mailto:tyler@twilsonbuilder.co.nz"
                    className="text-gray-100 hover:text-orange-500 transition-colors break-all"
                  >
                    tyler@twilsonbuilder.co.nz
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-white text-lg font-bold mb-6 relative inline-block">
                FOLLOW US
                <span className="absolute bottom-0 left-1/2 lg:left-0 w-12 h-0.5 bg-orange-500 -mb-2 transform -translate-x-1/2 lg:translate-x-0"></span>
              </h3>
              <div className="flex gap-4">
                {[
                  {
                    Icon: Facebook,
                    url: "https://www.facebook.com/twilsonbuilders/",
                    label: "Facebook",
                  },
                  {
                    Icon: Instagram,
                    url: "https://www.instagram.com/twilsonbuilders/",
                    label: "Instagram",
                  },
                  {
                    Icon: Youtube,
                    url: "https://www.youtube.com/watch?v=wK6aKXu5NbE",
                    label: "YouTube",
                  },
                ].map(({ Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 transition-colors"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={24} className="text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Bar */}
      <div className="bg-orange text-gray-300 py-4 text-sm relative z-10">
        <div className="container mx-auto px-4">
          <p className="text-center">
            Copyright © {currentYear}{" "}
            <Link
              href="https://www.gdcdigital.net/"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GDC Digital Solutions
            </Link>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

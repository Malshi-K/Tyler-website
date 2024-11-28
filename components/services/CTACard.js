import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const CTACard = ({ data }) => {
  return (
    <div className="py-6 sm:py-8 md:py-10">
      <div className="w-full flex items-center justify-center p-2 sm:p-4">
        <Link
          href="/contact/contact-us"
          className="w-full max-w-[1000px] block transition-transform hover:scale-[1.02] duration-300"
        >
          <Card className="relative overflow-hidden border-0 rounded-lg sm:rounded-xl w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] cursor-pointer hover:shadow-xl transition-shadow duration-300">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 h-full w-full transition-transform duration-300 hover:scale-105"
              style={{
                backgroundImage: `url('/assets/images/services/CTA.webp')`,
                objectFit: 'cover'
              }}
            />

            {/* Dark overlay with gradient */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-orange/90 via-orange/70 to-transparent sm:from-orange/80 sm:via-orange/60 z-10" 
            />

            <CardContent className="relative h-full z-20 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
              <div className="max-w-full sm:max-w-[80%] md:max-w-[70%]">
                {/* Heading */}
                <h3 className="text-navy sm:text-center lg:text-left text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
                  {data.title}
                </h3>
                <h5 className="text-white sm:text-center lg:text-left text-lg sm:text-xl md:text-2xl leading-snug">
                  {data.description}
                </h5>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default CTACard;
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const CTACard = ({ data }) => {
  return (
    <div className="py-6 sm:py-8 md:py-10">
      <div className="w-full flex items-center justify-center p-2 sm:p-4">
        <Card className="relative overflow-hidden border-0 rounded-lg sm:rounded-xl w-full max-w-[1000px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] hover:shadow-xl transition-shadow duration-300">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0 h-full w-full"
            style={{
              backgroundImage: `url('/assets/images/services/CTA.webp')`,
              objectFit: 'cover'
            }}
          />

          {/* Dark overlay with gradient */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-orange/90 via-orange/70 to-transparent sm:from-orange/80 sm:via-orange/60 z-10" 
          />

          <CardContent className="relative h-full z-20 p-4 sm:p-6 md:p-8 flex items-center justify-center">
            <div className="flex flex-col gap-4">
              <div className="max-w-full sm:max-w-[80%] md:max-w-[70%]">
                {/* Heading */}
                <h3 className="text-navy sm:text-center lg:text-left text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                  {data.title}
                </h3>
                <h5 className="text-white sm:text-center lg:text-left text-lg sm:text-xl md:text-2xl leading-snug">
                  {data.description}
                </h5>
              </div>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:0224197176"
                  className="flex items-center justify-center gap-2 bg-white text-navy hover:bg-navy hover:text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>022 419 7176</span>
                </a>
                
                <a
                  href="mailto:tyler@twilsonbuilder.co.nz"
                  className="flex items-center justify-center gap-2 bg-white text-navy hover:bg-navy hover:text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CTACard;
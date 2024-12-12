import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const CTACard = ({ data }) => {
  return (
    <div className="w-full py-4 md:py-6 lg:py-8">
      <div className="px-4 md:px-6 lg:px-8 mx-auto max-w-7xl">
        <Card className="relative overflow-hidden border-0 rounded-lg lg:rounded-xl w-full max-w-[1000px] mx-auto min-h-[200px] md:min-h-[300px] lg:min-h-[400px] hover:shadow-xl transition-shadow duration-300">
          {/* Background image with better responsive handling */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('/assets/images/services/CTA.webp')`,
              backgroundSize: "cover",
            }}
          />

          {/* Improved gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-orange/90 to-transparent 
            md:from-orange/80 md:via-orange/60 md:to-transparent z-10"
          />

          <CardContent className="relative h-full z-20 p-4 md:p-6 lg:p-8">
            <div className="flex flex-col justify-center h-full space-y-6">
              {/* Content container with better spacing */}
              <div className="w-full md:max-w-[80%] lg:max-w-[70%] space-y-4">
                <h3 className="text-navy text-xl md:text-2xl lg:text-4xl font-bold">
                  {data.title}
                </h3>
                <h5 className="text-white text-base md:text-xl lg:text-2xl leading-relaxed">
                  {data.description}
                </h5>
              </div>

              {/* Responsive button container */}
              <div className="flex flex-col xs:flex-row gap-3 md:gap-4 w-full md:w-auto">
                <a
                  href="tel:0224197176"
                  className="flex items-center justify-center gap-2 bg-white text-navy hover:bg-navy hover:text-white 
                  px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors duration-300 font-semibold text-sm md:text-base"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  <span>022 419 7176</span>
                </a>

                <a
                  href="mailto:tyler@twilsonbuilder.co.nz"
                  className="flex items-center justify-center gap-2 bg-white text-navy hover:bg-navy hover:text-white 
                  px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors duration-300 font-semibold text-sm md:text-base"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
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

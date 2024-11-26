import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const CTACard = () => {
  return (
    <div className="py-10">
      <div className="w-full flex items-center justify-center p-4">
        <Card className="relative overflow-hidden border-0 rounded-xl w-full max-w-[900px]">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('/assets/images/services/CTA.png')`,
            }}
          />

          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange/80 via-orange/60 to-transparent z-10" />

          <CardContent className="relative h-full z-20 p-8 flex flex-col justify-center">
            <div className="max-w-[70%]">
              {/* Heading */}
              <h3 className="text-navy text-2xl md:text-3xl font-bold mb-2">
                Let’s Get Started
              </h3>
              <p className="text-white">
                If you’re ready to create a new home, renovate, or build a
                commercial space, we’re here to help. Contact T. Wilson Builders
                today, and let’s work together to make your vision a reality.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CTACard;

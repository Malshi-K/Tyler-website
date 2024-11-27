import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const CTACard = () => {
  return (
    <div className="py-10">
      <div className="w-full flex items-center justify-center p-4">
        <Link
          href="/contact/contact-us"
          className="w-full max-w-[1000px] block transition-transform hover:scale-[1.02] duration-300"
        >
          <Card className="relative overflow-hidden border-0 rounded-xl w-full h-[400px] cursor-pointer hover:shadow-xl transition-shadow duration-300">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 h-full w-full"
              style={{
                backgroundImage: `url('/assets/images/services/CTA.png')`,
                objectFit: 'cover'
              }}
            />

            {/* Dark overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange/80 via-orange/60 to-transparent z-10" />

            <CardContent className="relative h-full z-20 p-8 flex flex-col justify-center">
              <div className="max-w-[80%]">
                {/* Heading */}
                <h3 className="text-navy text-4xl md:text-6xl font-bold mb-2">
                  Let's Get Started
                </h3>
                <h5 className="text-white text-xl">
                  If you're ready to create a new home, renovate, or build a
                  commercial space, we're here to help. Contact T. Wilson
                  Builders today, and let's work together to make your vision a
                  reality.
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
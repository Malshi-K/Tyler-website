"use client";
import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const ExperienceSection = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const targetCount = 12;
    const duration = 2000;
    const steps = 60;
    const increment = targetCount / steps;
    let currentCount = 0;

    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-white">
      {/* Diagonal Background Image */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div
          className="absolute top-0 right-0 w-1/2 h-full"
          style={{
            background: `url('/assets/images/background/pattern-1.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(100% 0, 100% 100%, 0 100%, 20% 0)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 py-20 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content - Removed bg-white class */}
          <div className="space-y-8">
            {/* Counter Box */}
            <div className="flex items-start gap-8">
              <div className="p-4 shadow-lg inline-flex">
                <span className="text-orange text-8xl font-bold">{count}</span>
              </div>
              <div className="pt-4">
                <h2 className="text-4xl font-bold text-navy mb-2">
                  YEARS OF EXPERIENCE
                </h2>
                <p className="text-xl text-orange">IN THIS INDUSTRY</p>
              </div>
            </div>

            <div className="relative">
              <h3 className="text-4xl font-bold text-navy">
                About T Wilson Builders
              </h3>
              <div className="relative mt-4">
                <div className="absolute left-0 w-24 h-1 bg-orange" />{" "}
                {/* Main line */}
                <div className="absolute left-0 w-12 h-1 bg-orange/30 my-2" />{" "}
                {/* Optional second line for layered effect */}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed">
              T. Wilson Builders in Hamilton have over 12 years experience in
              the building and construction industries and provide all levels of
              carpentry work with friendly professional service and an easy
              going team. We are a small, personal company with a big reputation
              for friendly, professional service and high quality workmanship.
              <br />
              We ensure that our client’s needs are always met. Building your
              dream house shouldn’t be a nightmare and doing it right costs less
              than doing it over! <br />
              At T.Wilson Builders we provide quality you deserve and
              dependability you can count on. As a certified and Licensed
              Builder you can be assured your job will be done right and take
              pride in creating results you can be proud of.
            </p>

            {/* Signature and Contact */}
            <div className="flex items-center justify-between">
              <div className="space-y-4">
                <a href="/about" className="inline-block">
                  <button className="bg-navy text-white px-8 py-3 rounded-full hover:bg-navy/90 transition-colors duration-300">
                    Learn More
                  </button>
                </a>
              </div>

              <div className="text-right">
                <p className="text-gray-600 mb-2">Hotline</p>
                <a
                  href="tel:+6433668455"
                  className="flex items-center justify-end gap-2 text-2xl font-semibold text-navy hover:text-orange transition-colors duration-300"
                >
                  <Phone className="h-6 w-6" />
                  +64 33 668 455
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <img
                src="/assets/images/team.jpg"
                alt="Team"
                className="object-cover w-full h-full"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;

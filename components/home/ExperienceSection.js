"use client";
import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ExperienceSection = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const targetCount = 20;
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
          className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 md:opacity-100"
          style={{
            background: `url('/assets/images/background/pattern-1.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0)",
            '@media (min-width: 768px)': {
              clipPath: "polygon(100% 0, 100% 100%, 0 100%, 20% 0)",
            },
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Counter Box */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8">
              <div className="p-3 sm:p-4 shadow-lg inline-flex">
                <span className="text-6xl sm:text-7xl md:text-8xl text-orange font-bold">{count}</span>
              </div>
              <div className="text-center sm:text-left sm:pt-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-2">
                  YEARS OF EXPERIENCE
                </h2>
                <p className="text-lg sm:text-xl text-orange">IN THIS INDUSTRY</p>
              </div>
            </div>

            {/* Title Section */}
            <div className="relative">
              <h3 className="text-3xl sm:text-4xl font-bold text-navy text-center sm:text-left">
                About T.Wilson Builders
              </h3>
              <div className="relative mt-4 flex justify-center sm:justify-start">
                <div className="absolute w-24 h-1 bg-orange" />
                <div className="absolute w-12 h-1 bg-orange/30 my-2" />
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              T. Wilson Builders in Hamilton have over 20 years experience in
              the building and construction industries and provide all levels of
              carpentry work with friendly professional service and an easy
              going team. We are a small, personal company with a big reputation
              for friendly, professional service and high quality workmanship.
              <br className="hidden sm:block" /><br />
              We ensure that our client&apos;s needs are always met. Building your
              dream house shouldn&apos;t be a nightmare and doing it right costs less
              than doing it over!
              <br className="hidden sm:block" /><br />
              At T.Wilson Builders we provide quality you deserve and
              dependability you can count on. As a certified and Licensed
              Builder you can be assured your job will be done right and take
              pride in creating results you can be proud of.
            </p>

            {/* Signature and Contact */}
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-0 sm:justify-between">
              <div>
                <Link href="/about/our-guarantee">
                  <button className="w-full sm:w-auto bg-navy text-white px-6 sm:px-8 py-3 rounded-full hover:bg-navy/90 transition-colors duration-300">
                    Learn More
                  </button>
                </Link>
              </div>

              <div className="text-center sm:text-right">
                <p className="text-gray-600 mb-2">Phone</p>
                <Link
                  href="tel:+64224197176"
                  className="flex items-center justify-center sm:justify-end gap-2 text-xl sm:text-2xl font-semibold text-navy hover:text-orange transition-colors duration-300"
                >
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  0224197176
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative mt-8 md:mt-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/assets/images/team.webp"
                alt="Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
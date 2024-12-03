"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="relative">
      {/* Diagonal Background Image */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div
          className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 md:opacity-100"
          style={{
            background: `url('/assets/images/background/pattern-1.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0)",
            "@media (min-width: 768px)": {
              clipPath: "polygon(100% 0, 100% 100%, 0 100%, 20% 0)",
            },
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Counter Box */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8">
              <div className="text-center sm:text-left sm:pt-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-2">
                  Tyler Wilson
                </h2>
                <p className="text-lg sm:text-xl text-orange">
                  Director / Builder
                </p>
                <div className="relative mt-4 flex justify-center sm:justify-start">
                  <div className="absolute w-24 h-1 bg-orange" />
                  <div className="absolute w-12 h-1 bg-orange/50 my-2" />
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              Tyler spent most of his childhood on the Kapiti coast, so the
              beach has always been his second home. Playing softball in summer
              and rugby in winter from the age of 5, like all young boys he
              worked hard at his aim to become an All Black. At the age of 11
              Tyler and his family relocated to Hamilton to be closer to the
              extended family.
              <br className="hidden sm:block" />
              <br />
              Realising early on that school wasn’t for him, in 2003 Tyler
              seized the opportunity to do a building apprenticeship that gave
              him intensive one-on-one training and extensive experience. With
              his boss specialising in spec houses, he got to learn a wide
              variety of skills. Tyler had found his vocation and his passion:
              the combination of being hands on and building houses was a
              perfect fit. He loved seeing the finished product and developed a
              keen eye for detail. His passion grew with experience.
              <br className="hidden sm:block" />
              <br />
              As soon as he had completed his apprenticeship in 2009, Tyler
              packed his bags and headed over the ditch, as many Kiwis do, with
              chasing the money and travelling experiences high on his agenda.
              <br className="hidden sm:block" />
              <br />
              After many years in high-rise construction he worked his way up to
              the role of supervisor, travelling widely on his weeks off. In
              2015 Tyler and his partner knew it was time to move back to the
              Waikato to be nearer to family and start their own. To support his
              growing family Tyler started his own building company, The timing
              was perfect: word of mouth referrals and the building industry
              boom mean he has not looked back.
              <br className="hidden sm:block" />
              <br />
              Tyler’s passion for building is very evident at every stage of a
              project. His strong work ethics and family values fuel his
              determination to provide an exceptional product and exceptional
              service. He has surrounded himself with a great team in whom he
              has absolute trust and has created a hard-working and enjoyable
              work culture. Communication has always been number one for Tyler
              and his team, which makes the building process both easy and
              enjoyable.
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="relative mt-8 md:mt-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/assets/images/about/1.webp"
                alt="Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

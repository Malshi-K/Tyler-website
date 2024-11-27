"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Via Helen No Cowboys",
      title: "Home Improvement",
      quote:
        "Listened to what the Customer wanted. Work done to a high Standard. Honest and Polite. Communication: 100%, Quality: 100%, Reliability: 100%, Value: 100%",
    },
    {
      id: 2,
      name: "Via Brendon No Cowboys",
      title: "Deck Renovation",
      quote:
        "Excellent workmanship by Tyler and co-workers Work done perfectly and to our specifications Tyler had to clean up some sub-standard work done by a previous builder and did a great job before he could start his own Highly recommend",
    },
    {
      id: 3,
      name: "Katherine, Builderscrack",
      title: "Bathroom Renovation",
      quote:
        "I am pleased to report that Tyler and his team have done a very good job. The standard has been of a high standard. The work has been done in a timely fashion. I would be happy to recommend Tyler to any prospective customer. I wish Tyler and his team all the very best in the future.",
    },
    {
      id: 4,
      name: "Via Lana, Builderscrack",
      title: "Renovation Project",
      quote:
        "Nice guy Easy to talk with about any changes or extra needs. Tyler was very accommodating. Notified me very early regarding time lines because of issues with other jobs. Very apologetic when building material deliveries were late arriving. Clearly has high expectations of his finished protect. I highly recommend!!",
    },
    {
      id: 5,
      name: "Via Ray, No cowboys.",
      title: "Communiation 100%, Quality 100%, Reliabilty 100%",
      quote:
        "Excellent prompt service and I would highly recommend T.Wilson Builders to anyone looking to find a professional builder with a honest , positive attitude and delivers awesome results in his workmanship.",
    },
    {
      id: 6,
      name: "Via Gary, No cowboys.",
      title: "Concrete Laying",
      quote:
        "We recently hired the services of Tyler Wilson to lay a very large concrete slab in our back garden where we wanted to store our new caravan. We can unequivocally say that we were very impressed with his professionalism and his attention to detail. He was totally in control of the whole operation and the completed project finished up better than we could have imagined, and on time. We would have absolutely no hesitation in recommending Tyler for any project asked of him. There are no hidden costs; what he quotes and what you pay are the same regardless. He is utterly reliable, he listens to his client and 'goes the extra mile' to ensure his client is completely and absolutely happy with his service.",
    },
    {
      id: 7,
      name: "Via John, No cowboys.",
      title: "Deck and Pergola Renovation",
      quote:
        "Couldn't be happier with Tylers work, we wanted a deck and pergola built for us in a short time frame and he did exactly that. The workmanship and quality is second to none and we absolutely love it! I would recommend Tyler to anyone and everyone, we will definitely be using him again in the future.",
    },
    {
      id: 8,
      name: "Via Ross, No cowboys.",
      title: "New Deck Build",
      quote:
        "Really impressed with Tylers workmanship and eye for detail. Got exactly what we asked for an more. Would definitely recommend to anyone wanting a deck added to their home.",
    },
    {
      id: 9,
      name: "Via Carolyn, No Cowboys",
      title: "Several projects in Hamilton",
      quote:
        "Extremely happy with the service provided by T Wilson Builders. Several projects completed around our home on time and at quoted price. Every attempt to recycle would could be reused was done as requested.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative py-20 px-8">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/background/pattern-4.png"
          alt="background"
          fill
          sizes="100vw"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/90" />
        {/* Pattern Overlay - Optional */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('/assets/images/background/pattern-1.png')`,
            backgroundRepeat: "repeat",
            backgroundSize: "100px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-orange mb-4">This is why</h3>
          <h2 className="text-4xl font-bold text-white mb-4">
            We do what we do!
          </h2>
          <div className="flex items-center justify-center gap-1">
            <div className="w-16 h-[1px] bg-white/20"></div>
            <div className="w-4 h-1 bg-orange"></div>
            <div className="w-16 h-[1px] bg-white/20"></div>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              {/* Quote Icon */}
              <div className="absolute -left-4 -top-4 text-6xl text-orange/40 font-serif">
                &ldquo;
              </div>

              {/* Testimonial Text */}
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-white text-center">
                  {testimonials[currentSlide].title}
                </h4>
                <p className="text-white/90 text-lg leading-relaxed italic text-center">
                  {testimonials[currentSlide].quote}
                </p>

                {/* Client Info */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-orange text-center">
                    {testimonials[currentSlide].name}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
                  text-white hover:border-orange hover:text-orange transition-colors duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
                  text-white hover:border-orange hover:text-orange transition-colors duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
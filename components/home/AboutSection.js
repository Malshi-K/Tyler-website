"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React, { useEffect, useState, useRef } from "react";

const Counter = ({ end, duration = 2000, prefix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const startTime = Date.now();
    const endValue = parseInt(end);

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuad = (t) => t * (2 - t);
      const currentValue = Math.floor(easeOutQuad(progress) * endValue);

      setCount(currentValue);

      if (progress < 1) {
        countRef.current = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    countRef.current = requestAnimationFrame(animate);

    return () => {
      if (countRef.current) {
        cancelAnimationFrame(countRef.current);
      }
    };
  }, [end, duration]);

  return (
    <span>
      {count}
      {prefix}
    </span>
  );
};

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: "20",
      title: "Years in the Building Industry",
    },
    {
      number: "6",
      title: "Services Provided",
    },
    {
      number: "100",
      title: "Projects Completed",
      prefix: "+",
    },
  ];

  const questions = [
    {
      question: "Quality Assurance",
      answer:
        "We go above and beyond the minimum required standards to give you a top-quality job. We offer a 10-year Halo Residential Guarantee and for your added security carry out our own quality assurance checks. This ensures that all our workmanship (including our sub-contractors) meets our high standards throughout the entirety of your job.",
    },
    {
      question: "Our Team Culture",
      answer:
        "A small, professional team will work with you throughout your project who will know exactly what's happening and where the project is at. We employ only the best tradesmen and sub-contractors, and you'll get to know them well. Some of the strict standards we adhere to and which you can expect include:",
    },
    {
      question: "Communication",
      answer:
        "The number of tradespeople and professionals involved in a building project can be a bit daunting. At T. Wilson Builders, Tyler and his team have a strong people-focused culture and strive always to coordinate your project with clarity, thereby reducing the potential for chaos.",
    },
  ];

  return (
    <div className="relative w-full">
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Stats Section */}
          <div
            ref={sectionRef}
            className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-neutral-900 text-white"
          >
            <div className="absolute inset-0 bg-[url('/assets/images/image-1.webp')] opacity-50 bg-cover bg-center" />
            <div className="relative z-10 h-full flex items-center">
              <div className="w-full px-4 sm:px-8 md:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-16 sm:gap-y-20">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="relative opacity-0 transition-opacity duration-500 text-center sm:text-left"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transitionDelay: `${index * 200}ms`,
                      }}
                    >
                      <h3 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 sm:mb-8">
                        {isVisible && (
                          <Counter
                            end={stat.number}
                            duration={2000}
                            prefix={stat.prefix}
                          />
                        )}
                      </h3>
                      <div className="absolute left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 -bottom-4 w-12 sm:w-16 h-0.5 bg-orange-500" />
                      <p className="text-gray-200 mt-6 sm:mt-8 text-sm sm:text-base leading-tight max-w-[180px] mx-auto sm:mx-0">
                        {stat.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="py-8 sm:py-10">
            <div className="bg-gray-100 p-4 sm:p-6 md:p-8 rounded-lg">
              <div className="space-y-4 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-orange">
                  Why choose
                </h3>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                  T.Wilson Builders?
                </h2>
                <div className="relative h-4">
                  <div className="absolute left-0 w-20 sm:w-24 h-1 bg-orange" />
                  <div className="absolute left-0 w-10 sm:w-12 h-1 bg-orange/50 mt-2" />
                </div>
              </div>

              <Accordion type="single" collapsible className="space-y-3">
                {questions.map((q, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-lg bg-white"
                  >
                    <AccordionTrigger className="px-4 sm:px-6 py-4 text-sm sm:text-base font-medium text-slate-900 hover:text-orange-700">
                      {q.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 sm:px-6 pb-4 text-sm sm:text-base text-slate-700">
                      {q.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

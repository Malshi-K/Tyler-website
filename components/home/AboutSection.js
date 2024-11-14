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
      number: "12",
      title: "Years in the Building Industry",
      prefix: "+",
    },
    {
      number: "5",
      title: "Services Provided",
    },
    {
      number: "20",
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
      <div className="container">
        <div className="grid md:grid-cols-2">
          {/* Stats Section */}
          <div
            ref={sectionRef}
            className="relative w-full h-[600px] bg-neutral-900 text-white"
          >
            <div className="absolute inset-0 bg-[url('/assets/images/image-1.jpg')] opacity-50 bg-cover bg-center" />
            <div className="relative z-10 h-full flex items-center">
              <div className="w-full px-12">
                <div className="grid grid-cols-2 gap-x-16 gap-y-20">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="relative opacity-0 transition-opacity duration-500"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transitionDelay: `${index * 200}ms`,
                      }}
                    >
                      <h3 className="text-7xl font-bold text-white mb-8">
                        {isVisible && (
                          <Counter
                            end={stat.number}
                            duration={2000}
                            prefix={stat.prefix}
                          />
                        )}
                      </h3>
                      <div className="absolute left-0 -bottom-4 w-16 h-0.5 bg-orange-500" />
                      <p className="text-gray-200 mt-8 text-base leading-tight max-w-[180px]">
                        {stat.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="py-10">
            <div className="bg-gray-50 p-6">
              <h3 className="text-2xl font-bold text-orange-500 mb-2">
                Why choose
              </h3>
              <h2 className="text-4xl font-bold text-navy mb-2">
                T.Wilson Builders ?
              </h2>
              <div className="relative mb-6">
                <div className="absolute left-0 w-24 h-1 bg-orange-500" />
                <div className="absolute left-0 w-12 h-1 bg-orange-500/30 my-2" />
              </div>

              <Accordion type="single" collapsible>
                {questions.map((q, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="shadow-sm border border-gray-100"
                  >
                    <AccordionTrigger>{q.question}</AccordionTrigger>
                    <AccordionContent>{q.answer}</AccordionContent>
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

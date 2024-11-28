"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";

const Section2 = ({ data }) => {
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

  // Transform the data structure
  const questions = data?.section2
    ? Object.entries(data.section2.question).map(([key, question]) => ({
        question,
        points: data.section2.answer[key]?.points || []
      }))
    : [];

  return (
    <div 
      className="relative w-full px-4 sm:px-6 md:px-8 lg:px-20" 
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <div className="py-6 sm:py-8 md:py-10">
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
            {/* Header Section */}
            <div className="space-y-2 mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-orange-500">
                Why choose
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy">
                T.Wilson Builders ?
              </h2>
              <div className="relative h-6">
                <div className="absolute left-0 w-16 sm:w-24 h-1 bg-orange-500" />
                <div className="absolute left-0 w-8 sm:w-12 h-1 bg-orange-500/30 my-2" />
              </div>
            </div>

            {/* Accordion Section */}
            {questions && questions.length > 0 ? (
              <Accordion 
                type="single" 
                collapsible 
                className="space-y-2 sm:space-y-4"
              >
                {questions.map((q, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white shadow-sm border border-gray-100 rounded-md overflow-hidden"
                  >
                    <AccordionTrigger className="px-3 sm:px-4 py-2 sm:py-3 hover:bg-gray-50 text-sm sm:text-base text-left">
                      {q.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-3 sm:px-4 py-2 sm:py-3">
                      <div className="space-y-2 sm:space-y-3">
                        {q.points.map((point, pointIndex) => (
                          <div 
                            key={pointIndex} 
                            className="flex items-start gap-2"
                          >
                            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <p className="text-sm sm:text-base text-gray-700">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <p className="text-sm sm:text-base text-gray-600">
                Check back soon for frequently asked questions about our services.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
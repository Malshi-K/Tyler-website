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
    <div className="relative w-full px-20" ref={sectionRef}>
      <div className="container">
        <div>
          <div className="py-10">
            <div className="bg-gray-50 p-6 rounded-lg">
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

              {questions && questions.length > 0 ? (
                <Accordion type="single" collapsible className="space-y-4">
                  {questions.map((q, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-white shadow-sm border border-gray-100 rounded-md overflow-hidden"
                    >
                      <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                        {q.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-3">
                        <div className="space-y-3">
                          {q.points.map((point, pointIndex) => (
                            <div key={pointIndex} className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-700">{point}</p>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <p className="text-gray-600">
                  Check back soon for frequently asked questions about our services.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
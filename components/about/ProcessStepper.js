"use client";
import React, { useState, useEffect } from "react";
import {
  HandshakeIcon,
  Users,
  Paintbrush,
  ScrollText,
  FileSignature,
  HardHat,
  CheckSquare,
} from "lucide-react";

const ProcessStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "First Initial Contact",
      icon: <HandshakeIcon className="w-5 h-5" />,
    },
    {
      id: 1,
      title: "Consultion process",
      icon: <Users className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Design & Concept",
      icon: <Paintbrush className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "Drawings & Specifications",
      icon: <ScrollText className="w-5 h-5" />,
    },
    {
      id: 4,
      title: "Fixed price quote and contracts",
      icon: <FileSignature className="w-5 h-5" />,
    },
    {
      id: 5,
      title: "Construction Begins",
      icon: <HardHat className="w-5 h-5" />,
    },
    {
      id: 6,
      title: "Job Complete",
      icon: <CheckSquare className="w-5 h-5" />,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2" />

        {/* Animated Progress */}
        <div
          className="absolute top-1/2 left-0 h-1 bg-orange-500 -translate-y-1/2 transition-all duration-500 ease-in-out"
          style={{
            width: `${(currentStep / (steps.length - 1)) * 100}%`,
          }}
        />

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center group">
              {/* Circle */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 
                  ${
                    index <= currentStep
                      ? "border-orange-500 bg-orange-500 text-white"
                      : "border-gray-300 bg-white text-gray-500"
                  }`}
              >
                {step.icon}
              </div>

              {/* Title */}
              <div
                className={`mt-2 text-sm font-medium transition-all duration-500 text-center max-w-[120px]
                  ${
                    index <= currentStep ? "text-orange-500" : "text-gray-500"
                  }`}
              >
                {step.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessStepper;

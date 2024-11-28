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
      icon: <HandshakeIcon className="w-4 h-4 md:w-5 md:h-5" />,
    },
    {
      id: 1,
      title: "Consultion process",
      icon: <Users className="w-4 h-4 md:w-5 md:h-5" />,
    },
    {
      id: 2,
      title: "Design & Concept",
      icon: <Paintbrush className="w-4 h-4 md:w-5 md:h-5" />,
    },
    {
      id: 3,
      title: "Drawings & Specifications",
      icon: <ScrollText className="w-4 h-4 md:w-5 md:h-5" />,
    },
    {
      id: 4,
      title: "Fixed price quote and contracts",
      icon: <FileSignature className="w-4 h-4 md:w-5 md:h-5" />,
    },
    {
      id: 5,
      title: "Construction Begins",
      icon: <HardHat className="w-4 h-4 md:w-5 md:h-5" />,
    },
    {
      id: 6,
      title: "Job Complete",
      icon: <CheckSquare className="w-4 h-4 md:w-5 md:h-5" />,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
      {/* Mobile View (Vertical Layout) */}
      <div className="md:hidden relative">
        <div className="absolute left-6 top-0 w-1 h-full bg-gray-200" />
        <div
          className="absolute left-6 top-0 w-1 bg-orange-500 transition-all duration-500 ease-in-out"
          style={{
            height: `${(currentStep / (steps.length - 1)) * 100}%`,
          }}
        />
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex items-center gap-4 relative pl-16"
            >
              <div
                className={`absolute left-4 w-4 h-4 rounded-full border-2 transition-all duration-500 
                ${
                  index <= currentStep
                    ? "border-orange-500 bg-orange-500"
                    : "border-gray-300 bg-white"
                }`}
              />
              <div
                className={`flex flex-col transition-all duration-500
                ${index <= currentStep ? "text-orange-500" : "text-gray-500"}`}
              >
                <div className="text-sm font-medium">{step.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View (Horizontal Layout) */}
      <div className="hidden md:block relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2" />
        <div
          className="absolute top-1/2 left-0 h-1 bg-orange-500 -translate-y-1/2 transition-all duration-500 ease-in-out"
          style={{
            width: `${(currentStep / (steps.length - 1)) * 100}%`,
          }}
        />
        <div className="relative flex justify-between">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="group flex flex-col items-center"
              style={{ 
                flex: index === 0 || index === steps.length - 1 ? '0 0 auto' : '1 1 0' 
              }}
            >
              <div
                className={`w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 
                ${
                  index <= currentStep
                    ? "border-orange-500 bg-orange-500 text-white"
                    : "border-gray-300 bg-white text-gray-500"
                }`}
              >
                {step.icon}
              </div>
              <div
                className={`mt-2 text-xs lg:text-sm font-medium transition-all duration-500 text-center max-w-[100px] lg:max-w-[120px]
                ${index <= currentStep ? "text-orange-500" : "text-gray-500"}`}
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
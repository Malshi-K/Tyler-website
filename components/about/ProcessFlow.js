"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ProcessFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "First Initial Contact",
      description:
        "We understand that your time is valuable, so we will promptly phone you to book a no-obligation meeting. In addition, we will send you an email with a few valuable questions that help get us on the same page with the vision you have and gives us a background of your project ideas. This also allows us to get a scope of job requirements and if council permits and consents etc are needed.  Ensuring our first meeting runs smoothly, efficiently and covers everything.",
      imageSrc: "/assets/images/process/1.jpg",
    },
    {
      id: 2,
      title: "Consultation Process",
      description:
        "We will have a meeting with you at your home to further discuss your project and go through the completed questionnaire in more detail. At this stage we will be able to go through complete process and let you know  if council processes are needed as smaller jobs may not require Council consents or permits. We'll ask further questions about any of your specific needs and requirements for the entire duration of the project. At this time we look more extensively at the brief and the scope of work required and any other available information that you would like to discuss.",
      imageSrc: "/assets/images/process/2.jpg",
    },
    {
      id: 3,
      title: "Design & Concept",
      description:
        "From the information gathered at the consultation we'll provide a concept design. If needed for your job, our designer will then put your dreams onto paper. Once concept is finalised, we'll use to provide you with a cost estimate.",
      imageSrc: "/assets/images/process/3.jpg",
    },
    {
      id: 4,
      title: "Drawings & Specifications",
      description:
        "Once the estimate is accepted, we'll give our designer the go ahead to turn your concepts into full working drawings and specifications. We can then book your project in and give you an estimated start date.",
      imageSrc: "/assets/images/process/4.jpg",
    },
    {
      id: 5,
      title: "Fixed Price Quote",
      description:
        "When you confirm that working drawings match your requirements we will provide a fixed quote , building contracts and guarantee documents to be signed. A staged  progress payment plan of what to expect and when. We will agree on a start date and prepare for construction on your dream project to commence.",
      imageSrc: "/assets/images/process/5.jpg",
    },
    {
      id: 6,
      title: "Construction Begins",
      description:
        "Construction will begin soon after the consented plans are received from the council. A start date will be decided. Throughout the construction process communication is important to ensure everyone is on the same page. Our team will carry out quality checklists throughout your project to ensure our high standards are met. We also offer weekly site meetings to thoroughly update you on your project. These meetings are a great way to see any changes as they happen and watch your dream take shape.",
      imageSrc: "/assets/images/process/6.jpg",
    },
    {
      id: 7,
      title: "Job Complete",
      description:
        "Construction will begin soon after the consented plans are received from the council. A start date will be decided. Throughout the construction process communication is important to ensure everyone is on the same page. Our team will carry out quality checklists throughout your project to ensure our high standards are met. We also offer weekly site meetings to thoroughly update you on your project. These meetings are a great way to see any changes as they happen and watch your dream take shape.",
      imageSrc: "/assets/images/process/7.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[1200px] mx-auto p-8 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`relative p-6 rounded-lg transition-all duration-500 transform
              ${index <= currentStep ? "scale-105" : "scale-100"}
            `}
          >
            {/* Connector Lines */}
            {index !== steps.length - 1 && (
              <div
                className={`hidden lg:block absolute top-1/2 right-0 w-8 h-[2px] transform translate-x-full
                ${index <= currentStep ? "bg-navy" : "bg-gray-300"}`}
              />
            )}
            {index < steps.length - 2 && index % 3 !== 2 && (
              <div
                className={`hidden lg:block absolute top-1/2 right-0 w-2 h-24 transform translate-x-full translate-y-12 border-r-2
                ${index <= currentStep ? "border-navy" : "border-gray-300"}`}
              />
            )}

            {/* Card Content */}
            <div
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500
              ${
                index <= currentStep
                  ? "border-2 border-navy"
                  : "border border-gray-200"
              }`}
            >
              {/* Image Container */}
              <div className="relative h-64 bg-gray-50 overflow-hidden">
                <Image
                  src={step.imageSrc}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div
                  className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold
    ${
      index <= currentStep ? "bg-navy text-white" : "bg-gray-200 text-gray-500"
    }`}
                >
                  {step.id}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h3
                  className={`text-xl font-semibold mb-3 transition-colors duration-500
                  ${index <= currentStep ? "text-orange" : "text-gray-700"}`}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessFlow;

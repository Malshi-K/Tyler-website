"use client";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { servicesData } from "@/app/data/services";
import HeroSection from "@/components/services/HeroSection";
import Section1 from "@/components/services/Section1";
import CTACard from "@/components/services/CTACard";
import Section2 from "@/components/services/Section2";
import ProjectSlider from "@/components/services/ProjectSlider";

const ServicePage = () => {
  const params = useParams();
  const serviceData = servicesData[params.slug];

  if (!serviceData) {
    notFound();
  }

  return (
    <div>
      <HeroSection data={serviceData} />
      <Section1 data={serviceData.section1} />
      <Section2 data={serviceData} />
      <ProjectSlider serviceCategory={serviceData.title} />
      <CTACard data={serviceData.section4}/>
    </div>
  );
};

export default ServicePage;
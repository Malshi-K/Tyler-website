"use client";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { servicesData } from "@/app/data/services";
import HeroSection from "@/components/services/HeroSection";
import Section1 from "@/components/services/Section1";
import CTACard from "@/components/services/CTACard";
import Section2 from "@/components/services/Section2";

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
      {/* Pass the entire serviceData object */}
      <Section2 data={serviceData} />
      <CTACard />
    </div>
  );
};

export default ServicePage;
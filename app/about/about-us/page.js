import AboutSection from "@/components/about/AboutSection";
import TeamSection from "@/components/about/TeamSection";
import PageTitle from "@/components/PageTitle";

export default function AboutUs() {
  return (
    <div className="relative min-h-screen">
      <PageTitle />
      <AboutSection />
      {/* <TeamSection /> */}
    </div>
  );
}
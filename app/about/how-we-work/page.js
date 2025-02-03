import ProcessFlow from "@/components/about/ProcessFlow";
import ProcessStepper from "@/components/about/ProcessStepper";
import PageTitle from "@/components/PageTitle";

export default function WhoWeArePage() {
  return (
    <div className="relative min-h-screen">
      <PageTitle />
      <ProcessStepper />
      <ProcessFlow />
    </div>
  );
}
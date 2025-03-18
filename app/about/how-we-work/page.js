// File: app/about/how-we-work/page.js
"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import PageTitle from "@/components/PageTitle";

// Dynamically import components that use client-side hooks with no SSR
const ProcessStepper = dynamic(() => import("@/components/about/ProcessStepper"), {
  ssr: false,
  loading: () => <div className="w-full h-32 bg-gray-100 animate-pulse rounded-lg"></div>
});

const ProcessFlow = dynamic(() => import("@/components/about/ProcessFlow"), {
  ssr: false,
  loading: () => <div className="w-full h-96 bg-gray-100 animate-pulse rounded-lg"></div>
});

export default function HowWeWorkPage() {
  return (
    <div className="relative min-h-screen">
      <PageTitle />
      
      <Suspense fallback={<div className="w-full h-32 bg-gray-100 animate-pulse rounded-lg"></div>}>
        <ProcessStepper />
      </Suspense>
      
      <Suspense fallback={<div className="w-full h-96 bg-gray-100 animate-pulse rounded-lg"></div>}>
        <ProcessFlow />
      </Suspense>
    </div>
  );
}
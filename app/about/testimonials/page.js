// File: app/about/testimonials/page.js
"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import PageTitle from "@/components/PageTitle";

// Dynamically import the TestimonialsSection component with no SSR
const TestimonialsSection = dynamic(
  () => import("@/components/home/TestimonialsSection"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full max-w-3xl mx-auto h-96 bg-gray-100 animate-pulse rounded-lg my-8"></div>
    ),
  }
);

export default function TestimonialsPage() {
  return (
    <div className="relative min-h-screen">
      <PageTitle />
      
      <Suspense 
        fallback={
          <div className="w-full max-w-3xl mx-auto h-96 bg-gray-100 animate-pulse rounded-lg my-8"></div>
        }
      >
        <TestimonialsSection />
      </Suspense>
    </div>
  );
}
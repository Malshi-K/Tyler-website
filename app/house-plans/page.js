// File: app/house-plans/page.js
"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import PageTitle from "@/components/PageTitle";

// Dynamically import the HousePlansCard component with no SSR
const HousePlansCard = dynamic(
  () => import("@/components/house-plans/HousePlansCard"),
  {
    ssr: false,
    loading: () => (
      <div className="max-w-6xl mx-auto my-8 bg-gray-100 animate-pulse rounded-lg">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 relative pt-[66.67%]"></div>
          <div className="w-full lg:w-2/5 p-8">
            <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
            <div className="h-4 bg-gray-200 rounded mb-6 w-2/3"></div>
            <div className="grid grid-cols-2 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  }
);

export default function HousePlansPage() {
  return (
    <div className="relative min-h-screen">
      <PageTitle />
      
      <Suspense 
        fallback={
          <div className="max-w-6xl mx-auto my-8 bg-gray-100 animate-pulse rounded-lg">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-3/5 relative pt-[66.67%]"></div>
              <div className="w-full lg:w-2/5 p-8">
                <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
                <div className="h-4 bg-gray-200 rounded mb-6 w-2/3"></div>
                <div className="grid grid-cols-2 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        }
      >
        <HousePlansCard />
      </Suspense>
    </div>
  );
}
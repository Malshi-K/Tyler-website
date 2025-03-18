// File: app/questionnaire-success/page.js
"use client";
import { Suspense } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import the component that uses useSearchParams with no SSR
const QuestionnaireSuccessContentWithNoSSR = dynamic(
  () => import("@/components/QuestionnaireSuccessContent"),
  { ssr: false }
);

// Main page component
export default function QuestionnaireSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Suspense fallback={
        <Card className="max-w-md w-full p-8">
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-gray-100 p-3 mb-4 animate-pulse">
              <div className="h-12 w-12" />
            </div>
            <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse mb-4" />
            <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
          </div>
        </Card>
      }>
        <QuestionnaireSuccessContentWithNoSSR />
      </Suspense>
    </div>
  );
}
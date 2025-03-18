'use client';

import React, { Suspense } from 'react';
import { Card } from "@/components/ui/card";
import dynamic from "next/dynamic";

// Important: Make sure to NOT use useSearchParams here at all

// Dynamic import with explicit ssr: false setting
const SuccessContent = dynamic(
  () => import('@/components/SuccessContent'),
  { 
    ssr: false,
    loading: () => (
      <Card className="max-w-md w-full p-8">
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-gray-100 p-3 mb-4 animate-pulse">
            <div className="h-12 w-12" />
          </div>
          <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse mb-4" />
          <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
        </div>
      </Card>
    )
  }
);

export default function SuccessPage() {
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
        <SuccessContent />
      </Suspense>
    </div>
  );
}
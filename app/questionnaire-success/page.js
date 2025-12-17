// app/questionnaire-success/page.js
"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function QuestionnaireSuccessPage() {
  // Use state instead of useSearchParams
  const [name, setName] = useState("there");
  const [projectType, setProjectType] = useState("your project");
  const [isLoading, setIsLoading] = useState(true);

  // Get URL parameters after component mounts on client
  useEffect(() => {
    // This will only run in the browser
    const params = new URLSearchParams(window.location.search);
    const nameParam = params.get("name");
    const projectTypeParam = params.get("projectType");
    
    if (nameParam) {
      setName(nameParam);
    }
    
    if (projectTypeParam) {
      setProjectType(projectTypeParam);
    }
    
    setIsLoading(false);
  }, []);

  // Display loading state while parameters are being retrieved
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-md w-full p-8">
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-gray-100 p-3 mb-4 animate-pulse">
              <div className="h-12 w-12" />
            </div>
            <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse mb-4" />
            <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
          </div>
        </Card>
      </div>
    );
  }

  // Actual content after parameters are loaded
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full space-y-8 p-8">
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-green-100 p-3 mb-4">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-navy">
            Thank You, {name}!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We&apos;ve received your questionnaire about {projectType}.
          </p>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Our team will review your project details and get back to you within 2-3 business days with a no-obligation quote.
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="text-center text-sm text-gray-600">
              <p>For immediate assistance:</p>
              <p className="font-medium">Call: 022 419 7176</p>
              <p className="font-medium">Email: tyler@twilsonbuilders.co.nz</p>
            </div>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <Link href="/" passHref>
            <Button className="w-full bg-orange hover:bg-navy text-white rounded-full py-6">
              Return to Home
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button variant="outline" className="w-full rounded-full py-6">
              Contact Us
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
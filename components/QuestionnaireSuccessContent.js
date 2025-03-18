// File: components/QuestionnaireSuccessContent.js
"use client";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function QuestionnaireSuccessContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "there";
  const projectType = searchParams.get("projectType") || "your project";

  return (
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
  );
}
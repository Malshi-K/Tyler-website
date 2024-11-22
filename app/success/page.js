"use client";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "there";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md w-full space-y-8 p-8">
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-green-100 p-3 mb-4">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Thank You, {name}!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Your message has been successfully sent. We will get back to you as soon as possible.
          </p>
        </div>
        <div className="mt-6">
          <Link href="/" passHref>
            <Button className="w-full bg-orange hover:bg-navy text-white rounded-full py-6">
              Return to Home
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default SuccessPage;
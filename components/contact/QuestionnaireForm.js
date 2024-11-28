"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  CalendarIcon,
} from "lucide-react";
import Image from "next/image";

const QuestionnaireForm = () => {
  const router = useRouter();
  const [date, setDate] = useState();
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    postCode: "",
    email: "",
    phone: "",
    startDate: "",
    hasPlans: "no",
    budget: "",
    financeApproval: "no",
    hearAboutUs: "",
    projectDescription: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/send-questionnaire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          startDate: date ? format(date, "PPP") : null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit questionnaire");
      }

      setFormData({
        name: "",
        location: "",
        postCode: "",
        email: "",
        phone: "",
        startDate: "",
        hasPlans: "no",
        budget: "",
        financeApproval: "no",
        hearAboutUs: "",
        projectDescription: "",
      });
      setDate(null);

      router.push(`/questionnaire-success`);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({
        type: "error",
        message:
          error.message ||
          "Failed to submit questionnaire. Please try again later.",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full py-6 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="relative order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-navy">
              Let&apos;s talk about your next project
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
              Give Tyler a call or get in touch by filling out the form below
              and we will be in contact as soon as possible. Alternatively, if
              you are looking for a quote, please fill out our Project
              Questionnaire and we will provide you with a no obligation, free
              quote.
            </p>

            {/* Illustration Container */}
            <div className="relative mt-4 sm:mt-6">
              <div className="absolute -top-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 bg-orange-200 rounded-full opacity-50" />
              <div className="absolute top-12 sm:top-20 right-8 sm:right-12 w-12 sm:w-16 h-12 sm:h-16 bg-orange-200 rounded-full opacity-50" />
              <div className="relative z-10">
                <Image
                  src="/assets/images/contact/contact-bg.webp"
                  alt="Contact illustration"
                  className="rounded-lg w-full"
                  width={500}
                  height={300}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 shadow-lg relative order-1 lg:order-2">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-200 rounded-full opacity-50 hidden sm:block" />
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-orange">
                Our Project Questionnaire
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Complete our Project Questionnaire so we can get to know a
                little bit more about your project and we can start to prepare
                your no obligation free quote.
              </p>
            </div>

            {status.message && (
              <Alert
                className={`mb-4 ${
                  status.type === "error" ? "bg-red-50" : "bg-green-50"
                }`}
              >
                <AlertDescription>{status.message}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Basic Information */}
              <div className="space-y-3 sm:space-y-4">
                <Input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full"
                />
                <Input
                  type="text"
                  placeholder="Location"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      location: e.target.value,
                    }))
                  }
                  className="w-full"
                />
                <Input
                  type="text"
                  placeholder="Post Code"
                  value={formData.postCode}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      postCode: e.target.value,
                    }))
                  }
                  className="w-full"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="w-full"
                />
                <Input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="w-full"
                />
              </div>

              {/* Project Start Date */}
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">
                  When would you like to start your project?
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "mm/dd/yyyy"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={(newDate) => {
                        setDate(newDate);
                        setFormData((prev) => ({
                          ...prev,
                          startDate: newDate ? format(newDate, "PPP") : "",
                        }));
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Plans Question */}
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">
                  Have you had plans professionally drawn up?
                </Label>
                <RadioGroup
                  defaultValue="no"
                  className="flex flex-wrap gap-4"
                  value={formData.hasPlans}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, hasPlans: value }))
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="plans-yes" />
                    <Label htmlFor="plans-yes" className="text-sm sm:text-base">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="plans-no" />
                    <Label htmlFor="plans-no" className="text-sm sm:text-base">
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">
                  Approximate Budget
                </Label>
                <Input
                  type="text"
                  placeholder="Approximate Budget?"
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, budget: e.target.value }))
                  }
                  className="w-full"
                />
              </div>

              {/* Finance Approval */}
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">
                  Have you got finance approved?
                </Label>
                <RadioGroup
                  defaultValue="no"
                  className="flex flex-wrap gap-4"
                  value={formData.financeApproval}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, financeApproval: value }))
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="finance-yes" />
                    <Label
                      htmlFor="finance-yes"
                      className="text-sm sm:text-base"
                    >
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="finance-no" />
                    <Label
                      htmlFor="finance-no"
                      className="text-sm sm:text-base"
                    >
                      No
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="na" id="finance-na" />
                    <Label
                      htmlFor="finance-na"
                      className="text-sm sm:text-base"
                    >
                      Not Applicable
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Hear About Us */}
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">
                  How did you hear about us?
                </Label>
                <Input
                  type="text"
                  placeholder="How did you hear about us?"
                  value={formData.hearAboutUs}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      hearAboutUs: e.target.value,
                    }))
                  }
                  className="w-full"
                />
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">
                  Project Description
                </Label>
                <Textarea
                  placeholder="Briefly describe your project"
                  className="min-h-[120px] w-full"
                  value={formData.projectDescription}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      projectDescription: e.target.value,
                    }))
                  }
                />
              </div>

              {/* Submit Button */}
              <Button
                className="w-full bg-navy hover:bg-orange text-white rounded-full py-4 sm:py-6 text-sm sm:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? "SUBMITTING..." : "SEND US MESSAGE"}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-orange rounded-tl-3xl sm:rounded-tl-full rounded-br-3xl sm:rounded-br-full text-white p-4 sm:p-6">
          {/* Contact Cards */}
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="flex flex-col items-center p-4 sm:p-6">
              <a
                href="tel:+64224197176"
                className="group flex flex-col items-center hover:opacity-90 transition-opacity"
              >
                <div className="rounded-full bg-white/20 p-2 sm:p-3 mb-3 sm:mb-4 group-hover:bg-white/30 transition-colors">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-navy font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                  PHONE
                </h3>
                <p className="text-center text-xs sm:text-sm text-white/90 hover:text-navy">
                  022 419 7176
                </p>
              </a>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="flex flex-col items-center p-4 sm:p-6">
              <a
                href="mailto:tyler@twilsonbuilders.co.nz"
                className="group flex flex-col items-center hover:opacity-90 transition-opacity"
              >
                <div className="rounded-full bg-white/20 p-2 sm:p-3 mb-3 sm:mb-4 group-hover:bg-white/30 transition-colors">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="text-navy font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                  EMAIL
                </h3>
                <p className="text-center text-xs sm:text-sm text-white/90 hover:text-navy break-all">
                  tyler@twilsonbuilders.co.nz
                </p>
              </a>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-none shadow-none sm:col-span-2 md:col-span-1">
            <CardContent className="flex flex-col items-center p-4 sm:p-6">
              <div className="rounded-full bg-white/20 p-2 sm:p-3 mb-3 sm:mb-4">
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-navy font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                FOLLOW US
              </h3>
              <div className="flex gap-3 sm:gap-4">
                {[
                  {
                    Icon: Facebook,
                    url: "https://www.facebook.com/twilsonbuilders/",
                    label: "Facebook",
                  },
                  {
                    Icon: Instagram,
                    url: "https://www.instagram.com/twilsonbuilders/",
                    label: "Instagram",
                  },
                  {
                    Icon: Youtube,
                    url: "https://www.youtube.com/watch?v=wK6aKXu5NbE",
                    label: "YouTube",
                  },
                ].map(({ Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    className="bg-white/20 p-1.5 sm:p-2 rounded-lg hover:bg-white/30 transition-colors"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={16} className="text-white sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default QuestionnaireForm;

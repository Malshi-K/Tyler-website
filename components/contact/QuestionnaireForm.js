"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
  const [date, setDate] = useState();
  // Add these state declarations at the top of your QuestionnaireForm component
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

  // Add this submit handler function
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

      setStatus({
        type: "success",
        message:
          "Questionnaire submitted successfully! We'll be in touch soon.",
      });

      // Reset form
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
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({
        type: "error",
        message:
          error.message ||
          "Failed to submit questionnaire. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-10">
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column with Illustration and Text */}
          <div className="relative">
            <h2 className="text-2xl font-bold mb-2 text-navy">
              Let&apos;s talk about your next project
            </h2>
            <p className="text-gray-600 mb-8">
              Give Tyler a call or get in touch by filling out the form below
              and we will be in contact as soon as possible. Alternatively, if
              you are looking for a quote, please fill out our Project
              Questionnaire and we will provide you with a no obligation, free
              quote.
            </p>

            {/* Illustration Container */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-orange-200 rounded-full opacity-50" />
              <div className="absolute top-20 right-12 w-16 h-16 bg-orange-200 rounded-full opacity-50" />
              <div className="relative z-10 mb-8">
                <Image
                  src="/assets/images/contact/contact-bg.png"
                  alt="Contact illustration"
                  className="rounded-lg"
                  width={500}
                  height={300} // Replace with your desired height
                />
              </div>
            </div>
          </div>

          {/* Right Column with Form */}
          <div className="bg-white rounded-lg p-6 shadow-lg relative">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-200 rounded-full opacity-50" />
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-2 text-orange">
                Our Project Questionnaire
              </h2>
              <p className="text-gray-600">
                Complete our Project Questionnaire so we can get to know a
                liittle bit more about your project and we can start to prepare
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
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
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
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
                <Input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              </div>

              {/* Project Start Date */}
              <div className="space-y-2">
                <Label>When would you like to start your project?</Label>
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
                <Label>Have you had plans professionally drawn up?</Label>
                <RadioGroup
                  defaultValue="no"
                  className="flex gap-4"
                  value={formData.hasPlans}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, hasPlans: value }))
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="plans-yes" />
                    <Label htmlFor="plans-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="plans-no" />
                    <Label htmlFor="plans-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <Label>Approximate Budget</Label>
                <Input
                  type="text"
                  placeholder="Approximate Budget?"
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, budget: e.target.value }))
                  }
                />
              </div>

              {/* Finance Approval */}
              <div className="space-y-2">
                <Label>Have you got financed approved?</Label>
                <RadioGroup
                  defaultValue="no"
                  className="flex gap-4"
                  value={formData.financeApproval}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, financeApproval: value }))
                  }
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="finance-yes" />
                    <Label htmlFor="finance-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="finance-no" />
                    <Label htmlFor="finance-no">No</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="na" id="finance-na" />
                    <Label htmlFor="finance-na">Not Applicable</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Hear About Us */}
              <div className="space-y-2">
                <Label>How did you hear about us?</Label>
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
                />
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <Label>Project Description</Label>
                <Textarea
                  placeholder="Briefly describe your project"
                  className="min-h-[120px]"
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
                className="w-full bg-navy hover:bg-orange text-white rounded-full py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "SUBMITTING..." : "SEND US MESSAGE"}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 bg-navy rounded-tl-full rounded-br-full text-white">
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="flex flex-col items-center p-6">
              <div className="rounded-full bg-white/20 p-3 mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-orange">PHONE</h3>
              <p className="text-center text-sm text-white/90">022 419 7176</p>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="flex flex-col items-center p-6">
              <div className="rounded-full bg-white/20 p-3 mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-orange">EMAIL</h3>
              <p className="text-center text-sm text-white/90">
                tyler@twilsonbuilders.co.nz
              </p>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="flex flex-col items-center p-6">
              <div className="rounded-full bg-white/20 p-3 mb-4">
                <Facebook className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-orange">FOLLOW US</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="text-white" />
                </a>
                <a
                  href="#"
                  className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-white" />
                </a>
                <a
                  href="#"
                  className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} className="text-white" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireForm;

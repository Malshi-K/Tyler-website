"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

const ContactForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error("All fields are required");
      }

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const responseText = await response.text();
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (error) {
        console.error("Failed to parse response as JSON:", error);
        throw new Error("Invalid server response");
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Clear form data
      setFormData({ name: "", email: "", message: "" });

      // Navigate to success page with query parameters
      router.push(`/success`);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({
        type: "error",
        message:
          error.message || "Failed to send message. Please try again later.",
      });
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
                  src="/assets/images/contact/contact-bg.webp"
                  alt="Contact illustration"
                  className="rounded-lg"
                  width={500} // Replace with your desired width
                  height={300} // Replace with your desired height
                />
              </div>
            </div>
          </div>

          {/* Right Column with Form */}
          <div className="bg-white rounded-lg p-6 shadow-lg relative">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-200 rounded-full opacity-50" />
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-2 text-navy">
                Leave us a Message
              </h2>
              <p className="text-gray-600">
                We can ensure reliabilty with safety in mind. Leave us a message
                and one of our team will be back with you shortly.
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

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                />
              </div>
              <Textarea
                placeholder="Enter your message"
                className="border-gray-300 rounded-lg h-32"
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                required
              />
              <Button
                type="submit"
                className="w-full bg-orange hover:bg-navy text-white rounded-full py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "SENDING..." : "SUBMIT"}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 bg-orange rounded-tl-full rounded-br-full text-white">
          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="flex flex-col items-center p-6">
              <a
                href="tel:+64224197176"
                className="group flex flex-col items-center hover:opacity-90 transition-opacity"
              >
                <div className="rounded-full bg-white/20 p-3 mb-4 group-hover:bg-white/30 transition-colors">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-navy font-semibold mb-2">PHONE</h3>
                <p className="text-center text-sm text-white/90 hover:text-navy">
                  022 419 7176
                </p>
              </a>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="flex flex-col items-center p-6">
              <a
                href="mailto:tyler@twilsonbuilders.co.nz"
                className="group flex flex-col items-center hover:opacity-90 transition-opacity"
              >
                <div className="rounded-full bg-white/20 p-3 mb-4 group-hover:bg-white/30 transition-colors">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-navy font-semibold mb-2">EMAIL</h3>
                <p className="text-center text-sm text-white/90 hover:text-navy">
                  tyler@twilsonbuilders.co.nz
                </p>
              </a>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-none shadow-none">
            <CardContent className="flex flex-col items-center p-6">
              <div className="rounded-full bg-white/20 p-3 mb-4">
                <Facebook className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-navy font-semibold mb-2">FOLLOW US</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/twilsonbuilders/"
                  className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} className="text-white" />
                </a>
                <a
                  href="https://www.instagram.com/twilsonbuilders/"
                  className="bg-white/20 p-2 rounded-lg hover:bg-white/30 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} className="text-white" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=wK6aKXu5NbE"
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

export default ContactForm;

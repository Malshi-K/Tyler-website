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
    // ... your existing handleSubmit logic
  };

  return (
    <div className="min-h-screen py-6 sm:py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="relative order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-navy">
              Let&apos;s talk about your next project
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
              Give Tyler a call or get in touch by filling out the form below
              and we will be in contact as soon as possible. Alternatively, if
              you are looking for a quote, please fill out our Project
              Questionnaire and we will provide you with a no obligation, free
              quote.
            </p>

            {/* Illustration */}
            <div className="relative">
              <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-16 sm:w-24 h-16 sm:h-24 bg-orange-200 rounded-full opacity-50" />
              <div className="absolute top-12 sm:top-20 right-8 sm:right-12 w-12 sm:w-16 h-12 sm:h-16 bg-orange-200 rounded-full opacity-50" />
              <div className="relative z-10 mb-6 sm:mb-8">
                <Image
                  src="/assets/images/contact/contact-bg.webp"
                  alt="Contact illustration"
                  className="rounded-lg"
                  width={500}
                  height={300}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg relative order-1 lg:order-2">
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-8 sm:w-12 h-8 sm:h-12 bg-orange-200 rounded-full opacity-50" />
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-navy">
                Leave us a Message
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                  className="w-full"
                />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  required
                  className="w-full"
                />
              </div>
              <Textarea
                placeholder="Enter your message"
                className="border-gray-300 rounded-lg h-24 sm:h-32"
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                required
              />
              <Button
                type="submit"
                className="w-full bg-orange hover:bg-navy text-white rounded-full py-4 sm:py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "SENDING..." : "SUBMIT"}
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
                <h3 className="text-navy font-semibold mb-1 sm:mb-2 text-sm sm:text-base">PHONE</h3>
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
                <h3 className="text-navy font-semibold mb-1 sm:mb-2 text-sm sm:text-base">EMAIL</h3>
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
              <h3 className="text-navy font-semibold mb-1 sm:mb-2 text-sm sm:text-base">FOLLOW US</h3>
              <div className="flex gap-3 sm:gap-4">
                {[
                  { Icon: Facebook, url: "https://www.facebook.com/twilsonbuilders/", label: "Facebook" },
                  { Icon: Instagram, url: "https://www.instagram.com/twilsonbuilders/", label: "Instagram" },
                  { Icon: Youtube, url: "https://www.youtube.com/watch?v=wK6aKXu5NbE", label: "YouTube" }
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

export default ContactForm;
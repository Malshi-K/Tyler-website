"use client";
import React, { useState } from "react";
import { Check, ArrowRight, Home, Utensils, TreePine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PackagesShowcase = () => {
  const [activeTab, setActiveTab] = useState("bathroom");

  const packageData = {
    bathroom: {
      title: "Bathroom Packages",
      icon: "/assets/images/menu-icons/8.png",
      packages: [
        {
          name: "Basic Package",
          price: "Under $20,000",
          description:
            "Cost-effective solutions perfect for rentals or budget renos under $20,000.",
          features: [
            "Pre-formed shower units",
            "Standard vanities",
            "Vinyl or basic tile flooring",
          ],
          image:
            "/assets/images/projects/Bathrooms & Kitchens/Bathrooms/3.webp",
          popular: false,
        },
        {
          name: "Premium Package",
          price: "$20,000 - $30,000",
          description:
            "Durable fixtures and modern finishes designed to look great for 10+ years.",
          features: [
            "Custom vanity solutions",
            "Tiled shower installation",
            "Upgraded tapware",
            "Mid-range tiles",
          ],
          image:
            "/assets/images/projects/Bathrooms & Kitchens/Bathrooms/2.webp",
          popular: true,
        },
        {
          name: "Deluxe Package",
          price: "Starting at $35,000+",
          description:
            "High-spec finishes, bespoke design, and spa-like details.",
          features: [
            "Full-height premium tiles",
            "Underfloor heating",
            "Frameless showers",
            "Premium fittings",
          ],
          image:
            "/assets/images/projects/Bathrooms & Kitchens/Bathrooms/6.webp",
          popular: false,
        },
      ],
    },
    kitchen: {
      title: "Kitchen Packages",
      icon: "/assets/images/menu-icons/10.png",
      packages: [
        {
          name: "Basic Package",
          price: "Under $20,000",
          description:
            "Affordable, functional layouts with durable finishes. Ideal for landlords or budget-focused upgrades.",
          features: [
            "Melamine cabinetry",
            "Laminate benchtops",
            "Standard appliances",
          ],
          image: "/assets/images/projects/Bathrooms & Kitchens/Kitchens/3.webp",
          popular: false,
        },
        {
          name: "Premium Package",
          price: "$20,000 - $30,000",
          description:
            "Balanced style and function with quality fittings that last over a decade.",
          features: [
            "Soft-close cabinetry",
            "Engineered stone benchtops",
            "Modern splashbacks",
            "Mid-range appliances",
          ],
          image: "/assets/images/projects/Bathrooms & Kitchens/Kitchens/6.webp",
          popular: true,
        },
        {
          name: "Deluxe Package",
          price: "Starting at $35,000+",
          description:
            "Top-end materials, designer layouts, and luxury appliances.",
          features: [
            "Custom joinery",
            "Premium stone or solid surface benchtops",
            "Integrated appliances",
            "Feature lighting",
          ],
          image: "/assets/images/projects/Bathrooms & Kitchens/Kitchens/7.webp",
          popular: false,
        },
      ],
    },
    deck: {
      title: "Deck Packages",
      icon: "/assets/images/menu-icons/12.png",
      packages: [
        {
          name: "Basic Package",
          price: "Under $15,000",
          description:
            "Straightforward timber decks ideal for rentals or simple outdoor spaces.",
          features: [
            "Treated pine decking",
            "Basic balustrades",
            "Standard fixings",
          ],
          image: "/assets/images/projects/Decks/5.webp",
          popular: false,
        },
        {
          name: "Premium Package",
          price: "$20,000 - $30,000",
          description:
            "Quality materials and thoughtful layouts designed for years of outdoor enjoyment.",
          features: [
            "Kwila or hardwood decking",
            "Upgraded balustrades",
            "Integrated seating",
          ],
          image: "/assets/images/projects/Decks/2.webp",
          popular: true,
        },
        {
          name: "Deluxe Package",
          price: "Starting at $35,000+",
          description:
            "Architectural decking with premium finishes and custom features.",
          features: [
            "Composite decking",
            "Glass balustrades",
            "Built-in lighting",
            "Pergola integration",
          ],
          image: "/assets/images/projects/Decks/1.webp",
          popular: false,
        },
      ],
    },
  };

  const currentPackage = packageData[activeTab];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="rounded-lg p-1 inline-flex">
            {Object.entries(packageData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`relative px-8 py-3 text-md font-bold uppercase tracking-wide transition-all duration-200 ${
                  activeTab === key
                    ? "text-orange-500"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                <span className="flex items-center space-x-3">
                  <div className="w-8 h-8 relative">
                    <Image
                      src={data.icon}
                      alt={`${key} icon`}
                      fill
                      className={`object-contain transition-all duration-200 ${
                        activeTab === key
                          ? "filter brightness-0 invert-0"
                          : "filter brightness-0 invert opacity-60"
                      }`}
                    />
                  </div>
                  <span>{key}</span>
                </span>
                {activeTab === key && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {currentPackage.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {currentPackage.packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-xl shadow-lg overflow-hidden transition-transform duration-200 hover:scale-105 ${
                  pkg.popular ? "bg-orange" : "bg-white"
                }`}
              >              

                {/* Package Image */}
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={`${pkg.name} example`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        pkg.popular ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={`text-2xl font-bold mb-3 ${
                        pkg.popular ? "text-white" : "text-orange"
                      }`}
                    >
                      {pkg.price}
                    </p>
                    <p
                      className={`text-sm leading-relaxed ${
                        pkg.popular ? "text-gray-100" : "text-gray-600"
                      }`}
                    >
                      {pkg.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4
                      className={`font-semibold mb-3 ${
                        pkg.popular ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Features included:
                    </h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <Check
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              pkg.popular ? "text-white" : "text-navy"
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              pkg.popular ? "text-gray-100" : "text-gray-700"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className={`w-full font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 ${
                      pkg.popular
                        ? "bg-white text-orange hover:bg-gray-100"
                        : "bg-orange hover:bg-navy text-white"
                    }`}
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-orange rounded-2xl p-8 text-center text-white mt-16">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Space?
          </h3>
          <p className="text-white mb-6 max-w-2xl mx-auto">
            Our expert team is ready to help you choose the perfect package and
            bring your vision to life. Contact us today for a personalized
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/contact-us">
              <button className="bg-white text-navy font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesShowcase;

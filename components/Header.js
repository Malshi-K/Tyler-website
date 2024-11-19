"use client";
import React, { useState, useEffect } from "react";
import {
  Menu as MenuIcon,
  ChevronDown,
  Home,
  Info,
  Briefcase,
  FileText,
  Mail,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState([]);
  const [currentPath, setCurrentPath] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  // If we're on the home page, don't render the header
  if (pathname === "/") {
    return null;
  }

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    {
      name: "About Us",
      path: "/about",
      icon: <Info size={20} />,
      subItems: [
        { name: "Our Guarantee", path: "/about/our-guarantee" },
        { name: "Testimonials", path: "/about/testimonials" },
        { name: "How we work", path: "/about/who-we-are" },
        { name: "Gallery", path: "/about/gallery" },
      ],
    },
    {
      name: "Services",
      path: "/services",
      icon: <Briefcase size={20} />,
      subItems: [
        { name: "Design & Build", path: "/services/design-build" },
        { name: "Renovations & Extensions", path: "/services/renovations" },
        { name: "Light Commercial", path: "/services/commercial" },
        { name: "New Builds", path: "/services/new-builds" },
        { name: "Bathrooms & Kitchens", path: "/services/bathrooms-kitchens" },
        { name: "Decks & Fences", path: "/services/decks-fences" },
      ],
    },
    { name: "House Plans", path: "/house-plans", icon: <FileText size={20} /> },
    { name: "Our Blogs", path: "/blog", icon: <FileText size={20} /> },
    {
      name: "Contact Us",
      path: "/contact",
      icon: <Mail size={20} />,
      subItems: [
        { name: "Contact Us", path: "/contact/contact-us" },
        { name: "Project Questionniare", path: "/contact/questionniare" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", Icon: Facebook, url: "#" },
    { name: "YouTube", Icon: Youtube, url: "#" },
    { name: "Instagram", Icon: Instagram, url: "#" },
  ];

  const toggleSubmenu = (itemName) => {
    setExpandedMenus((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName]
    );
  };

  const renderNavItem = (item) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isExpanded = expandedMenus.includes(item.name);

    return (
      <div key={item.path} className="block">
        <div className="flex items-center justify-between">
          <Link
            href={item.path}
            className={`py-3 text-lg font-medium transition-colors flex items-center gap-3
              ${
                currentPath === item.path
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            onClick={(e) => {
              if (hasSubItems) {
                e.preventDefault();
                toggleSubmenu(item.name);
              } else {
                setIsOpen(false);
              }
            }}
          >
            {item.icon}
            {item.name}
          </Link>
          {hasSubItems && (
            <button
              onClick={() => toggleSubmenu(item.name)}
              className="p-2 text-white/60 hover:text-white"
            >
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>

        {hasSubItems && isExpanded && (
          <div className="pl-4 border-l border-white/10">
            {item.subItems.map((subItem) => (
              <Link
                key={subItem.path}
                href={subItem.path}
                className={`block py-2 text-base transition-colors
                  ${
                    currentPath === subItem.path
                      ? "text-orange"
                      : "text-white/50 hover:text-white"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {subItem.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-8 py-4 flex justify-between items-center">
          {/* Header - Logo and Menu aligned */}
          <Link href="/" className="inline-block">
            <Image
              src="/assets/images/logo.png"
              alt="T Wilson Builders"
              width={0}
              height={0}
              sizes="100vw"
              className="h-24 w-auto"
              style={{ width: "auto" }}
            />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="flex items-center gap-3 text-orange hover:text-white transition-colors duration-300 group"
            onClick={() => setIsOpen(true)}
          >
            <span className="text-xl font-bold tracking-wider">MENU</span>
            <MenuIcon
              size={24}
              className="transition-transform duration-300 group-hover:rotate-90"
            />
          </button>
        </div>
      </header>

      {/* Side Navigation Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          side="right"
          className="w-80 bg-navy text-white border-l border-white/10 overflow-y-auto"
        >
          <SheetHeader className="border-none">
            <div className="flex justify-between items-center mb-8">
              <SheetTitle className="text-white text-lg font-medium">
                <Image
                  src="/assets/images/logo.png"
                  alt="Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "auto" }}
                />
              </SheetTitle>
            </div>
          </SheetHeader>

          {/* Navigation Links */}
          <nav className="mb-12 space-y-1">{navItems.map(renderNavItem)}</nav>

          {/* Mobile Social Links */}
          <div className="md:hidden flex items-center gap-4 pt-4 border-t border-white/10">
            {socialLinks.map(({ name, Icon, url }) => (
              <Link
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center
                  text-white/60 hover:text-white hover:border-white/40 transition-colors"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Header;

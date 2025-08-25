export const navItems = [
  {
    name: "Home",
    path: "/",
    icon: "/assets/images/menu-icons/1.webp",
  },
  {
    name: "About Us",
    path: "/about",
    icon: "/assets/images/menu-icons/2.webp",
    subItems: [
      { name: "About Us", path: "/about/about-us" },
      { name: "Our Guarantee", path: "/about/our-guarantee" },
      { name: "Testimonials", path: "/about/testimonials" },
      { name: "How we work", path: "/about/how-we-work" },
      { name: "Gallery", path: "/about/gallery" },
    ],
  },
  {
    name: "Services",
    path: "/services",
    icon: "/assets/images/menu-icons/3.webp",
    subItems: [
      { name: "Design & Build", path: "/services/design-build" },
      { name: "Renovations & Extensions", path: "/services/renovations-extensions" },
      { name: "Light Commercial", path: "/services/light-commercial" },
      { name: "New Builds", path: "/services/new-builds" },
      { name: "Bathrooms", path: "/services/bathrooms" },
      { name: "Kitchens", path: "/services/kitchens" },      
      { name: "Decks & Fences", path: "/services/decks-fences" },
    ],
  },
  {
    name: "House Plans",
    path: "/house-plans",
    icon: "/assets/images/menu-icons/4.webp",
  },
  {
    name: "Our Blogs",
    path: "/blog",
    icon: "/assets/images/menu-icons/5.webp",
  },
  {
    name: "Contact Us",
    path: "/contact",
    icon: "/assets/images/menu-icons/6.webp",
    subItems: [
      { name: "Contact Us", path: "/contact/contact-us" },
      { name: "Project Questionnaire", path: "/contact/questionnaire" },
    ],
  },
];

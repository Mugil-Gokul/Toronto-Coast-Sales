import React from "react";
import ServicesHero from "./ServicesHero";
import ServicesOverview from "./ServicesOverview";
import ServiceSection from "./ServiceSection";
import GetInTouch from "../../Components/GetInTouch";
import Img1 from "../../assets/images (2).jpg"
import Img2 from "../../assets/images (1).jpg"

const services = [
  {
    id: 1,
    badge: "Truck Sales",
    title: "Commercial Trucks Built For Every Business",
    image:
      Img2,
    description:
      "Whether you're an owner-operator or managing a growing fleet, we offer a carefully selected inventory of commercial trucks from trusted manufacturers. Every vehicle is professionally inspected for quality, reliability, and performance before it reaches our lot.",
    features: [
      { id: 1, text: "Wide selection of new & pre-owned commercial trucks" },
      { id: 2, text: "Fleet solutions for businesses of all sizes" },
      { id: 3, text: "Trade-in options with fair market valuation" },
      { id: 4, text: "Quality inspected vehicles before every sale" },
      { id: 5, text: "Competitive pricing with transparent deals" },
      { id: 6, text: "Experienced commercial truck specialists" },
    ],
    primaryButton: {
      text: "Browse Inventory",
      link: "/inventory",
    },
    secondaryButton: {
      text: "Contact Sales",
      link: "/contact",
    },
  },

  {
    id: 2,
    badge: "Trailer Sales",
    title: "Premium Trailers For Every Industry",
    image:
      Img1,
    description:
      "We provide a wide range of commercial trailers for logistics, construction, and transportation businesses. Our inventory includes dependable trailers built to maximize productivity and long-term value.",
    features: [
      { id: 1, text: "Dry Vans" },
      { id: 2, text: "Flatbed Trailers" },
      { id: 3, text: "Refrigerated (Reefer) Trailers" },
      { id: 4, text: "Dump Trailers" },
      { id: 5, text: "Utility Trailers" },
      { id: 6, text: "Commercial Fleet Trailer Solutions" },
    ],
    primaryButton: {
      text: "View Trailers",
      link: "/inventory",
    },
    secondaryButton: {
      text: "Request Quote",
      link: "/contact",
    },
  },

  {
    id: 3,
    badge: "Commercial Financing",
    title: "Flexible Financing Solutions For Your Business",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&auto=format&fit=crop",
    description:
      "Purchasing commercial equipment is easier with our financing programs. We work with trusted lending partners to offer competitive rates, flexible repayment options, and quick approval processes.",
    features: [
      { id: 1, text: "Fast financing approvals" },
      { id: 2, text: "Flexible repayment terms" },
      { id: 3, text: "Low down payment options" },
      { id: 4, text: "Commercial & fleet financing" },
      { id: 5, text: "Support for new business owners" },
      { id: 6, text: "Competitive interest rates" },
    ],
    primaryButton: {
      text: "Apply For Financing",
      link: "/contact",
    },
    secondaryButton: {
      text: "Talk To Finance Team",
      link: "/contact",
    },
  },

  {
    id: 4,
    badge: "Repair Shop",
    title: "Professional Truck Repair & Maintenance",
    image:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=1200&auto=format&fit=crop",
    description:
      "Keep your trucks operating at peak performance with our experienced technicians. From preventive maintenance to major repairs, we provide reliable service that minimizes downtime.",
    features: [
      { id: 1, text: "Engine diagnostics & repair" },
      { id: 2, text: "Transmission services" },
      { id: 3, text: "Brake inspection & replacement" },
      { id: 4, text: "Preventive maintenance" },
      { id: 5, text: "Suspension & steering repair" },
      { id: 6, text: "DOT inspections" },
    ],
    primaryButton: {
      text: "Book Service",
      link: "/contact",
    },
    secondaryButton: {
      text: "Call Repair Shop",
      link: "/contact",
    },
  },

  {
    id: 5,
    badge: "Extended Warranty",
    title: "Protect Your Investment With Confidence",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop",
    description:
      "Our extended warranty programs provide additional peace of mind by protecting your truck against unexpected repair costs. Choose from multiple coverage plans that fit your operational needs.",
    features: [
      { id: 1, text: "Powertrain protection" },
      { id: 2, text: "Engine & transmission coverage" },
      { id: 3, text: "Electrical system coverage" },
      { id: 4, text: "Roadside assistance" },
      { id: 5, text: "Nationwide repair network" },
      { id: 6, text: "Flexible warranty plans" },
    ],
    primaryButton: {
      text: "View Warranty Plans",
      link: "/contact",
    },
    secondaryButton: {
      text: "Learn More",
      link: "/about",
    },
  },
];

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />

      {services.map((service, index) => (
        <ServiceSection
          key={service.title}
          service={service}
          reverse={index % 2 !== 0}
        />
      ))}

      <GetInTouch/>
    </>
  );
};

export default Services;

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "NLRC – National Laboratory & Research Center",
    type: "Full-Stack Development",
    img: "/img/logs.jpg", // 🖼️ Add your image path here
    points: [
      "Corporate website + admin CMS",
      "Integrated CRM for logistics & customer management",
      "Secure dashboard for client tracking",
    ],
    tech: ["Angular", "Node", "MongoDB", "AWS"],
  },
  {
    title: "The Q Quality – Product Certification",
    type: "Full-Stack Development",
    img: "/img/logs.jpg",
    points: [
      "Website + full-featured CRM",
      "Customer account & request handling",
      "Modular service request forms",
    ],
    tech: ["Angular", "Node", "MongoDB", "AWS"],
  },
  {
    title: "Percentum – Finance & Loan",
    type: "Full-Stack Development",
    img: "/img/logs.jpg",
    points: [
      "Finance & loan application system",
      "Norway BankID & VerID integration",
      "Custom WordPress plugin",
    ],
    tech: ["WordPress", "PHP", "JavaScript"],
  },
  {
    title: "RentoAny – P2P Rental Marketplace",
    type: "Frontend Development",
    img: "/img/logs.jpg",
    points: [
      "E-commerce web app",
      "Responsive product listing & cart",
      "Multi-vendor UX",
    ],
    tech: ["Angular", "RxJS", "TypeScript"],
  },
  {
    title: "Ways Cars – Chauffeur Booking",
    type: "Frontend Development",
    img: "/img/logs.jpg",
    points: [
      "Vehicle booking platform",
      "Google Maps integration",
      "Real-time slot booking",
    ],
    tech: ["Angular", "RxJS", "TypeScript"],
  },
  {
    title: "Nos Meilleurs – Shopify Beauty Store",
    type: "Full-Stack Development",
    img: "/img/logs.jpg",
    points: [
      "Custom Shopify theme",
      "Shopify app for business logic",
      "Backend API integrations",
    ],
    tech: ["Shopify", "React", "Node", "MongoDB"],
  },
  {
    title: "Humphry The Butler – Luxury Subscriptions",
    type: "Full-Stack Development",
    img: "/img/logs.jpg",
    points: ["Shopify custom theme", "Subscription-based delivery"],
    tech: ["Shopify", "Liquid", "JavaScript"],
  },
  {
    title: "Kick Ash Basket – Grilling Store",
    type: "Full-Stack Development",
    img: "/img/logs.jpg",
    points: [
      "Shopify grilling store",
      "Discount & tracking app integration",
    ],
    tech: ["Shopify", "Liquid", "JavaScript"],
  },
];

const Portfolio = () => {
  return (
    <section className="min-h-screen py-16 bg-gray-950 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
          Our Work
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
          Code that scales, designs that sell — transforming bold ideas into
          bullet-proof digital realities. A curated collection of full-stack,
          backend, and frontend solutions built for scale, security, and
          pixel-perfect user experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl shadow-lg text-left bg-gradient-to-br from-gray-900 to-gray-800 border border-emerald-400 hover:border-teal-400 hover:bg- transition-all duration-300"
            >
              {/* 🖼️ Project Image */}
              <div className="overflow-hidden rounded-xl mb-4">
                <motion.img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-48 object-cover rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <h3 className="text-xl font-semibold mb-1 text-white">
                {proj.title}
              </h3>
              <p className="text-sm font-medium text-teal-400 mb-3">
                {proj.type}
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4">
                {proj.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 border border-teal-400 text-teal-300 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

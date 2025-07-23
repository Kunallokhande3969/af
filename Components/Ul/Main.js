"use client";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Image from "next/image";

const careerCards = [
  {
    src: "https://d3atms9ic4lahi.cloudfront.net/banner-images/home_new/int_opps-student.png.webp",
    alt: "Internship Opportunities",
    title: "Premium Internships",
    description: "Work with Fortune 500 companies with stipends up to ₹7.3L",
    cta: "Apply Now",
    accentColor: "bg-blue-100",
    textColor: "text-blue-600"
  },
  {
    src: "https://d3atms9ic4lahi.cloudfront.net/banner-images/home_new/exp_hiring-student.png.webp",
    alt: "AI Careers",
    title: "AI Leadership Roles",
    description: "Top-tier positions with compensation up to ₹73LPA",
    cta: "View Openings",
    accentColor: "bg-purple-100",
    textColor: "text-purple-600"
  },
  {
    src: "https://d3atms9ic4lahi.cloudfront.net/banner-images/home_new/pgc_banner-student.png.webp",
    alt: "Online Courses",
    title: "Executive Education",
    description: "Upskill with programs from IITs and global universities",
    cta: "Explore Courses",
    accentColor: "bg-green-100",
    textColor: "text-green-600"
  }
];

const Main = () => {
  const [activeCard, setActiveCard] = useState(null);
  const { isAuthenticated } = useSelector((state) => state.studentReducer);

  const handleAuthAction = (e, path) => {
    if (!isAuthenticated) {
      e.preventDefault();
      toast.error("Please login to access this feature", {
        toastId: "auth-error",
        position: "bottom-center"
      });
    } else {
      window.location.href = path;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Build Your <span className="text-blue-600">Future</span> With Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access exclusive opportunities curated for India's top talent
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {careerCards.map((card, index) => (
            <div 
              key={index}
              className={`relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-96 border-t-4 ${card.accentColor}`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="absolute inset-0 h-full w-full">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className={`object-cover transition-transform duration-500 ${activeCard === index ? "scale-110" : "scale-100"}`}
                  quality={90}
                  priority={index === 0}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="relative h-full flex flex-col justify-end p-6">
                <div className={`transition-all duration-500 ${activeCard === index ? "translate-y-0" : "translate-y-8"}`}>
                  <span className={`inline-block px-3 py-1 rounded-full ${card.accentColor} ${card.textColor} text-sm font-medium mb-3`}>
                    New
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-gray-200 mb-5">{card.description}</p>
                </div>

                <button
                  onClick={(e) => handleAuthAction(e, "/student")}
                  className={`w-full flex items-center justify-center ${card.textColor} bg-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    activeCard === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"
                  } hover:bg-opacity-90`}
                >
                  {card.cta}
                  <FiArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto bg-gray-50 rounded-xl p-8 mb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to accelerate your career?</h3>
            <p className="text-gray-600 mb-6">Join 10,000+ professionals who transformed their careers with us</p>
            <button
              onClick={(e) => handleAuthAction(e, "/student")}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-lg text-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Started
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
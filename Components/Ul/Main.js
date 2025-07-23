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
    
    cta: "Apply Now",
    accentColor: "from-blue-500 to-blue-600",
    textColor: "text-blue-600"
  },
  {
    src: "https://d3atms9ic4lahi.cloudfront.net/banner-images/home_new/exp_hiring-student.png.webp",
    alt: "AI Careers",
    cta: "View Openings",
    accentColor: "from-purple-500 to-purple-600",
    textColor: "text-purple-600"
  },
  {
    src: "https://d3atms9ic4lahi.cloudfront.net/banner-images/home_new/pgc_banner-student.png.webp",
    alt: "Online Courses",
    cta: "Explore Courses",
    accentColor: "from-green-500 to-green-600",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build Your <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Future</span> With Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access exclusive opportunities curated for India's top talent
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {careerCards.map((card, index) => (
            <div 
              key={index}
              className={`relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-[28rem] border-t-4 ${card.textColor.replace('text-', 'border-')}`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Image Container with Smooth Zoom */}
              <div className="absolute inset-0 h-full w-full overflow-hidden">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className={`object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeCard === index ? "scale-105" : "scale-100"}`}
                  quality={90}
                  priority={index === 0}
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white z-10">
                {/* Floating "New" Badge */}
                <div className={`absolute -top-3 -right-3 ${card.textColor.replace('text-', 'bg-')} text-white px-3 py-1 rounded-full text-xs font-bold transform transition-all duration-500 ${activeCard === index ? "rotate-12 scale-110" : "rotate-0 scale-100"}`}>
                  NEW
                </div>

                {/* Text Content */}
                <div className={`transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeCard === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-90"}`}>
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-gray-200 mb-6">{card.description}</p>
                </div>

                {/* Animated Button */}
                <button
                  onClick={(e) => handleAuthAction(e, "/student")}
                  className={`w-full flex items-center justify-center bg-white ${card.textColor} py-3 px-6 rounded-lg font-semibold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    activeCard === index 
                      ? "opacity-100 translate-y-0 hover:scale-105 hover:shadow-md" 
                      : "opacity-0 translate-y-5 pointer-events-none"
                  }`}
                >
                  {card.cta}
                  <FiArrowRight className={`ml-2 transition-transform duration-300 ${activeCard === index ? "group-hover:translate-x-1" : ""}`} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 mb-10 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to accelerate your career?</h3>
            <p className="text-gray-600 mb-6">Join 10,000+ professionals who transformed their careers with us</p>
            <button
              onClick={(e) => handleAuthAction(e, "/student")}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl text-lg transition-all duration-500 hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl"
            >
              <span className="relative overflow-hidden">
                <span className="block transition-transform duration-500 group-hover:-translate-y-6">Get Started</span>
                <span className="absolute left-0 top-6 block w-full text-center transition-transform duration-500 group-hover:-translate-y-6">Let's Go!</span>
              </span>
              <FiArrowRight className="ml-3 transition-all duration-500 group-hover:translate-x-1 group-hover:scale-110" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
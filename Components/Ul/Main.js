"use client";
import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Image from "next/image";

const imageData = [
  {
    src: "https://d3atms9ic4lahi.cloudfront.net/banner-images/home_new/int_opps-student.png.webp",
    alt: "Internship Opportunities",
    title: "Internship Opportunities",
    description:
      "Gain real-world experience with top companies & earn up to 7.3 lacs stipend!",
    cta: "Find Internships",
  },
  {
    src: "https://d3atms9ic4lahi.cloudfront.net/banner-images/home_new/exp_hiring-student.png.webp",
    alt: "Experienced Hiring",
    title: "AI in Market Leadership",
    description:
      "Fast-track your career with dream roles & salaries up to 73 LPA",
    cta: "Apply now",
  },
  {
    src: "https://d3atms9ic4lahi.cloudfront.net/banner-images/home_new/pgc_banner-student.png.webp",
    alt: "PGC Banner",
    title: "Online Courses",
    description: "Professional development with expert-led training resources",
    cta: "Know more",
  },
];

const Main = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { isAuthenticated } = useSelector((state) => state.studentReducer);

  const handleProtectedNav = (e, path) => {
    if (!isAuthenticated) {
      e.preventDefault();
      if (!toast.isActive("auth-error")) {
        toast.error("Please log in to access resources.", {
          toastId: "auth-error",
        });
      }
    } else {
      window.location.href = path;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Make Your <span className="text-blue-600">Dream Career</span> A
            Reality
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover opportunities that align with your aspirations and skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {imageData.map((item, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 h-[380px]"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredCard === idx ? "scale-105" : "scale-100"
                  }`}
                  quality={80}
                  priority={idx === 0}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="relative h-full flex flex-col justify-end p-6 text-white z-10">
                <div
                  className={`transition-all duration-500 ${
                    hoveredCard === idx ? "translate-y-0" : "translate-y-8"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="mb-4 opacity-90 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>

                <button
                  onClick={(e) => handleProtectedNav(e, "/student")}
                  className={`inline-flex items-center font-medium bg-white text-gray-900 px-5 py-2 rounded-full transition-all duration-300 ${
                    hoveredCard === idx
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5 pointer-events-none"
                  } hover:bg-blue-600 hover:text-white`}
                >
                  {item.cta} <FiArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={(e) => handleProtectedNav(e, "/student")}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-full text-base hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Explore All Opportunities <FiArrowRight className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Main;

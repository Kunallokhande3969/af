"use client";
import React, { useCallback, useState, useEffect } from "react";
import { FcBriefcase } from "react-icons/fc";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProtectedNav = useCallback(
    (e, path) => {
      if (!isAuthenticated) {
        e.preventDefault();
        const toastId = "auth-toast";
        if (!toast.isActive(toastId)) {
          toast.error("Please log in to access this resource!", {
            toastId: toastId,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } else {
        window.location.href = path;
      }
    },
    [isAuthenticated]
  );

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`w-full bg-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <FcBriefcase className="text-3xl" />
              <h1 className="text-2xl font-bold text-gray-800">
                <span className="text-blue-600">Career</span>Hub
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={(e) => handleProtectedNav(e, "/jobs")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-3 py-2"
            >
              Jobs / Internships
            </button>

            <button className="flex items-center gap-1 group px-3 py-2">
              <span className="text-gray-700 group-hover:text-blue-600 font-medium transition-colors duration-200">
                Online Trainings
              </span>
              <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                OFFER
              </span>
            </button>

            <button
              onClick={(e) => handleProtectedNav(e, "/fresher-jobs")}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-3 py-2"
            >
              Fresher Jobs
            </button>

            <Link
              href="/student"
              className="px-4 py-2 rounded-lg border border-blue-500 text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200 text-sm"
            >
              Student
            </Link>

            <Link
              href="/employe"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium transition-all duration-200 text-sm shadow-sm hover:shadow-md"
            >
              Employer
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t border-gray-200">
          <button
            onClick={(e) => {
              handleProtectedNav(e, "/jobs");
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            Jobs / Internships
          </button>

          <button className="flex items-center w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
            <span>Online Trainings</span>
            <span className="ml-2 bg-yellow-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              OFFER
            </span>
          </button>

          <button
            onClick={(e) => {
              handleProtectedNav(e, "/fresher-jobs");
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
          >
            Fresher Jobs
          </button>

          <Link
            href="/student"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:bg-blue-50"
          >
            Student
          </Link>

          <Link
            href="/employe"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Employer
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
// Header.tsx
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { PiBuildingOffice } from "react-icons/pi";
import { IoLogoFirebase } from "react-icons/io5";

const linkClasses = "flex items-center hover:text-gray-400 space-x-2";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  // const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detect which section is currently active on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="bg-white text-black border-b-2 sticky top-0 left-0 z-[100]">
      <div className="h-[3.5rem] md:h-[4.3rem] mx-auto px-4 lg:px-[4rem] flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold h-[4.3rem] flex items-center">
            <b className="text-red-500">MoritZ</b>
        </div>

        {/* Navigation links for larger screens */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#services"
            className={
              activeSection === "services"
                ? `${linkClasses} text-red-500 bg-gray-200 rounded`
                : linkClasses
            }
          >
            <span className="text-lg">Our services</span>
          </a>
          <a
            href="#about"
            className={
              activeSection === "about"
                ? `${linkClasses} text-red-500 bg-gray-200 rounded`
                : linkClasses
            }
          >
            <span className="text-lg">About us</span>
          </a>
          <a
            href="#products"
            className={
              activeSection === "products"
                ? `${linkClasses} text-red-500 bg-gray-200 rounded`
                : linkClasses
            }
          >
            <span className="text-lg">Products</span>
          </a>
          <div className="flex items-center space-x-2 ">
            <button
              className="text-white bg-red-500 px-4 py-2 rounded"
              aria-label="Login"
            >
              Contact us
            </button>
          </div>
        </nav>

        {/* Hamburger menu for smaller screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <AiOutlineMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-90 bg-white transform overflow-y-auto ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden w-3/4 max-w-sm`}
      >
        <nav className="pl-4 flex flex-col justify-between h-full gap-1">
        <div className="text-2xl font-bold h-[4.3rem] flex items-center">
            <b className="text-red-500">MoritZ</b>
        </div>
          <div className="flex flex-col items-start space-y-4 gap-3 border-r-2 h-full max-h-[40rem] pt-3 pb-9 pr-4">
            <a
              href="#services"
              className={
                activeSection === "services"
                  ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                  : linkClasses
              }
              onClick={() => setIsOpen(false)}
            >
              <MdOutlineHomeRepairService className="text-2xl" /> <span>Our services</span>
            </a>
            <a
              href="#about"
              className={
                activeSection === "about"
                  ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                  : linkClasses
              }
              onClick={() => setIsOpen(false)}
            >
              <PiBuildingOffice className="text-2xl" />
              <span>About us</span>
            </a>
            <a
              href="#products"
              className={
                activeSection === "products"
                  ? `${linkClasses} text-red-500 bg-gray-200 w-full px-2 py-2 shadow-custom rounded`
                  : linkClasses
              }
              onClick={() => setIsOpen(false)}
            >
              <IoLogoFirebase className="text-2xl" />
              <span>Products</span>
            </a>
          </div>
          <div className="flex items-center w-full h-full max-h-[5rem] border-r-2 pr-4">
            <button
              className="text-white bg-red-500 px-4 py-2 rounded w-full max-w-[20rem] font-semibold"
              aria-label="Login"
            >
              Contact Us
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import MobileMenu from "./MobileMenu";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/dreamersdontstop.svg";
import NavStore from "./NavStore";
import Search from "@/components/inputs/Search";

// Props interface for the SidebarMobileMenu component

const user = {
  name: "Cosmos Store",
  email: "store@cosmos.com",
  avatar:
    "https://www.creativefabrica.com/wp-content/uploads/2023/02/11/Galaxy-Astronaut-Monkey-Painting-60761789-1.png",
};
const menuItems = [
  { label: "AboutUs", href: "#" },
  { label: "Treatments", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact Us", href: "#" },
];

// SidebarMobileMenu component
const SidebarMobileMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div>
      {/* Button to toggle mobile menu visibility */}
      <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
        <div className="md:hidden flex-1 flex justify-between items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="my-3 ml-8 z-50 text-gray-600 focus:outline-none  focus:ring-2 focus:ring-inset focus:ring-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        <Search />
        </div>
      </header>

      {/* Sidebar for large screens */}
      <div className="hidden md:block">
        <NavStore menuItems={menuItems} />
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div
            className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg"
            ref={menuRef}
          >
            <div className="px-6 flex items-center justify-between h-20 p-4 border-b border-gray-700">
              <Button variant="outline" size="icon" aria-label="Home">
                <img src={Logo} className="size-9 fill-foreground" />
              </Button>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <MobileMenu items={menuItems} user={user} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarMobileMenu;

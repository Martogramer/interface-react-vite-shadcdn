import Search from "@/components/inputs/Search";
import React from "react";

interface MenuItem {
  label: string;
  href: string;
}

interface HeaderProps {
  menuItems: MenuItem[];
}

const NavStore: React.FC<HeaderProps> = ({ menuItems }) => {
  return (
    <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
      <div className="flex-1 flex justify-between items-center"></div>
      <div className="flex-1 flex justify-between items-center">
        {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}
        <Search />
      </div>

      <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
        <svg
          className="fill-current text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input className="hidden" type="checkbox" id="menu-toggle" />

      {/* Este div sólo se mostrará en pantallas grandes */}
      <div
        className="hidden md:flex md:items-center md:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="md:p-4 py-3 px-0 block">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavStore;

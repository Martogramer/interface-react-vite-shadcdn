import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface SubItem {
  label: string;
  href: string;
}
interface Item {
  label: string;
  href?: string;
  subItems?: SubItem[];
  type?: "link" | "button";
  onClick?: () => void;
}
interface SidebarProps {
  items: Item[];
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

const MobileMenu: React.FC<SidebarProps> = ({ items, user }) => {
  return (
    <div className="flex h-screen flex-col justify-between border-e bg-white">
      <ScrollArea>
        <div className="px-3 py-3">
          <ul className="mt-6 space-y-1">
            {items.map((item, index) => (
              <li key={index}>
                {item.subItems ? (
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </summary>
                    <ul className="mt-2 space-y-1 px-4">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.href}
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <a
                    href={item.href}
                    className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                      item.href
                        ? "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        : ""
                    }`}
                    onClick={item.onClick}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
        >
          <img
            alt="User avatar"
            src={user.avatar}
            className="size-10 rounded-full object-cover"
          />
          <div>
            <p className="text-xs">
              <strong className="block font-medium">{user.name}</strong>
              <span> {user.email} </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;

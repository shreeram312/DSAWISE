"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaHome,
  FaUsers,
  FaKey,
  FaTags,
  FaCogs,
  FaTrophy,
} from "react-icons/fa"; // Importing new icons

const Sidebar = () => {
  const pathname = usePathname();
  const lastSegment = pathname.split("/").filter(Boolean).pop();

  const navItems = [
    { name: "Home", href: "/home", icon: <FaHome /> },
    { name: "Users", href: "/users", icon: <FaUsers /> },
    { name: "Roles", href: "/roles", icon: <FaKey /> },
    { name: "Permissions", href: "/permissions", icon: <FaKey /> },
    { name: "Categories", href: "/categories", icon: <FaTags /> },
    { name: "Leaderboard", href: "/leaderboard", icon: <FaTrophy /> },
    { name: "Settings", href: "/settings", icon: <FaCogs /> },
  ];

  return (
    <aside className="hidden md:block w-72 border-r border-gray-800 rounded-md bg-black min-h-screen sticky top-0 shadow-lg">
      {/* Logo Section */}
      <div className="py-6 px-6 bg-black border-b border-gray-700">
        <p className="text-left text-2xl font-bold bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
          Dashboard
        </p>
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className="space-y-2 p-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <a
                  className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                      : "text-gray-300 hover:bg-gray-900"
                  }`}
                  href={item.href}
                >
                  <span
                    className={`w-5 h-5 mr-3 ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

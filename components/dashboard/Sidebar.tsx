"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaHome, FaUsers, FaCogs, FaTrophy } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { ToggleButton } from "@/app/actions/togglebutton";
import { useAppContext } from "@/lib";
import { BsIncognito } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { userData } = useAppContext();
  const [isPrivate, setIsPrivate] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("isPrivate");
      setIsPrivate(savedState ? JSON.parse(savedState) : false);
    }
  }, []);

  useEffect(() => {
    if (isPrivate !== null && typeof window !== "undefined") {
      localStorage.setItem("isPrivate", JSON.stringify(isPrivate));
    }
  }, [isPrivate]);

  const handleToggle = async () => {
    try {
      const updatedStatus = await ToggleButton(userData.email, !isPrivate);
      setIsPrivate(updatedStatus.isPrivate);
    } catch (error) {
      console.error("Failed to update privacy status:", error);
    }
  };

  const navItems = [
    { name: "Home", href: "/home", icon: <FaHome /> },
    { name: "Discussions", href: "/discussions", icon: <FaUsers /> },
    { name: "Leaderboard", href: "/leaderboard", icon: <FaTrophy /> },
    { name: "Profile", href: "/profile", icon: <CgProfile /> },
    { name: "Settings", href: "/settings", icon: <FaCogs /> },
  ];

  return (
    <aside className="hidden cursor-pointer md:block w-72 border-r border-gray-800 rounded-md bg-black min-h-screen sticky top-0 shadow-lg">
      <div className="py-6 px-6 bg-black border-b border-gray-700 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {isPrivate === null ? (
            <div className="h-8 w-8 bg-gray-700 animate-pulse rounded-full " />
          ) : (
            <span
              className={`text-2xl  font-semibold ${
                isPrivate ? "text-red-600" : "text-green-500"
              }`}
            >
              {isPrivate ? <BsIncognito /> : <IoMdPerson />}
            </span>
          )}

          {isPrivate === null ? (
            <div className="w-20 h-10 bg-gray-700 animate-pulse rounded-full" />
          ) : (
            <button
              onClick={handleToggle}
              className={`relative flex items-center justify-center w-20 h-10 rounded-full p-1 transition-all duration-300 ease-in-out ${
                isPrivate
                  ? "bg-gradient-to-r from-red-500 to-orange-400"
                  : "bg-gradient-to-r from-green-500 to-blue-400"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  isPrivate ? "translate-x-full" : "-translate-x-full"
                }`}
              />
            </button>
          )}
        </div>
      </div>

      <nav>
        <ul className="space-y-2 p-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <p
                  className={`flex items-center px-6 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                      : "text-gray-300 hover:bg-gray-900"
                  }`}
                  onClick={() => {
                    router.push(item.href);
                  }}
                >
                  <span
                    className={`w-5 h-5 mr-3 ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

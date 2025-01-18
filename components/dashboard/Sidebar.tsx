import React from "react";
import { FaHome, FaUsers, FaKey, FaTags } from "react-icons/fa"; // Importing icons
import { RiDashboardFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div>
      <aside className="hidden md:block w-72 bg-black min-h-screen sticky top-0 shadow-lg">
        {/* Logo Section */}
        <div className="py-6 px-6 bg-black border-b border-gray-700">
          <a href="/" className="text-2xl font-bold text-yellow-500">
            Recent Tracks
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6">
          <ul className="space-y-2">
            {/* Dashboard */}
            <li>
              <a
                className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                href="/"
              >
                <RiDashboardFill className="w-5 h-5 mr-3 text-gray-400" />
                <span>Dashboard</span>
              </a>
            </li>

            {/* Users */}
            <li>
              <a
                className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                href="/users"
              >
                <FaUsers className="w-5 h-5 mr-3 text-gray-400" />
                <span>Users</span>
              </a>
            </li>

            {/* Roles */}
            <li>
              <a
                className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                href="/roles"
              >
                <FaKey className="w-5 h-5 mr-3 text-gray-400" />
                <span>Roles</span>
              </a>
            </li>

            {/* Permissions */}
            <li>
              <a
                className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                href="/permissions"
              >
                <FaKey className="w-5 h-5 mr-3 text-gray-400" />
                <span>Permissions</span>
              </a>
            </li>

            {/* Categories */}
            <li>
              <a
                className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                href="/categories"
              >
                <FaTags className="w-5 h-5 mr-3 text-gray-400" />
                <span>Categories</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;

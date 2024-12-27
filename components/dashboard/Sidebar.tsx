import React from "react";

const Sidebar = () => {
  return (
    <div>
      <aside className="hidden md:block w-64 bg-black min-h-screen">
        {/* Logo Section */}
        <div className="py-4 text-2xl uppercase text-center tracking-widest bg-[#0D0D0D] border-b border-gray-700">
          <a href="/" className="text-white font-bold">
            Logo
          </a>
        </div>

        {/* Navigation Menu */}
        <nav className="text-sm text-gray-300">
          <ul>
            {/* Dashboard */}
            <li className="px-4 cursor-pointer hover:bg-[#1A1A1A] transition-colors">
              <a className="py-3 flex items-center" href="/">
                <svg
                  className="w-5 mr-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18"
                  />
                </svg>
                <span className="text-white">Dashboard</span>
              </a>
            </li>

            {/* User Management Header */}
            <li className="px-4 py-2 text-xs uppercase font-bold text-gray-500 mt-4">
              User Management
            </li>

            {/* Users */}
            <li className="px-4 cursor-pointer hover:bg-[#1A1A1A] transition-colors">
              <a className="py-3 flex items-center" href="/users">
                <svg
                  className="w-5 mr-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Z"
                  />
                </svg>
                <span className="text-white">Users</span>
              </a>
            </li>

            {/* Roles */}
            <li className="px-4 cursor-pointer hover:bg-[#1A1A1A] transition-colors">
              <a className="py-3 flex items-center" href="/roles">
                <svg
                  className="w-5 mr-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <span className="text-white">Roles</span>
              </a>
            </li>

            {/* Permissions */}
            <li className="px-4 cursor-pointer hover:bg-[#1A1A1A] transition-colors">
              <a className="py-3 flex items-center" href="/permissions">
                <svg
                  className="w-5 mr-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75"
                  />
                </svg>
                <span className="text-white">Permissions</span>
              </a>
            </li>

            {/* Product Management Header */}
            <li className="px-4 py-2 text-xs uppercase font-bold text-gray-500 mt-4">
              Product Management
            </li>

            {/* Categories */}
            <li className="px-4 cursor-pointer hover:bg-[#1A1A1A] transition-colors">
              <a className="py-3 flex items-center" href="/categories">
                <svg
                  className="w-5 mr-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878"
                  />
                </svg>
                <span className="text-white">Categories</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;

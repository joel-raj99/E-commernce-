"use client";

import Image from "next/image";
import { Bell, Search, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-64 right-0 bg-white border-b border-gray-200 shadow-sm h-16 flex items-center justify-between px-6 z-50">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition">
          <Menu className="w-5 h-5 text-gray-600" />
        </button>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 text-sm rounded-lg border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64 transition"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="relative w-8 h-8">
            <Image
              src="/images.png" // ✅ Replace with your image path in /public/images/
              alt="Admin Avatar"
              fill
              className="rounded-full border border-gray-300 object-cover"
              sizes="40px"
            />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-700">Admin User</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCurrentUser, logout } from "@/lib/auth";
import { Menu, X } from "lucide-react";

export default function DashboardNavbar() {
  const router = useRouter();
  const [user, setUser] = useState<{
    name: string;
    email: string;
    profilePic: string;
  } | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const data = getCurrentUser();
    setUser(data);
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <nav className=" bg-white/70 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo and Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-2xl font-bold text-purple-600"
          >
            PrepMate<span className="text-gray-900">AI</span>
          </Link>
        </div>

        {/* Right: User Info and Menu Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium text-gray-800">{user?.name}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
          <img
            src={"https://i.pravatar.cc/150?img=12"}
            alt="Avatar"
            className="w-10 h-10 rounded-full object-cover border"
          />

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t px-6 py-4 space-y-4 transition-all">
          <Link
            href="/interview"
            onClick={() => setIsMenuOpen(false)}
            className="block font-medium text-gray-800 hover:text-purple-600"
          >
            Interviews
          </Link>
          <button
            onClick={() => {
              setIsMenuOpen(false);
              handleLogout();
            }}
            className="w-full text-left font-medium text-red-600 hover:underline pt-2"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

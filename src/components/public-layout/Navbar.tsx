"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@constants/navLinks";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionOffsets = navLinks.map((link) => {
      const el = document.getElementById(link.href);
      return { id: link.href, offsetTop: el?.offsetTop || 0 };
    });

    const onScroll = () => {
      const scrollY = window.scrollY + 120;
      for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (scrollY >= sectionOffsets[i].offsetTop) {
          setActiveSection(sectionOffsets[i].id);
          break;
        }
      }
    };

    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-purple-600">
          PrepMate<span className="text-gray-900">AI RANA</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className={`text-sm font-medium transition hover:text-purple-600 ${
                activeSection === link.href
                  ? "text-purple-600"
                  : "text-gray-800"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop button */}
        <div className="hidden md:flex space-x-3">
          <Link
            href="/auth/register"
            className="rounded bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger / X icon toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-gray-800" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white shadow-md ${
          menuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-start px-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={closeMenu}
              className="text-base font-medium text-gray-800 hover:text-purple-600"
            >
              {link.name}
            </a>
          ))}
          <Link
            href="/auth/register"
            onClick={closeMenu}
            className="rounded bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

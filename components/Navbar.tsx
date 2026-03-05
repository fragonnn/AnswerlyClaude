"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { label: "Home", href: isHome ? "#hero" : "/" },
    { label: "How It Works", href: isHome ? "#how-it-works" : "/#how-it-works" },
    { label: "FAQ", href: isHome ? "#faq" : "/#faq" },
    { label: "Categories", href: isHome ? "#categories" : "/#categories" },
    { label: "About Us", href: isHome ? "#about" : "/#about" },
  ];

  return (
    <header className="absolute top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50">
      <nav className="bg-white rounded-2xl shadow-xl px-6 py-3">
        {/* Top bar: Logo + Desktop links + CTA + Hamburger */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 tracking-tight select-none"
          >
            Answerly
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/pricing"
              className="hidden lg:inline-flex items-center bg-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-xl hover:bg-blue-700 active:scale-95 transition-all duration-150 shadow-sm"
            >
              Join Beta
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 19.9999H31.6667M8.33337 8.33325H31.6667M21.6667 31.6666H31.6667"
                  stroke="#242E49"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile + Tablet Dropdown — inside same card */}
        {menuOpen && (
          <ul className="lg:hidden flex flex-col gap-4 pt-4 mt-3 border-t border-gray-100">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}

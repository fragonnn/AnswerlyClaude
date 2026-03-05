"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const h = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <footer className="bg-[#141825] text-white px-6 pt-12 md:pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Top section */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 md:justify-between mb-12 md:mb-16">
          {/* Brand */}
          <div className="max-w-[300px]">
            <h3 className="text-2xl font-bold mb-4">Answerly</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-[26px]">
              We connect you with verified experts
              in various fields to provide instant,
              reliable answers to your most pressing
              questions.
            </p>

            {/* Social icons — mobile & tablet only */}
            {/* TODO: Replace href="#" with real social media URLs */}
            <div className="flex items-center gap-4 lg:hidden">
              <a href="#" aria-label="YouTube" className="text-white hover:text-gray-300 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-gray-300 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-white hover:text-gray-300 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-white hover:text-gray-300 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-[117px] md:gap-x-12 lg:gap-16">
            {/* Menu */}
            <div>
              <h4 className="font-semibold text-sm mb-[20px] md:mb-4">Menu</h4>
              <ul className="flex flex-col gap-3">
                <li><a href={isHome ? "#hero" : "/"} className="text-gray-400 text-sm hover:text-white transition-colors">Home</a></li>
                <li><a href={h("#how-it-works")} className="text-gray-400 text-sm hover:text-white transition-colors">How It Works</a></li>
                <li><a href={h("#faq")} className="text-gray-400 text-sm hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/pricing" className="text-gray-400 text-sm hover:text-white transition-colors">Pricing</a></li>
                <li><a href={h("#categories")} className="text-gray-400 text-sm hover:text-white transition-colors">Categories</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-sm mb-[20px] md:mb-4">Support</h4>
              <ul className="flex flex-col gap-3">
                <li><a href={h("#faq")} className="text-gray-400 text-sm hover:text-white transition-colors">FAQ&apos;s</a></li>
                {/* TODO: Add contact page route when available */}
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Contact Us</a></li>
                {/* TODO: Add careers page route when available */}
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="col-span-2 lg:col-span-1">
              <h4 className="font-semibold text-sm mb-[20px] md:mb-4">Legal</h4>
              <ul className="flex flex-col gap-3">
                {/* TODO: Add terms of service page route when available */}
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</a></li>
                {/* TODO: Add privacy policy page route when available */}
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</a></li>
                {/* TODO: Add cookies page route when available */}
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright + Social icons */}
        <div className="border-t border-gray-700 pt-8 flex items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">&copy; 2024 Quasi. All rights reserved.</p>

          {/* Social icons — desktop only */}
          {/* TODO: Replace href="#" with real social media URLs */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#" aria-label="YouTube" className="text-white hover:text-gray-300 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-gray-300 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="text-white hover:text-gray-300 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-white hover:text-gray-300 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
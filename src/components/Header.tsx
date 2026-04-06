"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center font-bold text-sm group-hover:bg-red-500 transition-colors">
              TCS
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight">
                The Consumer Story
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/cases"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              All Cases
            </Link>
            <Link
              href="/know-your-rights"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              Know Your Rights
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              About
            </Link>
            <Link
              href="/submit"
              className="ml-2 px-4 py-2 rounded-md text-sm font-medium bg-red-600 hover:bg-red-700 transition-colors"
            >
              Share Your Story
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-700 mt-2 pt-2">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/cases"
              className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Cases
            </Link>
            <Link
              href="/know-your-rights"
              className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Know Your Rights
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/submit"
              className="block px-3 py-2 rounded-md text-sm font-medium text-red-400 hover:bg-slate-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Share Your Story
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

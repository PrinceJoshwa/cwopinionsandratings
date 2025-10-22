"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, User, Menu, X } from 'lucide-react';

const LogoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="header-logo-gradient-1" x1="5" y1="5" x2="19" y2="19" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6" />
        <stop offset="1" stopColor="#9333EA" />
      </linearGradient>
      <linearGradient id="header-logo-gradient-2" x1="5" y1="12" x2="19" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#EC4899" />
        <stop offset="1" stopColor="#F97316" />
      </linearGradient>
    </defs>
    <rect x="5" y="13" width="3" height="6" rx="1.5" fill="url(#header-logo-gradient-1)" />
    <rect x="10.5" y="9" width="3" height="10" rx="1.5" fill="url(#header-logo-gradient-1)" />
    <rect x="16" y="5" width="3" height="14" rx="1.5" fill="url(#header-logo-gradient-1)" />
    <path d="M5 13C5 12.4477 5.44772 12 6 12H18C18.5523 12 19 12.4477 19 13V17C19 17.5523 18.5523 18 18 18H6C5.44772 18 5 17.5523 5 17V13Z" fill="url(#header-logo-gradient-2)" fillOpacity="0.2" />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Predictions", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Leaderboard", href: "#" },
    { name: "India Polls", href: "#" },
    { name: "US Polls", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex cursor-pointer items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-50 blur-md" />
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px] shadow-lg">
                  <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950">
                    <LogoIcon />
                  </div>
                </div>
              </div>
              <div className="hidden flex-col sm:flex">
                <span className="text-lg leading-tight text-white">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Opinions</span>
                  and
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Ratings</span>
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              <Link href="#" className="text-sm text-white transition-colors">
                <span className="inline-block whitespace-nowrap rounded-full bg-gradient-to-r from-red-500 to-red-600 px-3 py-1.5">
                  For You
                </span>
              </Link>
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm text-slate-300 transition-colors hover:text-white">
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                placeholder="Search Keyword"
                className="w-48 rounded-lg border border-slate-700 bg-slate-800/50 py-2 pl-10 pr-4 text-sm text-slate-300 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-slate-700">
              <User className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500 md:hidden"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isMenuOpen ? 'max-h-96 border-t border-slate-800/50' : 'max-h-0'}`}>
        <nav className="flex flex-col gap-4 px-4 py-4">
          <Link href="#" className="w-fit rounded-full bg-gradient-to-r from-red-500 to-red-600 px-3 py-1.5 text-sm text-white">
            For You
          </Link>
          {navItems.map((item) => (
            <Link key={`mobile-${item.name}`} href={item.href} className="text-sm text-slate-300 hover:text-white">
              {item.name}
            </Link>
          ))}
          <div className="relative w-full pt-2">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              placeholder="Search Keyword"
              className="w-full rounded-lg border border-slate-700 bg-slate-800/50 py-2 pl-10 pr-4 text-sm text-slate-300 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
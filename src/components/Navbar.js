"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import AnimatedLogo from "./AnimatedLogo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLink = (href, label) => (
    <Link
      href={href}
      className="rounded-md px-4 py-2 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors"
      onClick={() => setMobileOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="absolute inset-x-0 top-0 z-30 w-full">
      {/* Logo - top left, consistent across pages */}
      <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
        <AnimatedLogo isInNavbar={true} width={260} height={260} />
      </div>

      {/* Desktop Navigation - top right, simplified */}
      <nav className="hidden sm:flex items-center gap-1 absolute right-4 top-4 sm:right-6 sm:top-6">
        <Link href="/" className="rounded-md px-4 py-2 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors">Home</Link>
        <Link href="/about" className="rounded-md px-4 py-2 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors">About</Link>
        <Link href="/#contact" className="rounded-md px-4 py-2 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors">Contact</Link>
      </nav>
      {/* Mobile Menu Button - top right */}
      <button
        className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10 focus:outline-none transition-colors absolute right-3 top-3"
        aria-label="Toggle menu"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <svg
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {mobileOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu - dropdown from top right */}
      {mobileOpen && (
        <>
          {/* Backdrop to close when clicking outside */}
          <div
            className="sm:hidden fixed inset-0 z-20"
            onClick={() => setMobileOpen(false)}
          />

          {/* Menu panel */}
          <div className="sm:hidden absolute right-3 top-14 z-30 w-[calc(100%-1.5rem)] max-w-xs">
            <div
              className="flex flex-col rounded-lg border border-white/10 bg-black/80 backdrop-blur-md p-2 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {navLink("/", "Home")}
              {navLink("/about", "About")}
              {navLink("/#contact", "Contact")}
            </div>
          </div>
        </>
      )}
    </header>
  );
}



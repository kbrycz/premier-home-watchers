"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import AnimatedLogo from "./AnimatedLogo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  const projects = [
    { name: "Chicken Coops", href: "/chicken-coops" },
    { name: "Concrete Foundations", href: "/concrete-foundations" },
    { name: "Pole Barns", href: "/pole-barns" },
    { name: "Sheds", href: "/sheds" },
    { name: "Flooring", href: "/flooring" },
    { name: "General Contracting", href: "/general-contracting" },
  ];

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

      {/* Desktop Navigation - top right, consistent across pages */}
      <nav className="hidden sm:flex items-center gap-1 absolute right-4 top-4 sm:right-6 sm:top-6">
            <Link href="/" className="rounded-md px-4 py-2 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors">
              Home
            </Link>
            <Link href="/about" className="rounded-md px-4 py-2 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors">
              About
            </Link>
            <Link href="/gallery" className="rounded-md px-4 py-2 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors">
              Gallery
            </Link>
            
            {/* Projects Dropdown */}
            <div className="relative">
              <button
                className="rounded-md px-4 py-2 text-base font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1"
                onClick={() => setProjectsOpen(!projectsOpen)}
                onBlur={(e) => {
                  // Close dropdown when clicking outside
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setTimeout(() => setProjectsOpen(false), 150);
                  }
                }}
              >
                Projects
                <svg className={`h-4 w-4 transition-transform ${projectsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {projectsOpen && (
                <div className="absolute right-0 mt-1 w-56 rounded-lg border border-white/20 bg-black/80 backdrop-blur-md shadow-lg">
                  <div className="py-2">
                    {projects.map((project) => (
                      <Link
                        key={project.href}
                        href={project.href}
                        className="block px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                        onClick={() => setProjectsOpen(false)}
                      >
                        {project.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>
      {/* Mobile Menu Button - top right */}
      <button
        className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10 focus:outline-none transition-colors absolute right-3 top-3"
        aria-label="Toggle menu"
        onClick={() => {
          const next = !mobileOpen;
          setMobileOpen(next);
          if (next) setMobileProjectsOpen(false);
        }}
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
              {navLink("/gallery", "Gallery")}
              <div className="border-t border-white/10 my-2"></div>
              <button
                className="flex items-center justify-between px-4 py-2 text-xs font-semibold text-white/70 uppercase tracking-wider hover:text-white"
                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
              >
                <span>Projects</span>
                <svg className={`h-4 w-4 transition-transform ${mobileProjectsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileProjectsOpen && (
                <div className="pb-1 flex flex-col">
                  {projects.map((project) => (
                    <Link
                      key={project.href}
                      href={project.href}
                      className="block w-full rounded-md px-6 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {project.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
}



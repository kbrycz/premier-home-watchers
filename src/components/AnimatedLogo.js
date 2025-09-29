"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AnimatedLogo({ 
  isInNavbar = false, 
  className = "",
  width = 160,
  height = 160 
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // We use shared layoutId without scale transforms so position stays exact.

  if (isInNavbar && !isHomePage) {
    // Logo in navbar for non-home pages
    return (
      <Link href="/" className="block">
        <motion.div
          layoutId="main-logo"
          className="overflow-hidden w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-b from-white/90 to-white/60 p-[2px] ring-1 ring-black/10 shadow-md"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Image
            src="/images/main.jpg"
            alt="Premier Home Watchers couple portrait"
            width={width}
            height={height}
            priority
            className="h-full w-full rounded-full object-cover"
          />
        </motion.div>
      </Link>
    );
  }

  // Hide navbar logo on the home page to avoid duplicate with hero logo
  if (isInNavbar && isHomePage) {
    return null;
  }

  if (isHomePage && !isInNavbar) {
    // Large logo in hero section on home page
    return (
      <motion.div
        layoutId="main-logo"
        className={`mb-6 overflow-hidden rounded-full bg-gradient-to-b from-white/90 to-white/60 p-[3px] ring-1 ring-black/10 shadow-xl ${className}`}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <Image
          src="/images/main.jpg"
          alt="Premier Home Watchers couple portrait"
          width={width}
          height={height}
          priority
          className="h-full w-full rounded-full object-cover"
        />
      </motion.div>
    );
  }

  // Fallback - regular logo without animation
  return (
    <div className={`w-10 h-10 overflow-hidden rounded-full bg-gradient-to-b from-white/90 to-white/60 p-[2px] ring-1 ring-black/10 shadow-md ${className}`}>
      <Image
        src="/images/main.jpg"
        alt="Premier Home Watchers couple portrait"
        width={width}
        height={height}
        priority
        className="h-full w-full rounded-full object-cover"
      />
    </div>
  );
}

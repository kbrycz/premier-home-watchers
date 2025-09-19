"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AnimatedLogo({ 
  isInNavbar = false, 
  className = "",
  width = 260,
  height = 260 
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
          className="overflow-hidden w-12 h-12 sm:w-14 sm:h-14"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <Image
            src="/images/logo-big.png"
            alt="Bullfrog Builders"
            width={width}
            height={height}
            priority
            className="h-full w-full object-contain"
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
        className={`mb-6 ${className}`}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <Image
          src="/images/logo-big.png"
          alt="Bullfrog Builders"
          width={width}
          height={height}
          priority
          className="h-full w-full object-contain"
        />
      </motion.div>
    );
  }

  // Fallback - regular logo without animation
  return (
    <div className={`w-12 h-12 ${className}`}>
      <Image
        src="/images/logo-big.png"
        alt="Bullfrog Builders"
        width={width}
        height={height}
        priority
        className="h-full w-full object-contain"
      />
    </div>
  );
}

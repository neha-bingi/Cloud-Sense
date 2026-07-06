"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-lg">

      <div className="px-4 sm:px-6 md:px-8 py-3 md:py-4 flex flex-col sm:flex-row items-center justify-between gap-3">

        <h1 className="text-xl sm:text-2xl font-bold text-pink-500">
          CloudSense
        </h1>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-sm sm:text-base text-pink-600 font-medium">

          <Link
            href="/"
            className="hover:text-pink-700 transition-colors"
          >
            Home
          </Link>

          <Link
            href={pathname === "/" ? "#features" : "/#features"}
            className="hover:text-pink-700 transition-colors"
          >
            Features
          </Link>

          <Link
            href={pathname === "/" ? "#about" : "/#about"}
            className="hover:text-pink-700 transition-colors"
          >
            About
          </Link>

          <Link
            href="/estimator"
            className="hover:text-pink-700 transition-colors"
          >
            Estimator
          </Link>

        </div>

      </div>

    </nav>
  );
}
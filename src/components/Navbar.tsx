"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "The Practice", href: "/about" },
    { name: "Specialists", href: "/doctors" },
  ];

  const isHome = pathname === "/";
  const shouldBeSolid = !isHome || isScrolled;

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-700">
      <nav
        className={`w-full transition-all duration-700 ${
          shouldBeSolid
            ? "bg-[#F4F2EC]/95 backdrop-blur-xl border-b border-[#2A2A2A]/5 py-4 shadow-sm"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-6 lg:px-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <span className={`text-xl md:text-2xl font-heading tracking-wide transition-colors duration-700 ${shouldBeSolid ? "text-[#2A2A2A]" : "text-white"}`}>
              Smile<span className="italic font-light">Craft.</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[10px] tracking-[0.2em] uppercase font-medium transition-all hover:opacity-50 ${
                  shouldBeSolid ? "text-[#2A2A2A]" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Action */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/book-appointment"
              className={`text-[10px] tracking-[0.2em] uppercase font-medium px-6 py-3 border transition-all duration-500 hover:bg-[#2A2A2A] hover:text-[#F4F2EC] hover:border-[#2A2A2A] ${
                shouldBeSolid 
                  ? "border-[#2A2A2A] text-[#2A2A2A]" 
                  : "border-white/30 text-white hover:bg-white hover:text-[#2A2A2A]"
              }`}
            >
              Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              shouldBeSolid ? "text-[#2A2A2A]" : "text-white"
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Fullscreen Menu */}
        <div 
          className={`fixed inset-0 bg-[#F4F2EC] z-40 transition-transform duration-700 ease-[0.16,1,0.3,1] flex flex-col justify-center items-center ${
            mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center gap-8">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-heading text-[#2A2A2A] mb-8"
            >
              Smile<span className="italic">Craft.</span>
            </Link>
            
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg tracking-[0.2em] uppercase text-[#2A2A2A] hover:text-[#78857A] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              href="/book-appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 px-8 py-4 border border-[#2A2A2A] text-[#2A2A2A] text-sm tracking-[0.2em] uppercase hover:bg-[#2A2A2A] hover:text-[#F4F2EC] transition-colors"
            >
              Request Consultation
            </Link>
            
            <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="mt-4 text-[#78857A] text-xs tracking-widest">
              CALL {CLINIC_INFO.phone}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

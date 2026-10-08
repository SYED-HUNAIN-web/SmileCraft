import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Star, ShieldCheck, Heart } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CLINIC_INFO } from "@/data/clinicData";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md border border-amber-500/40 bg-black shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="SmileCraft Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Smile<span className="text-teal-400">Craft</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              {CLINIC_INFO.tagline}
            </p>

            <div className="flex items-center gap-2 text-xs bg-slate-800/90 text-amber-300 px-3 py-1.5 rounded-lg border border-slate-700 w-fit">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-slate-200">
                {CLINIC_INFO.googleRating} / 5.0 Rating
              </span>
              <span className="text-slate-400">({CLINIC_INFO.totalReviews}+ Verified Reviews)</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-teal-400 font-medium pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Autoclave Sterilized Clinic since 2017</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide border-l-2 border-teal-500 pl-3">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-teal-400 transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-400 transition-colors">
                  Services & Transparent Pricing
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-teal-400 transition-colors">
                  Our Specialist Doctors
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400 transition-colors">
                  About SmileCraft Clinic
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="hover:text-teal-400 transition-colors">
                  Book Online Appointment
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition-colors">
                  Location & Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Treatments */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide border-l-2 border-teal-500 pl-3">
              Popular Treatments
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#teeth-whitening" className="hover:text-teal-400 transition-colors">
                  Laser Teeth Whitening
                </Link>
              </li>
              <li>
                <Link href="/services#root-canal" className="hover:text-teal-400 transition-colors">
                  Single-Visit Root Canal (RCT)
                </Link>
              </li>
              <li>
                <Link href="/services#braces-aligners" className="hover:text-teal-400 transition-colors">
                  3D Clear Aligners & Braces
                </Link>
              </li>
              <li>
                <Link href="/services#dental-implants" className="hover:text-teal-400 transition-colors">
                  Permanent Dental Implants
                </Link>
              </li>
              <li>
                <Link href="/services#kids-dentistry" className="hover:text-teal-400 transition-colors">
                  Pediatric Dental Care
                </Link>
              </li>
              <li>
                <Link href="/services#emergency-care" className="hover:text-teal-400 transition-colors text-orange-400 font-medium">
                  Same-Day Emergency Relief
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-base tracking-wide border-l-2 border-teal-500 pl-3">
              Visit Clinic
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">
                  {CLINIC_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                >
                  WhatsApp: {CLINIC_INFO.whatsapp}
                </a>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200 font-medium">{CLINIC_INFO.timingWeekdays}</p>
                  <p className="text-slate-400 text-xs">{CLINIC_INFO.timingSunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © 2026 {CLINIC_INFO.name}. All Rights Reserved. PMDC Registered Practitioners.
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Serving Gulshan-e-Iqbal & Karachi since {CLINIC_INFO.establishedYear}</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
}

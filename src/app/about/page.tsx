"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO } from "@/data/clinicData";
import { Award, ShieldCheck, Heart, Sparkles, CheckCircle2, MapPin, Users, Calendar } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-16 py-12">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-teal-50 via-white to-[#FAF9F6] pt-8 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">
            <Award className="w-3.5 h-3.5 text-teal-600" />
            <span>Serving Gulshan-e-Iqbal Since 2017</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About SmileCraft Dental Clinic
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Founded with a vision to transform dental visits into painless, comfortable, and transparent experiences for every family in Karachi.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/interior.png"
                alt="SmileCraft Modern Operatory Setup"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="text-base font-bold">SmileCraft Dental Clinic • Karachi</div>
                <div className="text-xs text-slate-200">Established 2017 • Al-Noor Plaza Ground Floor</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-teal-600 font-bold text-xs uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              Our Journey & Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Gentle Care Built On Trust & Ethics
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Back in 2017, Dr. Hamza Malik noticed that many patients in Gulshan-e-Iqbal avoided visiting dentists due to fear of pain, unhygienic practices, or unexpected hefty bills. SmileCraft was built to change that mindset.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We introduced 100% B-Class Autoclave steam sterilization where every single pouch is sealed and opened right before the treatment. Combined with painless rotary endodontic tech and gentle doctors, we have proudly served over 5,000 satisfied patients.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-2xl font-extrabold text-teal-600">8+ Years</div>
                <div className="text-xs text-slate-500 font-medium">Clinical Excellence in Karachi</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                <div className="text-2xl font-extrabold text-teal-600">640+</div>
                <div className="text-xs text-slate-500 font-medium">4.8★ Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our Core Promises to Patients
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Standards we strictly uphold at SmileCraft Dental Clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Zero Compromise Sterilization</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Hospital-grade autoclave technology with digital monitoring. Disposable gloves, bibs, and suction tips are discarded after a single patient use.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Painless Modern Technology</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Low-radiation digital intra-oral X-rays, motorized rotary endodontic file systems, and cold-laser whitening to maximize comfort and reduce chair time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <Heart className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Transparent PKR Rates</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                No unexpected extra fees. Upfront diagnosis with itemized treatment plans and accessible monthly installment packages for aligners and braces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-teal-gradient text-white rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Experience Gentle Dental Care at SmileCraft
          </h2>
          <p className="text-teal-100 text-sm max-w-lg mx-auto">
            Book your consultation today or visit our clinic at Al-Noor Plaza near Metro Cash & Carry, Gulshan Block 5.
          </p>
          <div className="pt-2">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm shadow-xl transition-transform hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

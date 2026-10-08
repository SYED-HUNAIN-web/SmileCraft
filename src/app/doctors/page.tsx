"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DOCTORS, CLINIC_INFO } from "@/data/clinicData";
import DoctorCard from "@/components/DoctorCard";
import { Award, ShieldCheck, Calendar, Clock, CheckCircle2, HeartHandshake } from "lucide-react";

export default function DoctorsPage() {
  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-50 via-white to-[#FAF9F6] pt-8 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">
            <Award className="w-3.5 h-3.5 text-teal-600" />
            <span>PMDC Registered Specialist Surgeons</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Specialist Doctors
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Our team of foreign and local trained dental surgeons is committed to giving you a pain-free, gentle, and comfortable experience at every visit.
          </p>
        </div>
      </section>

      {/* Doctor Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTORS.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </section>

      {/* Detailed Doctor Bio Spotlight */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Clinical Expertise & Standards
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              How our doctors ensure painless care and international standard hygiene in Gulshan-e-Iqbal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">PMDC Verified Credentials</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                All doctors at SmileCraft hold active PMDC / PMC registration numbers and update their surgical certifications annually.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Gentle Patient Philosophy</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                We spend time listening to your concerns, explaining every step in plain Urdu or English, and proceeding only when you feel 100% comfortable.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">12+ Years Combined Excellence</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Over 5,000 satisfied patients treated across implant surgery, orthodontics, cosmetic veneers, and pediatric fillings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Want to consult a specific specialist?
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Book your consultation slot directly or call our reception team at {CLINIC_INFO.phone}.
          </p>
          <div className="pt-2">
            <Link
              href="/book-appointment"
              className="btn-accent-orange inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-extrabold text-sm shadow-xl"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Doctor Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

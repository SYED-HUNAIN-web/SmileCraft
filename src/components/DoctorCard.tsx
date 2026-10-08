"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Doctor } from "@/data/clinicData";
import { Award, Clock, Calendar, ShieldCheck, Check } from "lucide-react";

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm shadow-card-hover flex flex-col justify-between group">
      <div>
        {/* Doctor Image Container */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-100 overflow-hidden">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/20 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>{doctor.pmdc}</span>
          </div>

          <div className="absolute bottom-3 left-3 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
            <Award className="w-3.5 h-3.5" />
            <span>{doctor.experienceYears}+ Years Exp</span>
          </div>
        </div>

        {/* Doctor Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-0.5 group-hover:text-teal-600 transition-colors">
            {doctor.name}
          </h3>
          <p className="text-teal-600 font-semibold text-xs sm:text-sm mb-3">
            {doctor.title}
          </p>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1.5 mb-4 text-xs">
            <div className="text-slate-800 font-medium">
              <strong className="text-slate-500 font-normal">Degree: </strong>
              {doctor.qualifications}
            </div>
            <div className="text-slate-800 font-medium">
              <strong className="text-slate-500 font-normal">Focus: </strong>
              {doctor.specialty}
            </div>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
            {doctor.bio}
          </p>
        </div>
      </div>

      {/* Footer Schedule & CTA */}
      <div className="px-6 pb-6 pt-0 space-y-3">
        <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100/70 px-3 py-2 rounded-lg">
          <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
          <span className="truncate">{doctor.schedule}</span>
        </div>

        <Link
          href={`/book-appointment?doctor=${encodeURIComponent(doctor.name)}`}
          className="btn-primary-teal w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-bold"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment with {doctor.name.split(" ")[1]}</span>
        </Link>
      </div>
    </div>
  );
}

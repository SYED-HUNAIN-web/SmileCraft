"use client";

import React from "react";
import { Star, ShieldCheck, Users, Award, Clock } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicData";

export default function TrustBar() {
  const stats = [
    {
      icon: Star,
      iconColor: "text-amber-500 fill-amber-500",
      value: `${CLINIC_INFO.googleRating} ★`,
      label: "Google Rating",
      subtext: `${CLINIC_INFO.totalReviews}+ Verified Reviews`,
    },
    {
      icon: Award,
      iconColor: "text-teal-600",
      value: "8+ Years",
      label: "Trusted Excellence",
      subtext: "Serving Karachi Since 2017",
    },
    {
      icon: Users,
      iconColor: "text-teal-600",
      value: CLINIC_INFO.happyPatients,
      label: "Happy Smiles",
      subtext: "Successful Treatments",
    },
    {
      icon: ShieldCheck,
      iconColor: "text-emerald-600",
      value: "100%",
      label: "Sterile Hygiene",
      subtext: "German B-Class Autoclave",
    },
    {
      icon: Clock,
      iconColor: "text-orange-500",
      value: "Same Day",
      label: "Emergency Slots",
      subtext: "Fast Pain Relief",
    },
  ];

  return (
    <section className="bg-white py-8 border-y border-slate-200/80 shadow-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="pt-4 md:pt-0 px-3 flex flex-col items-center group">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                  <Icon className={`w-5 h-5 ${stat.iconColor}`} />
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

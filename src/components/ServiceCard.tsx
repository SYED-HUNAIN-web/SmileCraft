"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Activity, Smile, ShieldCheck, HeartHandshake, Zap, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { Service } from "@/data/clinicData";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Activity,
  Smile,
  ShieldCheck,
  HeartHandshake,
  Zap,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Sparkles;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 shadow-card-hover flex flex-col justify-between relative overflow-hidden group">
      {/* Top Tag */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-xs">
          <IconComponent className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/60">
          {service.category}
        </span>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
          {service.shortDesc}
        </p>

        {/* Price Tag */}
        <div className="bg-teal-50/60 rounded-xl p-3 border border-teal-100/80 mb-4 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">Starting Price</span>
          <span className="text-base sm:text-lg font-extrabold text-teal-700">{service.startingPrice}</span>
        </div>

        {/* Key Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
          <Clock className="w-3 h-3" /> {service.duration}
        </span>
        <Link
          href={`/book-appointment?service=${encodeURIComponent(service.title)}`}
          className="btn-primary-teal flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl"
        >
          <span>Book Treatment</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

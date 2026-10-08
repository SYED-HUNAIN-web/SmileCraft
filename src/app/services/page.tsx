"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICES, ALL_PRICES, CLINIC_INFO } from "@/data/clinicData";
import ServiceCard from "@/components/ServiceCard";
import FAQAccordion from "@/components/FAQAccordion";
import { Sparkles, CheckCircle2, Phone, Calendar, ArrowRight, ShieldCheck, Tag } from "lucide-react";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Cosmetic Dentistry", "General Dentistry", "Orthodontics", "Implantology", "Pediatric", "Emergency"];

  const filteredServices = selectedCategory === "All"
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <div className="space-y-16 py-12">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-teal-50 via-white to-[#FAF9F6] pt-8 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">
            <Tag className="w-3.5 h-3.5 text-teal-600" />
            <span>100% Upfront & Transparent Rates in PKR</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Dental Treatments & Transparent Pricing
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            At SmileCraft Dental Clinic, we believe in honest healthcare with zero hidden costs. Explore our treatments, starting rates, and installment packages.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-teal-600 text-white shadow-md shadow-teal-600/20"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Complete PKR Price Sheet Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
              <span>Official Rate List 2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Complete Treatment Pricing Sheet (PKR)
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              All prices include sterilised diagnostic examination & doctor consultation.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 uppercase font-bold text-[11px] tracking-wider border-b border-slate-200">
                  <th className="p-4 rounded-tl-xl">Dental Treatment</th>
                  <th className="p-4">Rate (PKR)</th>
                  <th className="p-4 rounded-tr-xl">Key Details / Package Info</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {ALL_PRICES.map((item, index) => (
                  <tr key={index} className="hover:bg-teal-50/40 transition-colors">
                    <td className="p-4 font-bold text-slate-900">{item.service}</td>
                    <td className="p-4 text-teal-700 font-extrabold text-sm sm:text-base whitespace-nowrap">
                      {item.price}
                    </td>
                    <td className="p-4 text-slate-500 text-xs">{item.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Payment Notes */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0" />
              <span>We accept Cash, Debit/Credit Cards, and EasyPaisa/JazzCash online payments.</span>
            </div>
            <Link
              href="/book-appointment"
              className="btn-primary-teal px-5 py-2.5 rounded-xl font-bold text-xs shrink-0"
            >
              Book Treatment Now
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Questions About Treatments?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Read common queries regarding pain control, installment options, and appointment booking.
          </p>
        </div>
        <FAQAccordion />
      </section>
    </div>
  );
}

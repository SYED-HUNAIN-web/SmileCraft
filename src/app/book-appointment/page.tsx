"use client";

import React, { Suspense } from "react";
import AppointmentForm from "@/components/AppointmentForm";
import { CLINIC_INFO } from "@/data/clinicData";
import { Calendar, Phone, MessageSquare, Clock, ShieldCheck, MapPin } from "lucide-react";

function BookAppointmentContent() {
  return (
    <div className="space-y-12 py-12">
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-50 via-white to-[#FAF9F6] pt-8 pb-10 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">
            <Calendar className="w-3.5 h-3.5 text-teal-600" />
            <span>Fast Online Slot Booking • No Waiting Time</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Book Your Dental Appointment
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Select your preferred treatment, choice of specialist, and date. You will receive immediate phone or WhatsApp confirmation from our receptionist.
          </p>
        </div>
      </section>

      {/* Main Appointment Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AppointmentForm />
      </section>

      {/* Alternative Quick Contact Card */}
      <section className="max-w-3xl mx-auto px-4">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <div className="text-amber-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 justify-center sm:justify-start">
              <Clock className="w-4 h-4" />
              <span>Prefer Direct Phone Call?</span>
            </div>
            <h3 className="text-xl font-extrabold">Call Desk: {CLINIC_INFO.phone}</h3>
            <p className="text-xs text-slate-400">
              Reception open Mon–Sat 10:00 AM – 9:00 PM. Instant booking on phone!
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md transition-colors text-center"
            >
              Call Now
            </a>
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent("AoA! I want to book an appointment directly on WhatsApp.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function BookAppointmentPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading booking system...</div>}>
      <BookAppointmentContent />
    </Suspense>
  );
}

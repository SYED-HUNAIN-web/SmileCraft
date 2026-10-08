"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { SERVICES, DOCTORS, CLINIC_INFO } from "@/data/clinicData";
import { Calendar, User, Phone, CheckCircle2, Clock, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function AppointmentForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams?.get("service") || "";
  const initialDoctor = searchParams?.get("doctor") || "";

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(initialService || SERVICES[0].title);
  const [selectedDoctor, setSelectedDoctor] = useState(initialDoctor || DOCTORS[0].name);
  const [preferredDate, setPreferredDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("Evening Slot (6:00 PM - 9:00 PM)");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) setSelectedService(initialService);
    if (initialDoctor) setSelectedDoctor(initialDoctor);
    
    // Default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setPreferredDate(tomorrow.toISOString().split("T")[0]);
  }, [initialService, initialDoctor]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const text = `AoA SmileCraft Dental! I want to confirm my appointment:
• Patient Name: ${patientName}
• Phone: ${patientPhone}
• Service: ${selectedService}
• Doctor: ${selectedDoctor}
• Date: ${preferredDate}
• Time Slot: ${timeSlot}
${message ? `• Note: ${message}` : ""}`;
    return `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 max-w-3xl mx-auto">
      {/* Step Indicators */}
      {!isSubmitted && (
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
          <div className={`flex items-center gap-2 text-xs sm:text-sm font-semibold ${step >= 1 ? "text-teal-600" : "text-slate-400"}`}>
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-500"}`}>
              1
            </span>
            <span className="hidden sm:inline">Treatment & Doctor</span>
          </div>
          <div className="w-8 h-0.5 bg-slate-200" />
          <div className={`flex items-center gap-2 text-xs sm:text-sm font-semibold ${step >= 2 ? "text-teal-600" : "text-slate-400"}`}>
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-500"}`}>
              2
            </span>
            <span className="hidden sm:inline">Date & Time</span>
          </div>
          <div className="w-8 h-0.5 bg-slate-200" />
          <div className={`flex items-center gap-2 text-xs sm:text-sm font-semibold ${step >= 3 ? "text-teal-600" : "text-slate-400"}`}>
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 3 ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-500"}`}>
              3
            </span>
            <span className="hidden sm:inline">Patient Info</span>
          </div>
        </div>
      )}

      {isSubmitted ? (
        /* Confirmation Screen */
        <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-12 h-12 text-teal-600" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Appointment Request Received!
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto">
              Thank you, <strong className="text-slate-900">{patientName}</strong>. Our front desk coordinator will call you at <strong className="text-slate-900">{patientPhone}</strong> shortly to confirm your schedule.
            </p>
          </div>

          {/* Booking Summary Box */}
          <div className="bg-slate-50 rounded-2xl p-6 text-left border border-slate-200 space-y-3 max-w-md mx-auto text-xs sm:text-sm">
            <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-2 flex items-center justify-between">
              <span>Appointment Summary</span>
              <span className="text-teal-600 font-semibold">Status: Pending Phone Confirmation</span>
            </h4>
            <div className="space-y-2 text-slate-700">
              <div><strong>Selected Treatment:</strong> {selectedService}</div>
              <div><strong>Doctor:</strong> {selectedDoctor}</div>
              <div><strong>Preferred Date:</strong> {preferredDate}</div>
              <div><strong>Time Slot:</strong> {timeSlot}</div>
              <div><strong>Clinic Location:</strong> Shop 12, Al-Noor Plaza, Gulshan Block 5</div>
            </div>
          </div>

          {/* WhatsApp Direct Option */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emerald-whatsapp w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Instant Confirmation via WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
              }}
              className="text-xs text-slate-500 hover:text-slate-800 underline font-medium"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      ) : (
        /* Form Multi-Step */
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Select Required Treatment / Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.map((srv) => (
                    <button
                      type="button"
                      key={srv.id}
                      onClick={() => setSelectedService(srv.title)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                        selectedService === srv.title
                          ? "border-teal-600 bg-teal-50/70 text-teal-900 font-semibold shadow-xs"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <span className="text-xs sm:text-sm">{srv.title}</span>
                      <span className="text-[11px] text-teal-700 font-bold bg-white px-2 py-0.5 rounded-md border border-teal-100">
                        {srv.startingPrice}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Preferred Doctor
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {DOCTORS.map((doc) => (
                    <button
                      type="button"
                      key={doc.id}
                      onClick={() => setSelectedDoctor(doc.name)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        selectedDoctor === doc.name
                          ? "border-teal-600 bg-teal-50/70 text-teal-900 font-semibold shadow-xs"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-bold">{doc.name}</div>
                      <div className="text-[11px] text-slate-500 font-medium truncate">{doc.title}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold shadow-md"
                >
                  <span>Next: Choose Date & Time</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-2">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    "Morning Slot (10:00 AM - 2:00 PM)",
                    "Afternoon Slot (2:00 PM - 5:00 PM)",
                    "Evening Slot (6:00 PM - 9:00 PM)",
                  ].map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setTimeSlot(slot)}
                      className={`p-3.5 rounded-xl border text-center transition-all text-xs font-semibold ${
                        timeSlot === slot
                          ? "border-teal-600 bg-teal-50/70 text-teal-900 shadow-xs"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 text-sm font-semibold"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold shadow-md"
                >
                  <span>Next: Patient Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Muhammad Farhan"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full p-3.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-1.5">
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 0300-1234567"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    className="w-full p-3.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-1.5">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="e.g. farhan@gmail.com"
                  value={patientEmail}
                  onChange={(e) => setPatientEmail(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-900 mb-1.5">
                  Describe Your Symptoms / Special Request (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Pain in lower right tooth for 2 days, need urgent checkup..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium resize-none"
                />
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 text-sm font-semibold"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  disabled={!patientName || !patientPhone}
                  className="btn-accent-cyan flex items-center gap-2 px-8 py-3.5 rounded-xl text-white text-sm font-extrabold shadow-lg disabled:opacity-50"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Appointment Booking</span>
                </button>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
}

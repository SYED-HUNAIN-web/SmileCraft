"use client";

import React, { useState } from "react";
import { CLINIC_INFO } from "@/data/clinicData";
import { MapPin, Phone, Clock, ShieldCheck, Send, CheckCircle2, Navigation } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <section className="bg-gradient-to-b from-teal-50 via-white to-[#FAF9F6] pt-8 pb-10 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            <span>Gulshan-e-Iqbal Block 5 • Near Metro Cash & Carry</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact & Location Details
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a question or need emergency dental advice? Reach out to our receptionist or visit our clinic at Al-Noor Plaza.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Clinic Information
              </h2>

              <div className="space-y-5 text-xs sm:text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Clinic Address</h4>
                    <p className="text-slate-600 mt-1 leading-relaxed">{CLINIC_INFO.address}</p>
                    <p className="text-slate-400 text-xs mt-1">Landmark: {CLINIC_INFO.landmark}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Landline Desk</h4>
                    <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-teal-700 font-bold hover:underline block mt-0.5">
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">WhatsApp Emergency & Booking</h4>
                    <a
                      href={`https://wa.me/${CLINIC_INFO.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 font-bold hover:underline block mt-0.5 flex items-center gap-1.5"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                      <span>{CLINIC_INFO.whatsapp}</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Clinic Timings</h4>
                    <p className="text-slate-700 font-medium mt-0.5">{CLINIC_INFO.timingWeekdays}</p>
                    <p className="text-slate-400 text-xs">{CLINIC_INFO.timingSunday}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-2 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    <Navigation className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Parking & Accessibility</h4>
                    <p className="text-slate-600 text-xs mt-0.5">{CLINIC_INFO.parkingInfo}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-md">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Send Us A Message
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mb-6">
                Fill out the quick form below and our team will get back to you promptly.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-14 h-14 text-teal-600 mx-auto" />
                  <h3 className="text-xl font-bold text-slate-900">Message Sent Successfully!</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you! Our front desk manager will contact you at {formData.phone} shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-teal-600 font-bold hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-900 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ali Ahmed"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-900 mb-1">Phone / Mobile *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0300-1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">Subject / Inquiry Type</label>
                    <input
                      type="text"
                      placeholder="e.g. Inquiring about Whitening cost or Root Canal consultation"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">Your Message *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your query here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary-teal w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Reception</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200/80">
          <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg font-bold">Google Map Location</h3>
              <p className="text-xs text-slate-400">Shop No. 12, Ground Floor, Al-Noor Plaza, near Metro Cash & Carry, Gulshan Block 5</p>
            </div>
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent("AoA! Please send me the live Google Maps location of SmileCraft Dental Clinic.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emerald-whatsapp px-4 py-2.5 rounded-xl text-xs font-bold shrink-0 flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Get Live Location on WhatsApp</span>
            </a>
          </div>

          <div className="h-[400px] w-full bg-slate-100">
            <iframe
              title="SmileCraft Location Map"
              src={CLINIC_INFO.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

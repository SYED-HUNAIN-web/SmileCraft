"use client";

import React, { useState } from "react";
import { X, Send } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicData";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    { title: "📅 Book Appointment", msg: "AoA! I would like to book a dental consultation at SmileCraft Clinic." },
    { title: "💰 Ask About Dental Prices", msg: "AoA! I want to inquire about treatment rates (Root Canal / Whitening / Braces)." },
    { title: "🚨 Emergency Toothache", msg: "AoA! Urgent: I have severe toothache and need an emergency appointment today." },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#25D366] p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-inner">
                  <WhatsAppIcon className="w-6 h-6 text-[#25D366]" variant="mono" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-200 rounded-full border-2 border-[#25D366] animate-pulse"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 drop-shadow-xs">SmileCraft Dental Assistant</h4>
                <p className="text-xs text-slate-800 font-medium">Online • Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-800 hover:text-black p-1.5 rounded-lg hover:bg-black/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3.5 rounded-xl shadow-sm border border-slate-200 text-xs text-slate-700 leading-relaxed">
              👋 <strong>Assalam-o-Alaikum!</strong> Welcome to SmileCraft Dental. Select a message below to instantly launch official WhatsApp chat:
            </div>

            <div className="space-y-2">
              {quickMessages.map((item, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodeURIComponent(item.msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-[#25D366] hover:bg-emerald-50/60 transition-all duration-200 text-left text-xs font-semibold text-slate-800 group shadow-sm hover:shadow-md"
                >
                  <span>{item.title}</span>
                  <Send className="w-4 h-4 text-[#25D366] group-hover:translate-x-1 transition-transform" />
                </a>
              ))}
            </div>

            <div className="pt-2 text-[12px] text-slate-600 text-center flex items-center justify-center gap-1.5 font-medium">
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Direct WhatsApp: <strong className="text-slate-900 font-bold">{CLINIC_INFO.whatsapp}</strong></span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-xl shadow-emerald-600/30 hover:shadow-2xl hover:shadow-emerald-600/40 transition-all duration-300 hover:scale-105 active:scale-95 group font-bold text-sm border-2 border-white ring-4 ring-emerald-500/20"
        aria-label="Contact on WhatsApp"
      >
        <div className="relative flex items-center justify-center">
          <WhatsAppIcon className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping"></span>
        </div>
        <span className="hidden sm:inline font-bold tracking-wide">WhatsApp Us</span>
      </button>
    </div>
  );
}


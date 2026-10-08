"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/clinicData";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-white border-teal-500 shadow-md"
                : "bg-white border-slate-200 hover:border-slate-300"
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
            >
              <span className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                <HelpCircle className="w-4 h-4 text-teal-600 shrink-0" />
                <span>{faq.q}</span>
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-teal-600" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100/80">
                <p className="pt-3">{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

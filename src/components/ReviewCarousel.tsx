"use client";

import React, { useState } from "react";
import { REVIEWS, CLINIC_INFO } from "@/data/clinicData";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, MapPin } from "lucide-react";

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 text-amber-400 text-xs font-semibold mb-4 border border-slate-700">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Google Rating {CLINIC_INFO.googleRating} ★ Based on {CLINIC_INFO.totalReviews}+ Local Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Real Stories From Real Karachi Patients
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Read authentic experiences shared by families in Gulshan-e-Iqbal, Johar, and across Karachi who trusted SmileCraft for gentle, high-quality dental care.
          </p>
        </div>

        {/* Featured Carousel Card */}
        <div className="max-w-4xl mx-auto bg-slate-800/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-slate-700 shadow-2xl relative">
          <Quote className="w-12 h-12 text-teal-500/30 absolute top-6 right-6 sm:top-10 sm:right-10 pointer-events-none" />

          <div className="flex items-center gap-1 mb-6">
            {[...Array(REVIEWS[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
            ))}
            <span className="text-xs text-slate-400 ml-2 font-medium">
              Verified Patient Review
            </span>
          </div>

          <p className="text-slate-100 text-base sm:text-lg lg:text-xl font-normal leading-relaxed italic mb-8 min-h-[100px]">
            &ldquo;{REVIEWS[currentIndex].comment}&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-teal-600 text-white font-bold text-lg flex items-center justify-center shadow-md">
                {REVIEWS[currentIndex].patientName.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-white text-base flex items-center gap-2">
                  <span>{REVIEWS[currentIndex].patientName}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 inline shrink-0" />
                </h4>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-teal-400" />
                    {REVIEWS[currentIndex].locality}
                  </span>
                  <span>•</span>
                  <span>{REVIEWS[currentIndex].date}</span>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-700 text-xs font-medium text-teal-300 w-fit">
              <span>Treatment: {REVIEWS[currentIndex].treatment}</span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-700/50">
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? "w-8 bg-teal-400" : "w-2 bg-slate-600 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevReview}
                className="p-2.5 rounded-full bg-slate-700 hover:bg-teal-600 text-white transition-colors"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                className="p-2.5 rounded-full bg-slate-700 hover:bg-teal-600 text-white transition-colors"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Small Grid Preview of All Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {REVIEWS.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/60 hover:border-teal-500/50 transition-colors"
            >
              <div className="flex items-center gap-1 mb-2">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 text-xs leading-relaxed line-clamp-3 mb-4">
                &ldquo;{rev.comment}&rdquo;
              </p>
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-700/40">
                <span className="font-semibold text-slate-200">{rev.patientName}</span>
                <span className="text-teal-400">{rev.treatment}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

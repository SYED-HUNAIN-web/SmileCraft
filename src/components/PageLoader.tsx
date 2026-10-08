"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Elegant, slightly eased progress simulator
    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = prev < 50 ? 2 : prev < 80 ? 1 : 0.5;
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        return next;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#F8F5F0] text-[#1A1A1A]"
        >
          <div className="flex flex-col items-center max-w-sm w-full px-6">
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="text-4xl md:text-5xl font-heading font-normal tracking-tight text-[#1A1A1A]"
              >
                Smile<span className="italic text-teal-800">Craft.</span>
              </motion.h1>
            </div>

            <div className="w-full h-[1px] bg-[#1A1A1A]/10 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-teal-800"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>
            
            <div className="w-full flex justify-between mt-4 text-xs font-medium uppercase tracking-[0.2em] text-[#5C5C5C]">
              <span>Karachi</span>
              <span>{Math.floor(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

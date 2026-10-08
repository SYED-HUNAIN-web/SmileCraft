"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO, SERVICES, DOCTORS } from "@/data/clinicData";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function HomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Extreme smooth parallax for hero
  const yHeroText = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacityHeroText = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scaleHeroBg = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div ref={containerRef} className="space-y-0 bg-[#F4F2EC] overflow-hidden">
      {/* 1. HERO SECTION - AVENTURA STYLE (Full screen, ultra minimal) */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ scale: scaleHeroBg }}
        >
          <Image
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000"
            alt="SmileCraft Elegant Dentistry"
            fill
            className="object-cover object-center opacity-60"
            priority
          />
        </motion.div>
        
        <motion.div 
          style={{ y: yHeroText, opacity: opacityHeroText }}
          className="relative z-10 text-center px-4 flex flex-col items-center mt-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white/80 text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-6"
          >
            Welcome to SmileCraft
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-8xl md:text-9xl font-normal text-white font-heading leading-[0.9]"
          >
            Artistry <br className="md:hidden" /> <span className="italic font-light">in Dentistry</span>
          </motion.h1>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-[10px] tracking-[0.2em] uppercase">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-full bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* 2. STORY SECTION - Ultra Wide, Clean Typography */}
      <section className="py-32 md:py-48 relative bg-[#F4F2EC]">
        <div className="max-w-[80rem] mx-auto px-6 lg:px-16">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto text-center space-y-10"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#2A2A2A] font-heading leading-tight">
              A serene oasis for your smile, blending <span className="italic text-[#78857A]">advanced clinical excellence</span> with unparalleled comfort.
            </h2>
            <div className="flex justify-center pt-8">
              <Link
                href="/about"
                className="group flex items-center gap-3 text-[#2A2A2A] text-sm uppercase tracking-[0.15em] hover:text-[#78857A] transition-colors"
              >
                <span>Discover Our Practice</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. PARALLAX IMAGE BREAK */}
      <section className="h-[60vh] md:h-[80vh] w-full relative overflow-hidden">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0.3, 0.7], ["-15%", "15%"]) }}
          className="absolute inset-0 w-full h-[130%]"
        >
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000"
            alt="Clinic Interior"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* 4. SERVICES GALLERY - Minimalist List */}
      <section className="py-32 md:py-48 bg-[#F4F2EC]">
        <div className="max-w-[80rem] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="sticky top-40 space-y-8"
              >
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#78857A]">Curated Care</span>
                <h2 className="text-5xl md:text-6xl font-normal font-heading text-[#2A2A2A] leading-tight">
                  Bespoke <br/><span className="italic text-[#78857A]">Treatments.</span>
                </h2>
                <p className="text-[#5C5C5C] font-light leading-relaxed max-w-sm">
                  We provide a comprehensive suite of dental services, utilizing state-of-the-art technology to ensure precision and comfort in every procedure.
                </p>
                <Link
                  href="/services"
                  className="inline-block border-b border-[#2A2A2A] pb-1 text-sm font-medium tracking-wide text-[#2A2A2A] hover:text-[#78857A] hover:border-[#78857A] transition-all"
                >
                  View Full Service Menu
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-7 space-y-16">
              {SERVICES.slice(0, 4).map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  className="group block border-b border-[#2A2A2A]/10 pb-12"
                >
                  <h3 className="text-3xl md:text-4xl font-heading text-[#2A2A2A] mb-4 group-hover:text-[#78857A] transition-colors">{service.title}</h3>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-[#5C5C5C] font-light text-sm md:text-base">
                    <p className="max-w-md">{service.shortDesc}</p>
                    <span className="tracking-wide">From {service.startingPrice}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. DOCTORS - Floating Portraits */}
      <section className="py-32 md:py-48 bg-[#EBE9E4]">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-16">
          <div className="text-center mb-24 space-y-6">
             <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#78857A]">Our Specialists</span>
             <h2 className="text-5xl md:text-7xl font-normal font-heading text-[#2A2A2A]">
               The <span className="italic text-[#78857A]">Masters.</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {DOCTORS.map((doc, idx) => {
              const yScroll = useTransform(scrollYProgress, [0.4, 1], [0, idx % 2 === 0 ? -150 : -50]);
              return (
                <motion.div 
                  key={doc.id}
                  style={{ y: yScroll }}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="relative w-full aspect-[3/4] overflow-hidden mb-8">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover filter grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-heading text-[#2A2A2A] mb-2">{doc.name}</h3>
                  <p className="text-[#78857A] text-xs tracking-[0.15em] uppercase mb-3">{doc.title}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA - Grand & Minimal */}
      <section className="h-screen w-full relative flex items-center justify-center bg-[#2A2A2A] overflow-hidden">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0.7, 1], ["20%", "0%"]) }}
          className="absolute inset-0 opacity-20"
        >
           <Image
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
              alt="Texture"
              fill
              className="object-cover"
           />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl space-y-12">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-normal font-heading text-[#F4F2EC] leading-tight">
            Reserve Your <br/>
            <span className="italic text-[#A0AFAA]">Experience.</span>
          </h2>
          
          <div className="pt-8 flex flex-col items-center gap-6">
            <Link
              href="/book-appointment"
              className="group relative px-12 py-5 border border-[#F4F2EC] text-[#F4F2EC] text-sm tracking-[0.2em] uppercase overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-[#2A2A2A] transition-colors duration-500">Request Consultation</span>
              <div className="absolute inset-0 bg-[#F4F2EC] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </Link>
            <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="text-[#A0AFAA] hover:text-[#F4F2EC] text-xs tracking-widest transition-colors">
              OR CALL {CLINIC_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

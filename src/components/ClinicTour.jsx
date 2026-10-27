import React, { useState, useEffect, useRef } from 'react'
import { ShieldCheck, Cpu, Sparkles, Activity, Award, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react'

export default function ClinicTour() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)

  const clinicPhotos = [
    {
      src: '/images/clinic-1.webp',
      alt: 'Sterilized treatment operatory and UV storage cabinet at Shree Dental Care',
      title: 'Sterilized Treatment Operatory',
      badge: 'UV Cabinet & Operatory',
      desc: 'Class-B European autoclave sterilization, UV pouching, and clinical-grade asepsis.',
    },
    {
      src: '/images/clinic-2.webp',
      alt: 'Ergonomic dental chair with chairside digital RVG X-ray machine',
      title: 'Treatment Suite & Digital RVG X-Ray',
      badge: 'Low-Radiation Imaging',
      desc: 'Ergonomic patient comfort chair paired with high-definition digital dental x-ray unit.',
    },
    {
      src: '/images/clinic-3.webp',
      alt: "Dr. Shrikant Sharma's consultation desk and clinical certifications",
      title: "Dr. Shrikant Sharma's Consultation Cabin",
      badge: "Doctor's Private Cabin",
      desc: 'Hygienic diagnostic consultation desk with IDA certification and case planning setup.',
    },
  ]

  // Automatic slide rotation every 4 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clinicPhotos.length)
    }, 4000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused, clinicPhotos.length])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % clinicPhotos.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + clinicPhotos.length) % clinicPhotos.length)
  }

  const features = [
    {
      title: 'Class-B European Autoclave Sterilization',
      desc: 'All surgical instruments undergo ultrasonic bath cleaning, vacuum autoclaving, and UV pouch sealing.',
      icon: ShieldCheck,
    },
    {
      title: 'Low-Radiation Digital RVG X-Rays',
      desc: 'Instant high-definition chairside digital imaging with 90% reduced x-ray radiation exposure.',
      icon: Cpu,
    },
    {
      title: 'Computerized Pain-Free Anesthesia',
      desc: 'Controlled micro-infusion delivery so you feel virtually nothing during numbing procedures.',
      icon: Activity,
    },
    {
      title: 'Ultra-Comfort Ergonomic Dental Chairs',
      desc: 'Specially contoured dental chairs designed to reduce back strain and relieve dental anxiety.',
      icon: Sparkles,
    },
  ]

  return (
    <section id="facility" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Clinic Photo Showcase Carousel */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Glow Decorator */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-sky-100 rounded-3xl -z-10 blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-cyan-100 rounded-3xl -z-10 blur-xl" />

              {/* Main Animated Photo Frame */}
              <div
                className="group relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 select-none aspect-[4/5] sm:aspect-[4/5] max-h-[540px]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Images Stack with Smooth Crossfade Animation */}
                {clinicPhotos.map((photo, idx) => {
                  const isActive = idx === currentIndex
                  return (
                    <div
                      key={photo.src}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        isActive
                          ? 'opacity-100 scale-100 z-10'
                          : 'opacity-0 scale-105 pointer-events-none z-0'
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover object-center"
                        loading={idx === 0 ? 'eager' : 'lazy'}
                      />
                      {/* Vignette Gradients for readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/40" />
                    </div>
                  )
                })}

                {/* Navigation Arrows (subtle on hover) */}
                <button
                  onClick={goToPrev}
                  aria-label="Previous clinic photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-900 shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer opacity-90 sm:opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={goToNext}
                  aria-label="Next clinic photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-900 shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer opacity-90 sm:opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bottom Caption & Dynamic Room Info */}
                <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
                  <div className="bg-slate-900/85 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-white shadow-xl">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-sky-500/30 text-sky-300 border border-sky-400/30">
                        {clinicPhotos[currentIndex].badge}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                      {clinicPhotos[currentIndex].title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                      {clinicPhotos[currentIndex].desc}
                    </p>
                  </div>
                </div>

              </div>

              {/* Floating Hygiene Stamp */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200 shadow-xl flex items-center gap-3 z-30">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Hospital-Grade Asepsis</p>
                  <p className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 inline" />
                    100% Sterile Protocol
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Details & Equipment Breakdown */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
              State-Of-The-Art Clinic Setup
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Designed For Comfort, Driven By Precision
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                We believe exceptional dentistry requires uncompromising hygiene and cutting-edge technology. Our clinic in Jhotwara is engineered to provide a soothing, hospital-standard environment where you feel relaxed and completely safe.
              </p>
            </div>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {features.map((feat, idx) => {
                const Icon = feat.icon
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sky-200 hover:bg-sky-50/30 transition-all duration-200"
                  >
                    <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-3 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-600 bg-sky-50/60 p-3.5 rounded-2xl border border-sky-100">
              <Award className="w-5 h-5 text-sky-600 flex-shrink-0" />
              <span>
                <strong>Zero Cross-Contamination Assurance:</strong> All disposable items (gloves, suction tips, drapes, needles) are strictly single-use only.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

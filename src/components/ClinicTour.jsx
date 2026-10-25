import React from 'react'
import { ShieldCheck, Cpu, Sparkles, Activity, CheckCircle2, Award } from 'lucide-react'

export default function ClinicTour() {
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
          
          {/* Clinic Photo Showcase */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="/images/clinic.jpg"
                  alt="Modern hygiene dental operatory at Shree Dental Care"
                  className="w-full h-[380px] sm:h-[450px] object-cover"
                />
              </div>

              {/* Float Hygiene Stamp */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Hospital-Grade Asepsis</p>
                  <p className="text-[11px] text-emerald-700 font-semibold">100% Sterile Protocol</p>
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
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
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
                <strong>Zero Cross-Contamination Assurance:</strong> All disposable disposables (gloves, suction tips, drapes, needles) are strictly single-use only.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

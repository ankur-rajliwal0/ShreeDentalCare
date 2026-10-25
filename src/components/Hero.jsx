import React from 'react'
import { Calendar, Phone, Sparkles, CheckCircle, ShieldCheck, HeartPulse, Award, MessageCircle, ArrowRight } from 'lucide-react'

export default function Hero({ onOpenAppointment }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 hero-gradient">
      {/* Subtle background ambient circles */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 right-0 w-[450px] h-[450px] bg-cyan-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top clinic badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-sky-200 shadow-sm text-xs sm:text-sm text-sky-800 font-medium">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>Jaipur's Premier Orthodontic & Implant Centre</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              World-Class Dental Care,{' '}
              <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                Gentle & Pain-Free
              </span>{' '}
              For Your Entire Family.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Led by <strong className="text-slate-800 font-semibold">Dr. Shrikant Sharma</strong> (BDS, MDS Ortho, Certified Implantologist & Asst. Professor). We specialize in invisible aligners, pain-free single-sitting RCTs, advanced dental implants, and precision smile makeovers in Jhotwara, Jaipur.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOpenAppointment}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-white bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 rounded-2xl shadow-xl shadow-sky-600/25 hover:shadow-2xl hover:shadow-sky-600/35 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment Online</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <a
                href="https://wa.me/918107879056?text=Hi%20Dr.%20Shrikant,%20I%20would%20like%20to%20know%20more%20about%20dental%20treatments%20at%20Shree%20Dental%20Care"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/90 rounded-2xl border border-emerald-300 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp: 8107879056</span>
              </a>
            </div>

            {/* Trust bullet features */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 border border-sky-100">
                <div className="p-1.5 rounded-lg bg-sky-100 text-sky-700">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-slate-800">100% Sterile</p>
                  <p className="text-slate-500">Class-B Autoclave</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 border border-sky-100">
                <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700">
                  <HeartPulse className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-slate-800">Painless Tech</p>
                  <p className="text-slate-500">Computerized Anesthesia</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5 p-2 rounded-xl bg-white/70 border border-sky-100">
                <div className="p-1.5 rounded-lg bg-amber-100 text-amber-700">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-slate-800">MDS Specialist</p>
                  <p className="text-slate-500">Asst Prof Nirwan Univ</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky-950/15 border-4 border-white bg-white">
                <img
                  src="/images/patient.jpg"
                  alt="Radiant, healthy smile at Shree Dental Care"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-top"
                />
                
                {/* Subtle gradient overlay at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Bottom photo badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">Patient Transformation</p>
                    <p className="text-sm font-bold text-slate-900">Naturally Beautiful & Aligned Smiles</p>
                  </div>
                  <div className="flex items-center text-amber-400 font-bold text-sm bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200">
                    ★ 4.9/5
                  </div>
                </div>
              </div>

              {/* Floating Doctor Badge Card (Top Left) */}
              <div className="absolute -top-5 -left-4 sm:-left-8 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-sky-200/80 shadow-xl shadow-sky-900/10 flex items-center gap-3 animate-subtle-pulse">
                <img
                  src="/images/doctor.jpg"
                  alt="Dr. Shrikant Sharma"
                  className="w-12 h-12 rounded-xl object-cover border-2 border-sky-500"
                />
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900 leading-tight">Dr. Shrikant Sharma</p>
                  <p className="text-[11px] font-medium text-sky-600">MDS (Ortho) • Implantologist</p>
                  <span className="inline-block mt-0.5 text-[9px] uppercase tracking-wide bg-sky-100 text-sky-800 px-1.5 py-0.2 rounded font-semibold">
                    12+ Yrs Clinical Mastery
                  </span>
                </div>
              </div>

              {/* Floating Feature Card (Bottom Right) */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-cyan-200/80 shadow-xl shadow-sky-900/10 max-w-[210px] text-left">
                <div className="flex items-center gap-1.5 text-xs font-bold text-sky-700 mb-1">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Advanced Braces & Aligners</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Precision digital scanning for 100% comfortable teeth straightening.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

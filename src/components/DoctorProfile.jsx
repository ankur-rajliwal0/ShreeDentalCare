import React from 'react'
import { Award, GraduationCap, Building2, CheckCircle2, Calendar, Phone, Sparkles, BookOpen, Stethoscope } from 'lucide-react'

export default function DoctorProfile({ onOpenAppointment }) {
  const credentials = [
    {
      title: 'B.D.S., M.D.S. (Orthodontics & Dentofacial Orthopedics)',
      desc: 'Master degree specialization in aligning teeth, correcting jaw discrepancies, and facial aesthetics.',
      icon: GraduationCap,
    },
    {
      title: 'Certified Implantologist',
      desc: 'Advanced fellowship training in single-tooth, multi-unit, and full-arch dental implantology.',
      icon: Award,
    },
    {
      title: 'Assistant Professor, Nirwan University, Jaipur',
      desc: 'Actively shaping the next generation of dental surgeons through academic lectures and clinical guidance.',
      icon: BookOpen,
    },
    {
      title: 'Senior Consultant & Founder at Shree Dental Care',
      desc: 'Providing personalized, gentle, and transparent dental solutions to patients in Jaipur.',
      icon: Stethoscope,
    },
  ]

  const specializations = [
    'Invisible Clear Aligners',
    'Self-Ligating Metal & Ceramic Braces',
    'Certified Dental Implants',
    'Single-Sitting Painless RCT',
    'Full Mouth Rehabilitation',
    'Smile Aesthetics & Laminates',
    'Pediatric Interceptive Orthodontics',
    'Laser Dentistry & Gum Sculpting',
  ]

  return (
    <section id="doctor" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Doctor Portrait Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background glow */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-sky-100 rounded-3xl -z-10 blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-cyan-100 rounded-3xl -z-10 blur-xl" />

              {/* Main Photo Frame */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="/images/dr-shrikant-sharma.jpg"
                  alt="Dr. Shrikant Sharma - BDS, MDS Ortho, Certified Implantologist"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Verified Specialist Badge */}
              <div className="absolute -bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-sky-100 shadow-xl flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-sky-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-600">Verified Specialist</p>
                  <p className="text-sm font-extrabold text-slate-900">Dr. Shrikant Sharma</p>
                  <p className="text-[11px] text-slate-500">MDS (Ortho) • Certified Implantologist</p>
                </div>
              </div>

            </div>
          </div>

          {/* Doctor Information & Credentials */}
          <div className="lg:col-span-7 space-y-6 pt-4 lg:pt-0">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              Meet Your Orthodontist & Dental Surgeon
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Dr. Shrikant Sharma
              </h2>
              <p className="text-lg font-semibold text-sky-700 mt-1">
                B.D.S., M.D.S. (Ortho) | Certified Implantologist
              </p>
              <p className="text-sm font-medium text-slate-500">
                Assistant Professor, Nirwan University, Jaipur
              </p>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              With over 12 years of specialized clinical experience, Dr. Shrikant Sharma has transformed thousands of smiles across Jaipur. He blends biomechanical orthodontic precision with an artist's eye for facial harmony, ensuring every patient achieves teeth alignment and natural aesthetics with minimal discomfort.
            </p>

            {/* Credentials List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {credentials.map((cred, idx) => {
                const Icon = cred.icon
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-colors flex items-start gap-3"
                  >
                    <div className="p-2 rounded-xl bg-white text-sky-600 shadow-xs flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-snug">
                        {cred.title}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                        {cred.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Key Clinical Focus Pills */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                Clinical Focus Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-xl bg-sky-50 text-sky-800 text-xs font-semibold border border-sky-100 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3 h-3 text-sky-600" />
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Consultation Row */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenAppointment('Consultation with Dr. Shrikant Sharma')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-bold text-sm shadow-md shadow-sky-600/20 flex items-center gap-2 cursor-pointer transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Direct Consultation</span>
              </button>

              <a
                href="tel:918107879056"
                className="px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-200 flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call Dr. Shrikant (+91 81078 79056)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

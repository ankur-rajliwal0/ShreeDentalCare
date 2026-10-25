import React, { useState } from 'react'
import { Sparkles, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react'

export default function SmileGallery({ onOpenAppointment }) {
  const [activeTab, setActiveTab] = useState(0)

  const cases = [
    {
      title: 'Crowded Teeth & Narrow Arch',
      treatment: 'Invisible Clear Aligners',
      duration: '8 Months',
      age: '24 Years',
      concern: 'Severe lower teeth crowding and overlapping central incisors causing difficulty in smiling and flossing.',
      outcome: 'Broadened arch and aligned smile with zero visible wires or enamel damage.',
      badge: 'Aligners',
      patient: 'Ananya S. • Vaishali Nagar, Jaipur',
      beforeColor: 'from-amber-100 to-orange-100',
      afterColor: 'from-sky-100 to-cyan-100',
      beforeLabel: 'Severe Crowding',
      afterLabel: 'Perfect Alignment',
    },
    {
      title: 'Single Missing Tooth & Bone Preservation',
      treatment: 'Certified Dental Implant + Zirconia Crown',
      duration: '3 Months (Osseointegration)',
      age: '38 Years',
      concern: 'Loss of upper premolar due to root fracture, compromising chewing and natural smile line.',
      outcome: 'Permanent titanium implant with precision CAD/CAM Zirconia crown matching adjacent teeth shade 100%.',
      badge: 'Implantology',
      patient: 'Vikram R. • Jhotwara, Jaipur',
      beforeColor: 'from-rose-100 to-pink-100',
      afterColor: 'from-sky-100 to-blue-100',
      beforeLabel: 'Tooth Gap & Lost Function',
      afterLabel: 'Permanent Life-Like Tooth',
    },
    {
      title: 'Extensive Midline Diastema (Tooth Spacing)',
      treatment: 'Ceramic Aesthetic Braces',
      duration: '10 Months',
      age: '19 Years',
      concern: 'Noticeable 4mm midline gap between upper front teeth affecting social confidence.',
      outcome: 'Seamless space closure and normalized bite guidance with subtle tooth-colored brackets.',
      badge: 'Orthodontics',
      patient: 'Rahul M. • Vidhyadhar Nagar, Jaipur',
      beforeColor: 'from-amber-100 to-yellow-100',
      afterColor: 'from-emerald-100 to-teal-100',
      beforeLabel: '4mm Midline Gap',
      afterLabel: 'Seamless Gap Closure',
    },
    {
      title: 'Severe Tea & Tobacco Stain Discoloration',
      treatment: 'Laser Teeth Brightening & Enamel Polish',
      duration: 'Single 45-Min Session',
      age: '32 Years',
      concern: 'Deep intrinsic and extrinsic enamel stains before wedding ceremony.',
      outcome: '7 shades brighter instantly with protective fluoride desensitizing polish.',
      badge: 'Cosmetic',
      patient: 'Pooja K. • Mansarovar, Jaipur',
      beforeColor: 'from-yellow-100 to-amber-200',
      afterColor: 'from-white to-sky-100',
      beforeLabel: 'Stained Enamel (Shade A4)',
      afterLabel: 'Radiant Bright (Shade B1)',
    },
  ]

  const currentCase = cases[activeTab]

  return (
    <section id="gallery" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Real Clinical Results
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Smile Transformations That Speak For Themselves
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Witness how custom orthodontic alignment and precision implantology restore not just smiles, but life-changing confidence.
          </p>

          {/* Tab selector */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {cases.map((c, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === idx
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                    : 'bg-white text-slate-700 hover:bg-sky-50 border border-slate-200'
                }`}
              >
                {c.treatment}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Transformation Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl shadow-sky-950/5 border border-sky-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            
            {/* Visual Before / After Representation */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-center">
              <div className="space-y-4">
                
                {/* Before Box */}
                <div className="relative rounded-2xl p-5 bg-gradient-to-br from-slate-100 to-amber-50/60 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-rose-100 text-rose-700">
                      Before Treatment
                    </span>
                    <span className="text-xs font-semibold text-slate-500">Initial Clinical State</span>
                  </div>
                  <p className="text-sm font-bold text-slate-800 mt-1">
                    {currentCase.beforeLabel}
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    {currentCase.concern}
                  </p>
                </div>

                {/* Arrow Divider */}
                <div className="flex items-center justify-center -my-1">
                  <div className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-md">
                    <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
                  </div>
                </div>

                {/* After Box */}
                <div className="relative rounded-2xl p-5 bg-gradient-to-br from-sky-50 to-cyan-50 border-2 border-sky-300 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700">
                      After Transformation
                    </span>
                    <span className="text-xs font-semibold text-sky-700">Finished Result</span>
                  </div>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    {currentCase.afterLabel}
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    {currentCase.outcome}
                  </p>
                </div>

              </div>
            </div>

            {/* Case Details & Metrics */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-800">
                    {currentCase.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-sky-600" />
                    <span>Dr. Shrikant Sharma</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {currentCase.title}
                </h3>

                <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 text-xs">
                  <div>
                    <span className="text-slate-400 font-medium">Procedure:</span>
                    <p className="font-bold text-slate-800 mt-0.5">{currentCase.treatment}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Total Timeline:</span>
                    <p className="font-bold text-slate-800 mt-0.5">{currentCase.duration}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Patient Age:</span>
                    <p className="font-bold text-slate-800 mt-0.5">{currentCase.age}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Location:</span>
                    <p className="font-bold text-slate-800 mt-0.5">Jaipur, Rajasthan</p>
                  </div>
                </div>

                <blockquote className="p-4 rounded-xl bg-slate-50 border-l-4 border-sky-500 text-xs sm:text-sm text-slate-700 italic">
                  "{currentCase.patient} – 'The difference is night and day. Dr. Shrikant and his team made every visit comfortable without any pain!'"
                </blockquote>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenAppointment(`Consultation for ${currentCase.treatment}`)}
                  className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-bold text-sm shadow-md shadow-sky-600/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <span>Request Similar Transformation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

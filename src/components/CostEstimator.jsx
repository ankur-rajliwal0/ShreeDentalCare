import React, { useState } from 'react'
import { Calculator, CheckCircle2, Clock, ShieldCheck, HeartPulse, ArrowRight } from 'lucide-react'

export default function CostEstimator({ onOpenAppointment }) {
  const [selectedId, setSelectedId] = useState('aligners')

  const procedures = [
    {
      id: 'aligners',
      name: 'Invisible Clear Aligners',
      category: 'Orthodontics',
      sessions: 'Custom Sets + Checkup Every 6-8 Wks',
      painScore: 'Zero Discomfort',
      materials: 'Medical-Grade US-FDA Biopolymer',
      idealFor: 'Crooked teeth, minor to moderate spacing, crowding without wires',
      benefits: ['100% Removable for meals', 'Crystal clear aesthetics', '3D digital plan before starting'],
    },
    {
      id: 'braces',
      name: 'Ceramic / Metal Braces',
      category: 'Orthodontics',
      sessions: 'Monthly Minor Wire Adjustments',
      painScore: 'Mild pressure on day 1 only',
      materials: 'Space-Grade Alloys / Tooth-Colored Ceramic',
      idealFor: 'Complex bite alignment, skeletal crossbites, severe rotations',
      benefits: ['Precise 3D root movement', 'Economic and highly effective', 'Long-lasting structural stability'],
    },
    {
      id: 'implants',
      name: 'Certified Dental Implants',
      category: 'Implantology',
      sessions: '1-2 Sittings + Healing Period',
      painScore: '100% Painless (Local Numbing)',
      materials: 'Medical Grade Grade-IV Pure Titanium',
      idealFor: 'Single missing tooth, multiple teeth, loose denture replacement',
      benefits: ['Acts like natural tooth root', 'Maintains jawbone mass', 'Lifetime durability record'],
    },
    {
      id: 'rct',
      name: 'Single-Sitting Rotary RCT',
      category: 'Endodontics',
      sessions: '1 Single Visit (45-60 Mins)',
      painScore: 'Zero Pain (Instant Relief from Toothache)',
      materials: 'Thermoplasticized Gutta-Percha & Bio-Ceramic Sealer',
      idealFor: 'Deep cavity infection, unbearable night toothache, fractured pulp',
      benefits: ['Preserves real natural tooth', 'Apex locator 99% accuracy', 'Immediate relief from agony'],
    },
    {
      id: 'whitening',
      name: 'In-Office Laser Teeth Whitening',
      category: 'Cosmetic',
      sessions: '1 Single Visit (45 Mins)',
      painScore: 'Completely Comfortable',
      materials: 'Certified Enamel-Safe Peroxide Gel with LED Accelerator',
      idealFor: 'Coffee, tea, tobacco stains, dull or yellow smiles',
      benefits: ['Up to 8 shades brighter', 'Instant transformation', 'Fluoride enamel re-mineralization'],
    },
  ]

  const selected = procedures.find((p) => p.id === selectedId) || procedures[0]

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-sky-600" />
            Procedure Guide & Planning
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Transparent Treatment Insights
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Select a procedure below to preview timeline expectations, materials used, and comfort levels at Shree Dental Care.
          </p>
        </div>

        {/* Interactive Selector Layout */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl shadow-sky-950/5 border border-sky-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left selector menu */}
            <div className="lg:col-span-5 p-4 sm:p-6 bg-slate-50/70 border-b lg:border-b-0 lg:border-r border-slate-100 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3">
                Choose Treatment:
              </span>
              {procedures.map((proc) => {
                const isSelected = proc.id === selectedId
                return (
                  <button
                    key={proc.id}
                    onClick={() => setSelectedId(proc.id)}
                    className={`w-full text-left p-3.5 rounded-2xl transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-sky-600 text-white shadow-md shadow-sky-600/25'
                        : 'bg-white text-slate-700 hover:bg-slate-100/80 border border-slate-200/60'
                    }`}
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider opacity-80">
                        {proc.category}
                      </p>
                      <p className="text-sm font-bold">
                        {proc.name}
                      </p>
                    </div>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1' : 'opacity-40'}`} />
                  </button>
                )
              })}
            </div>

            {/* Right Details Box */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-sky-600">
                    {selected.category} Care Details
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                    {selected.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Ideal For: <strong>{selected.idealFor}</strong>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 py-3 border-y border-slate-100">
                  <div className="p-3 rounded-xl bg-sky-50/60 border border-sky-100">
                    <span className="text-[11px] font-bold text-sky-700 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> Typical Schedule
                    </span>
                    <p className="text-xs font-bold text-slate-800 mt-1">{selected.sessions}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100">
                    <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1.5">
                      <HeartPulse className="w-3.5 h-3.5" /> Comfort Level
                    </span>
                    <p className="text-xs font-bold text-slate-800 mt-1">{selected.painScore}</p>
                  </div>

                  <div className="col-span-1 sm:col-span-2 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <span className="text-[11px] font-bold text-slate-600 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-sky-600" /> Clinical Material Quality
                    </span>
                    <p className="text-xs font-semibold text-slate-700 mt-0.5">{selected.materials}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Clinical Advantages:
                  </p>
                  <ul className="space-y-1.5">
                    {selected.benefits.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenAppointment(selected.name)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Book Consultation for {selected.name}</span>
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

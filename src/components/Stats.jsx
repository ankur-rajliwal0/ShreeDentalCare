import React from 'react'
import { Users, Award, ShieldCheck, Star } from 'lucide-react'

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Smiles Restored',
      sublabel: 'Patients across Jaipur & Rajasthan',
      color: 'from-sky-500 to-blue-600',
    },
    {
      icon: Award,
      value: '12+ Years',
      label: 'Specialist Experience',
      sublabel: 'Orthodontics & Certified Implantology',
      color: 'from-cyan-500 to-sky-600',
    },
    {
      icon: ShieldCheck,
      value: '100% Safe',
      label: 'Hospital-Grade Sterilization',
      sublabel: 'Strict 7-tier Class-B autoclave protocol',
      color: 'from-teal-500 to-emerald-600',
    },
    {
      icon: Star,
      value: '4.9 / 5',
      label: 'Patient Satisfaction',
      sublabel: 'Over 500+ authentic Google reviews',
      color: 'from-amber-400 to-orange-500',
    },
  ]

  return (
    <section className="relative z-10 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl shadow-sky-950/5 border border-sky-100 p-6 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className={`flex flex-col items-center lg:items-start text-center lg:text-left ${
                  idx > 1 ? 'pt-6 lg:pt-0' : idx % 2 === 1 ? 'pt-0' : ''
                } ${idx > 0 ? 'lg:pl-8' : ''}`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${stat.color} p-2.5 text-white shadow-md shadow-sky-500/20 mb-3 flex items-center justify-center`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {stat.sublabel}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

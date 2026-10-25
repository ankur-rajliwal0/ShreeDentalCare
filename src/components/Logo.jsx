import React from 'react'

export default function Logo({ className = "h-11", light = false }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Custom Stylized Dental Logo Icon matching the clinic branding */}
      <div className="relative flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-tr from-sky-600 via-sky-500 to-cyan-400 p-2 shadow-md shadow-sky-500/20">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white"
        >
          {/* Stylized Tooth Crown */}
          <path
            d="M50 12C32 12 20 25 22 45C23.5 59 30 72 35 88C37 94 44 94 46 88C48 83 49 76 50 76C51 76 52 83 54 88C56 94 63 94 65 88C70 72 76.5 59 78 45C80 25 68 12 50 12Z"
            fill="currentColor"
            fillOpacity="0.95"
          />
          {/* Orthodontic Braces Bracket band across the tooth */}
          <rect x="36" y="44" width="28" height="12" rx="3" fill="#0F172A" />
          {/* Orthodontic Wire */}
          <line x1="20" y1="50" x2="80" y2="50" stroke="#38BDF8" strokeWidth="3.5" strokeLinecap="round" />
          {/* Individual Bracket clips */}
          <rect x="40" y="46" width="6" height="8" rx="1.5" fill="#38BDF8" />
          <rect x="54" y="46" width="6" height="8" rx="1.5" fill="#38BDF8" />
          {/* Aesthetic Smile Shine */}
          <path
            d="M32 26C36 21 44 19 50 19"
            stroke="#BAE6FD"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span className={`text-xl font-bold tracking-tight font-serif ${light ? 'text-white' : 'text-slate-900'}`}>
            Shree Dental
          </span>
          <span className="text-xl font-extrabold tracking-tight text-sky-600">
            Care
          </span>
        </div>
        <span className={`text-[10px] tracking-wider uppercase font-semibold -mt-0.5 ${light ? 'text-sky-200' : 'text-slate-500'}`}>
          Advanced Orthodontic & Implant Centre
        </span>
      </div>
    </div>
  )
}

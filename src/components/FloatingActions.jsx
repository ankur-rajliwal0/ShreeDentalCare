import React from 'react'
import { Phone, MessageCircle, Calendar } from 'lucide-react'

export default function FloatingActions({ onOpenAppointment }) {
  return (
    <>
      {/* Desktop Floating WhatsApp Badge */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/918107879056?text=Hello%20Dr.%20Shrikant%20Sharma,%20I%20would%20like%20to%20consult%20at%20Shree%20Dental%20Care"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2.5 p-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-xl shadow-emerald-950/20 hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" />
          </div>
          <span className="text-xs font-bold pr-1 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Bottom Fixed Action Dock */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-sky-100 p-2 shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          <a
            href="tel:918107879056"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 text-slate-800 text-[11px] font-bold active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 text-sky-600 mb-0.5" />
            <span>Call</span>
          </a>

          <a
            href="https://wa.me/918107879056?text=Hi%20Dr.%20Shrikant,%20I%20want%20to%20consult%20at%20Shree%20Dental%20Care"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenAppointment}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 text-white text-[11px] font-bold shadow-md active:scale-95 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-sky-100 mb-0.5" />
            <span>Book Visit</span>
          </button>
        </div>
      </div>
    </>
  )
}

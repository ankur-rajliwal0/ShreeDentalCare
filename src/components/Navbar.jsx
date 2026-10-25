import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import { Phone, Clock, MapPin, Calendar, Menu, X, MessageCircle, ShieldCheck } from 'lucide-react'

export default function Navbar({ onOpenAppointment }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Treatments', href: '#services' },
    { name: 'Dr. Shrikant', href: '#doctor' },
    { name: 'Brushing Test', href: '#brushing-quiz', badge: 'Awareness' },
    { name: 'Smile Gallery', href: '#gallery' },
    { name: 'Clinic Tour', href: '#facility' },
    { name: 'Patient Reviews', href: '#reviews' },
    { name: 'Contact & Map', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-sky-900 text-sky-100 text-xs py-2 px-4 border-b border-sky-800/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-5 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-sky-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              Khirni Phatak Road / Sangh Shakti Rd, Jhotwara, Jaipur
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              Mon-Sat: 9:30 AM - 1:30 PM & 5:00 PM - 8:30 PM
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto text-[11px] sm:text-xs">
            <a
              href="https://wa.me/918107879056?text=Hello%20Dr.%20Shrikant%20Sharma,%20I%20would%20like%20to%20consult%20regarding%20dental%20treatment%20at%20Shree%20Dental%20Care"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: +91 81078 79056</span>
            </a>
            <span className="hidden lg:inline text-slate-400">|</span>
            <a
              href="tel:919782099056"
              className="hidden lg:flex items-center gap-1 text-slate-300 hover:text-white"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              +91 97820 99056
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-lg shadow-sky-900/5'
            : 'bg-white/95 backdrop-blur-md py-4 border-b border-sky-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex-shrink-0">
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-sky-600 hover:bg-sky-50/80 rounded-xl transition-all duration-150 group"
              >
                {link.name}
                {link.badge && (
                  <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-semibold bg-sky-100 text-sky-700 rounded-full border border-sky-200">
                    {link.badge}
                  </span>
                )}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:918107879056"
              className="flex items-center gap-2 px-3.5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl border border-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>Call Helpline</span>
            </a>

            <button
              onClick={onOpenAppointment}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 rounded-xl shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenAppointment}
              className="flex sm:hidden items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-sky-600 rounded-lg shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-sky-600 hover:bg-sky-50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-sky-100 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600"
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-semibold bg-sky-100 text-sky-700 rounded-full">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenAppointment()
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-cyan-600 shadow-md shadow-sky-500/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:918107879056"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  <span>8107879056</span>
                </a>
                <a
                  href="https://wa.me/918107879056"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

import React from 'react'
import Logo from './Logo'
import { MapPin, Phone, Clock, Heart, ShieldCheck, ArrowUp } from 'lucide-react'

export default function Footer({ onOpenAppointment }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Doctor intro */}
          <div className="lg:col-span-4 space-y-4">
            <Logo light={true} />
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
              Comprehensive advanced orthodontic and dental implant centre in Jhotwara, Jaipur. Led by <strong>Dr. Shrikant Sharma</strong> (B.D.S., M.D.S. Ortho, Certified Implantologist, Asst. Professor Nirwan University).
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Certified 100% Class-B Sterilization Practice</span>
            </div>
          </div>

          {/* Col 2: Treatments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Specialized Treatments
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Invisible Clear Aligners
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Ceramic & Metal Braces (Orthodontics)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Certified Dental Implants
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Single-Sitting Painless RCT
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Laser Teeth Whitening & Veneers
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Ultrasonic Scaling & Gum Therapy
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Wisdom Tooth Atraumatic Extraction
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#doctor" className="hover:text-sky-400 transition-colors">
                  About Dr. Shrikant Sharma
                </a>
              </li>
              <li>
                <a href="#brushing-quiz" className="hover:text-sky-400 transition-colors">
                  Brushing Health Self-Test
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-sky-400 transition-colors">
                  Smile Transformation Gallery
                </a>
              </li>
              <li>
                <a href="#facility" className="hover:text-sky-400 transition-colors">
                  Clinic Tour & Sterilization
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-sky-400 transition-colors">
                  Patient Reviews (4.9★)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400 transition-colors">
                  Directions & Timings
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Emergency */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Clinic Contact & Hours
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>
                  Shop G-1, B-1, Ajeet Apartment, Khirni Phatak Rd, Shri Ram Nagar-A, Jhotwara, Jaipur - 302012
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href="tel:918107879056" className="hover:text-white font-bold text-slate-200">
                  +91 81078 79056
                </a>
                <span>/</span>
                <a href="tel:919782099056" className="hover:text-white">
                  97820 99056
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Sat: 9:30 AM – 1:30 PM & 5:00 PM – 8:30 PM</p>
                  <p className="text-sky-300">Sunday: 10:00 AM – 1:00 PM (Appt only)</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenAppointment()}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 text-white font-bold text-xs shadow-md hover:from-sky-500 hover:to-cyan-500 transition-all cursor-pointer"
              >
                Schedule Clinic Visit
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Shree Dental Care. All rights reserved. Dr. Shrikant Sharma (BDS, MDS Ortho).</p>
          
          <div className="flex items-center gap-4">
            <span>Medical Disclaimer: Educational content only. Consult in person for definitive diagnosis.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-sky-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

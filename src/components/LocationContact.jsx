import React from 'react'
import { MapPin, Phone, Clock, Navigation, ExternalLink, Calendar } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

export default function LocationContact({ onOpenAppointment }) {
  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            Visit Shree Dental Care
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Conveniently Located In Jhotwara, Jaipur
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Easily accessible with ample parking. Walk in for consultations or call ahead for dedicated priority time slots.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Clinic Addresses & Contacts */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Primary Address Card */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-sky-100 hover:border-sky-300 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-sky-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-sky-600/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600">
                    Clinic Address
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-0.5">
                    Shop No. G-1, B-1, Ajeet Apartment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Khirni Phatak Road, Shri Ram Nagar-A,<br />
                    (Also near Sangh Shakti Rd, Tara Nagar),<br />
                    Jhotwara, Jaipur, Rajasthan - 302012
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href="https://maps.google.com/?q=Shree+Dental+Care+Khirni+Phatak+Road+Jhotwara+Jaipur"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-200"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone Numbers Card */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-sky-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Direct Contact Lines
              </span>
              <div className="mt-3 space-y-3">
                <a
                  href="tel:918107879056"
                  className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Primary Mobile & Emergency</p>
                      <p className="text-sm font-bold text-slate-900">+91 81078 79056</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-sky-600">Tap to Call</span>
                </a>

                <a
                  href="tel:919782099056"
                  className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Secondary Clinic Helpline</p>
                      <p className="text-sm font-bold text-slate-900">+91 97820 99056</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-sky-600">Tap to Call</span>
                </a>

                <a
                  href="https://wa.me/918107879056?text=Hello%20Dr.%20Shrikant,%20I%20want%20to%20book%20an%20appointment%20at%20Shree%20Dental%20Care"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 border border-emerald-200 hover:border-emerald-300 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                      <WhatsAppIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-800 font-medium">WhatsApp Instant Response</p>
                      <p className="text-sm font-bold text-emerald-950">+91 81078 79056</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-700">Chat Now</span>
                </a>
              </div>
            </div>

            {/* Timings Card */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-sky-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-sky-600" />
                  Clinic Timings
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open Today
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-700">Monday – Saturday (Morning):</span>
                  <span className="font-bold text-slate-900">9:30 AM – 1:30 PM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/60">
                  <span className="font-semibold text-slate-700">Monday – Saturday (Evening):</span>
                  <span className="font-bold text-slate-900">5:00 PM – 8:30 PM</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="font-semibold text-slate-700">Sunday:</span>
                  <span className="font-bold text-sky-700">10:00 AM – 1:00 PM (By Appointment)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Map Visual & Quick Booking Card */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Map Preview Frame */}
            <div className="rounded-3xl overflow-hidden border border-sky-100 shadow-xl bg-slate-100 relative min-h-[360px] sm:min-h-[420px] flex flex-col justify-between">
              
              <iframe
                title="Shree Dental Care Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14227.424364239843!2d75.7405234!3d26.9427357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3760a928731%3A0xcf95ec8ba79b6d91!2sJhotwara%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full absolute inset-0 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Overlay Badge on Map */}
              <div className="relative z-10 m-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-sky-100 max-w-sm">
                <div className="flex items-center gap-2 text-sky-600 font-bold text-xs mb-1">
                  <MapPin className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span>Shree Dental Care</span>
                </div>
                <p className="text-xs text-slate-700">
                  Shop G-1, B-1, Ajeet Apartment, Khirni Phatak Rd, Jhotwara, Jaipur
                </p>
                <a
                  href="https://maps.google.com/?q=Shree+Dental+Care+Khirni+Phatak+Road+Jhotwara+Jaipur"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-bold text-white bg-sky-600 hover:bg-sky-700 px-3 py-1.5 rounded-lg shadow-sm transition-colors"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Driving Directions</span>
                </a>
              </div>

            </div>

            {/* Quick Consultation Callout */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold">Have an acute tooth pain or need braces advice?</h4>
                <p className="text-xs text-sky-100 mt-0.5">
                  Same-day emergency appointments are readily accommodated.
                </p>
              </div>
              <button
                onClick={() => onOpenAppointment('Emergency Consultation')}
                className="flex-shrink-0 px-5 py-3 rounded-xl bg-white text-sky-900 font-bold text-xs hover:bg-sky-50 shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-sky-600" />
                <span>Reserve Immediate Slot</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

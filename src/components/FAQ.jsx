import React, { useState } from 'react'
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react'

export default function FAQ({ onOpenAppointment }) {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: 'Do orthodontic braces or clear aligners hurt?',
      a: 'Modern orthodontic appliances apply gentle, continuous micro-forces rather than aggressive pulling. With our advanced self-ligating brackets and customized clear aligners, patients experience very mild tightness for only 24-48 hours after adjustments, with virtually no speech or eating hindrance.',
    },
    {
      q: 'What is the advantage of choosing a Certified Implantologist for Dental Implants?',
      a: 'Dental implantology requires deep understanding of bone density, 3D bio-mechanics, and gum biotypes. As an MDS Orthodontist and Certified Implantologist, Dr. Shrikant Sharma ensures the implant is placed with 3D digital precision to ensure lifetime osseointegration and optimal aesthetic smile harmony.',
    },
    {
      q: 'Can a Root Canal Treatment (RCT) truly be completed without pain in one sitting?',
      a: 'Yes! Using computerized micro-anesthesia, digital apex locators, and automated rotary nickel-titanium instruments, 90% of dental infections can be thoroughly cleaned and hermetically sealed in a single 45-60 minute sitting with zero pain during the procedure.',
    },
    {
      q: 'How frequently should I visit for scaling & dental cleaning?',
      a: 'Dentists globally recommend professional ultrasonic scaling every 6 months. This removes calcified tartar that normal toothbrushes cannot dislodge, effectively preventing gum bleeding, bad breath, and long-term tooth loosening.',
    },
    {
      q: 'Are clear aligners suitable for all types of irregular teeth?',
      a: 'Clear aligners are exceptionally effective for gaps, forward teeth, crowding, and relapse cases. During your initial consultation, Dr. Shrikant performs a digital bite scan to determine if aligners or aesthetic ceramic braces are optimal for your specific jaw anatomy.',
    },
    {
      q: 'Where is Shree Dental Care located in Jaipur and do you accept walk-ins?',
      a: 'We are conveniently located at Shop No. G-1, B-1, Ajeet Apartment, Khirni Phatak Road, Shri Ram Nagar-A, Jhotwara, Jaipur (also accessible via Sangh Shakti Rd, Tara Nagar). While emergency walk-ins are welcomed, booking an appointment in advance guarantees zero waiting time.',
    },
  ]

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Clear, honest medical answers to common questions about dental health and treatments.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-sky-100/80 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-800 hover:text-sky-600 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-sky-100 text-sky-700' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Have other question banner */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-sky-100 text-center shadow-sm">
          <h4 className="text-base font-bold text-slate-900">
            Have a specific concern regarding your teeth or gums?
          </h4>
          <p className="text-xs text-slate-500 mt-1">
            Talk directly to Dr. Shrikant Sharma or schedule a visit.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <button
              onClick={() => onOpenAppointment()}
              className="px-5 py-2.5 rounded-xl bg-sky-600 text-white font-bold text-xs hover:bg-sky-700 transition-colors cursor-pointer"
            >
              Ask During Free Oral Checkup
            </button>
            <a
              href="https://wa.me/918107879056"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-50 text-emerald-800 font-bold text-xs border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

import React, { useState } from 'react'
import {
  Sparkles,
  Smile,
  Shield,
  Activity,
  Zap,
  CheckCircle2,
  Clock,
  ArrowRight,
  HeartHandshake
} from 'lucide-react'

export default function Services({ onOpenAppointment }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Treatments' },
    { id: 'ortho', name: 'Orthodontics & Aligners' },
    { id: 'implants', name: 'Implants & Surgery' },
    { id: 'general', name: 'RCT & Cosmetic Care' },
  ]

  const services = [
    {
      category: 'ortho',
      title: 'Advanced Orthodontics & Braces',
      tag: 'Specialty Care',
      desc: 'Expert teeth alignment using high-precision self-ligating brackets, ceramic aesthetic braces, and traditional metal braces to fix crowding, gaps, and bite alignment.',
      features: ['Fixes crooked teeth & deep bite', 'Reduced treatment duration', 'Ceramic tooth-colored options'],
      duration: 'Consultation + Periodic Visits',
      popular: true,
      icon: Smile,
    },
    {
      category: 'ortho',
      title: 'Invisible Clear Aligners',
      tag: 'Most Popular',
      desc: 'Custom-crafted clear transparent trays that straighten your teeth seamlessly without wires, metal brackets, or food restrictions.',
      features: ['Nearly 100% invisible', 'Removable for meals & brushing', '3D digital treatment preview'],
      duration: 'Tailored aligner sets',
      popular: true,
      icon: Sparkles,
    },
    {
      category: 'implants',
      title: 'Certified Dental Implants',
      tag: 'Permanent Solution',
      desc: 'Permanent, lifelike titanium root replacements that look, bite, and feel exactly like natural teeth, performed by Certified Implantologist Dr. Shrikant Sharma.',
      features: ['Lifetime structural stability', 'Prevents bone loss & facial sagging', 'Preserves adjacent natural teeth'],
      duration: 'Minimally invasive procedure',
      popular: true,
      icon: Shield,
    },
    {
      category: 'general',
      title: 'Painless Single-Sitting RCT',
      tag: 'Tooth Preserving',
      desc: 'Advanced rotary endodontics with computerized apex locators to eliminate toothache and save infected natural teeth comfortably in a single sitting.',
      features: ['Zero-pain computerized anesthesia', 'Saves severely infected tooth', 'Completed in just 45-60 mins'],
      duration: 'Single 45-60 min visit',
      popular: false,
      icon: Zap,
    },
    {
      category: 'general',
      title: 'Cosmetic Teeth Whitening & Veneers',
      tag: 'Smile Makeover',
      desc: 'Professional in-office laser whitening and ultra-thin custom ceramic veneers that remove stubborn stains and create an effortless Hollywood smile.',
      features: ['Up to 8 shades whiter in 1 session', 'Enamel-safe certified whitening gel', 'Custom porcelain veneers for chipped teeth'],
      duration: '45 mins session',
      popular: false,
      icon: Activity,
    },
    {
      category: 'implants',
      title: 'Painless Wisdom Tooth Extraction',
      tag: 'Gentle Surgery',
      desc: 'Modern 3D guided surgical extraction for impacted, painful, or tilted wisdom teeth with fast recovery and post-op care.',
      features: ['Atraumatic extraction protocol', 'Quick healing with minimal swelling', 'Sedation & gentle anesthesia'],
      duration: '30-45 mins',
      popular: false,
      icon: HeartHandshake,
    },
    {
      category: 'general',
      title: 'Zirconia Crowns & Bridges',
      tag: 'Natural Look',
      desc: 'Premium CAD/CAM precision-milled metal-free zirconia crowns that match your natural tooth shade with extraordinary chew strength.',
      features: ['High-translucency lifelike match', 'Unmatched chip resistance', 'Digital 3D intraoral impressions'],
      duration: '2 appointments',
      popular: false,
      icon: Shield,
    },
    {
      category: 'general',
      title: 'Ultrasonic Scaling & Gum Therapy',
      tag: 'Preventive Hygiene',
      desc: 'Thorough, gentle cleaning using ultrasonic micro-vibrations to remove plaque, calculus, and nicotine stains while treating bleeding gums.',
      features: ['Eliminates bad breath & bleeding', 'Guards against tooth loosening', 'Enamel-safe gentle ultrasonic polish'],
      duration: '30 mins session',
      popular: false,
      icon: CheckCircle2,
    },
  ]

  const filteredServices =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory)

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Comprehensive Dental Care
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialized Treatments Designed For Your Perfect Smile
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From correcting complex misalignments with advanced braces to permanent dental implants, each treatment is delivered with modern pain-free technology.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                    : 'bg-white text-slate-600 hover:bg-sky-50 hover:text-sky-700 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="card-hover-effect group relative bg-white rounded-3xl p-7 border border-sky-100 shadow-sm hover:shadow-xl hover:border-sky-300 flex flex-col justify-between"
              >
                {service.popular && (
                  <div className="absolute top-5 right-5 px-3 py-1 rounded-full text-[11px] font-bold bg-sky-50 text-sky-700 border border-sky-200">
                    {service.tag}
                  </div>
                )}

                <div>
                  {/* Icon */}
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-sky-500 to-cyan-500 text-white p-3 shadow-md shadow-sky-500/20 mb-5 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title & Tag */}
                  {!service.popular && (
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 mb-1 inline-block">
                      {service.tag}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-5 pt-5 border-t border-slate-100 space-y-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{service.duration}</span>
                  </div>

                  <button
                    onClick={() => onOpenAppointment(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 group-hover:translate-x-1 transition-all cursor-pointer"
                  >
                    <span>Consult</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-900 via-slate-900 to-sky-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-sky-950/20">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold">Not sure which treatment fits your smile?</h4>
            <p className="text-sky-200 text-sm max-w-xl">
              Schedule a comprehensive diagnostic consultation with Dr. Shrikant Sharma for detailed digital treatment planning.
            </p>
          </div>
          <button
            onClick={() => onOpenAppointment('Comprehensive Oral Consultation')}
            className="flex-shrink-0 px-6 py-3.5 bg-white text-slate-900 hover:bg-sky-50 font-bold rounded-xl text-sm shadow-md transition-all cursor-pointer"
          >
            Book Oral Checkup Now
          </button>
        </div>

      </div>
    </section>
  )
}

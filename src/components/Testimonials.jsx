import React from 'react'
import { Star, Quote, CheckCircle, Sparkles } from 'lucide-react'

export default function Testimonials() {
  const reviews = [
    {
      name: 'Sunil Choudhary',
      location: 'Jhotwara, Jaipur',
      procedure: 'Clear Aligners & Teeth Alignment',
      rating: 5,
      date: '2 weeks ago',
      review:
        'Dr. Shrikant Sharma is hands down the best orthodontist in Jaipur. I was very hesitant about getting braces at 28, but he suggested invisible aligners. The process was super smooth, comfortable, and now my teeth alignment is flawless!',
    },
    {
      name: 'Dr. Meenakshi Pareek',
      location: 'Khirni Phatak, Jaipur',
      procedure: 'Painless Single-Sitting RCT & Crown',
      rating: 5,
      date: '1 month ago',
      review:
        'Being a medical professional myself, I was thoroughly impressed by the sterilization protocols and painless rotary RCT. Absolutely zero pain during the procedure, and the Zirconia crown looks and chews like my original tooth.',
    },
    {
      name: 'Rajendra Singh Shekhawat',
      location: 'Tara Nagar, Jaipur',
      procedure: 'Dental Implant Replacement',
      rating: 5,
      date: '3 months ago',
      review:
        'I had a missing molar for 2 years. Dr. Shrikant did a certified implant procedure. He explained the complete steps in advance. The healing was so fast, and now I can chew comfortably from both sides without any difficulty.',
    },
    {
      name: 'Priyanka Khandelwal',
      location: 'Vaishali Nagar, Jaipur',
      procedure: 'Cosmetic Teeth Whitening & Braces',
      rating: 5,
      date: 'Recent Patient',
      review:
        'The clinic is squeaky clean and has such a soothing vibe! Dr. Shrikant is so calm and never recommends unnecessary procedures. He treated my bleeding gums and whitened my teeth before my family wedding. Highly recommend Shree Dental Care!',
    },
  ]

  return (
    <section id="reviews" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Patient Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted By Families Across Jaipur
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Real experiences from patients who entrusted their smiles to Dr. Shrikant Sharma and the Shree Dental Care team.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-50 border border-amber-200 text-slate-800 text-xs sm:text-sm font-semibold">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>4.9 / 5.0 Rating based on 500+ Google Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-all card-hover-effect flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{rev.date}</span>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  "{rev.review}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    {rev.name}
                    <CheckCircle className="w-3.5 h-3.5 text-sky-500" />
                  </h3>
                  <p className="text-xs text-slate-500">{rev.location}</p>
                </div>

                <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                  {rev.procedure}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

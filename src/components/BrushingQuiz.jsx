import React, { useState } from 'react'
import { AlertCircle, CheckCircle, Info, Sparkles, MessageCircle, Calendar, ArrowRight, ShieldAlert } from 'lucide-react'

export default function BrushingQuiz({ onOpenAppointment }) {
  const [selectedSymptoms, setSelectedSymptoms] = useState([])

  const symptoms = [
    {
      id: 'bleeding',
      label: 'Your gums bleed regularly while brushing or spitting',
      hint: 'Bleeding is a classic sign of gum inflammation (gingivitis) or aggressive brushing friction.',
    },
    {
      id: 'pressure',
      label: 'You brush with heavy downward or scrubbing pressure',
      hint: 'Scrubbing too vigorously does not clean better—it wears down microscopic tooth enamel layers.',
    },
    {
      id: 'sensitive',
      label: 'Your teeth feel sensitive to cold water, ice cream, or hot drinks',
      hint: 'Gum recession exposes dental tubules, resulting in sharp pain or sensitivity.',
    },
    {
      id: 'bristles',
      label: 'Your toothbrush bristles spread out / flare within 2 to 4 weeks',
      hint: 'Toothbrushes should maintain their shape for 3 months. Fast fraying proves excessive force.',
    },
  ]

  const toggleSymptom = (id) => {
    if (selectedSymptoms.includes(id)) {
      setSelectedSymptoms(selectedSymptoms.filter((item) => item !== id))
    } else {
      setSelectedSymptoms([...selectedSymptoms, id])
    }
  }

  const count = selectedSymptoms.length

  const getAssessment = () => {
    if (count === 0) {
      return {
        level: 'Safe & Optimal',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
        title: 'Your Brushing Habits Appear Safe!',
        desc: 'Keep maintaining gentle circular strokes with a soft-bristled toothbrush. Routine cleaning twice a year ensures lasting enamel protection.',
      }
    } else if (count === 1) {
      return {
        level: 'Mild Warning',
        color: 'text-amber-800 bg-amber-50 border-amber-200',
        title: 'Early Signs of Enamel Abrasion or Gingival Stress',
        desc: 'You may be exerting more pressure than your gums can tolerate. Switching to an ultra-soft brush and adjusting your stroke technique can prevent permanent recession.',
      }
    } else {
      return {
        level: 'High Risk Alert',
        color: 'text-rose-800 bg-rose-50 border-rose-200',
        title: 'Risk of Irreversible Enamel Loss & Gum Recession',
        desc: 'Multiple indicators suggest significant mechanical abrasion and potential periodontal inflammation. A prompt clinical evaluation by Dr. Shrikant Sharma will help protect your exposed roots.',
      }
    }
  }

  const assessment = getAssessment()

  return (
    <section id="brushing-quiz" className="py-20 bg-gradient-to-b from-sky-50/60 via-white to-sky-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            Clinic Patient Awareness Campaign
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Could You Be Brushing Too Hard?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Many patients unintentionally damage their healthy tooth enamel and gums by applying excessive brushing force. Take this 15-second self-check curated by <strong>Dr. Shrikant Sharma</strong>.
          </p>
        </div>

        {/* Interactive Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-sky-950/5 border border-sky-100 overflow-hidden">
          <div className="p-6 sm:p-10">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Tap all symptoms that apply to you
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                {count} of 4 selected
              </span>
            </div>

            {/* Checklist items */}
            <div className="space-y-4">
              {symptoms.map((symptom) => {
                const isChecked = selectedSymptoms.includes(symptom.id)
                return (
                  <div
                    key={symptom.id}
                    onClick={() => toggleSymptom(symptom.id)}
                    className={`p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex items-start gap-4 ${
                      isChecked
                        ? 'border-sky-500 bg-sky-50/70 shadow-sm'
                        : 'border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200'
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                        isChecked
                          ? 'bg-sky-600 text-white'
                          : 'border-2 border-slate-300 bg-white'
                      }`}
                    >
                      {isChecked && <CheckCircle className="w-4 h-4" />}
                    </div>

                    <div className="flex-1">
                      <p className={`text-sm sm:text-base font-bold ${isChecked ? 'text-sky-950' : 'text-slate-800'}`}>
                        {symptom.label}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        {symptom.hint}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Dynamic Assessment Outcome Box */}
            <div className={`mt-8 p-6 rounded-2xl border transition-all ${assessment.color}`}>
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5">
                  {count > 1 ? (
                    <ShieldAlert className="w-6 h-6 text-rose-600 flex-shrink-0" />
                  ) : count === 1 ? (
                    <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  ) : (
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-white/80 shadow-xs">
                      {assessment.level}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold">
                      {assessment.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed opacity-90">
                    {assessment.desc}
                  </p>
                </div>
              </div>

              {/* Action buttons based on outcome */}
              <div className="mt-5 pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenAppointment('Brushing Sensitivity & Gum Evaluation')}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Calendar className="w-4 h-4 text-sky-400" />
                  <span>Book Enamel & Gum Evaluation</span>
                </button>

                <a
                  href={`https://wa.me/918107879056?text=Hi%20Dr.%20Shrikant,%20I%20took%20the%20Brushing%20Test%20on%20your%20website%20and%20matched%20${count}%20symptom(s).%20I%20would%20like%20guidance.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Results to Dr. Shrikant on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Doctor Note */}
            <div className="mt-6 flex items-center gap-3 text-xs text-slate-500 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
              <Info className="w-4 h-4 text-sky-600 flex-shrink-0" />
              <span>
                <strong>Clinical Tip by Dr. Shrikant Sharma:</strong> Always use a soft or ultra-soft bristled toothbrush and replace it every 3 months. Brush at a 45-degree angle using circular vibrations instead of hard horizontal scrubbing.
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

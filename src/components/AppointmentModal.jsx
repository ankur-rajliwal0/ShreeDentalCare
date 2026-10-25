import React, { useState, useEffect } from 'react'
import { X, Calendar, Clock, CheckCircle, MessageCircle, Phone, Sparkles, User, AlertCircle } from 'lucide-react'

export default function AppointmentModal({ isOpen, onClose, initialTreatment = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: initialTreatment || 'General Dental Consultation',
    date: new Date().toISOString().split('T')[0],
    slot: '11:00 AM',
    notes: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [bookingId, setBookingId] = useState('')

  useEffect(() => {
    if (initialTreatment) {
      setFormData((prev) => ({ ...prev, treatment: initialTreatment }))
    }
  }, [initialTreatment])

  if (!isOpen) return null

  const treatments = [
    'General Dental Consultation',
    'Invisible Clear Aligners',
    'Metal / Ceramic Braces (Orthodontics)',
    'Certified Dental Implants',
    'Painless Single-Sitting RCT',
    'Teeth Whitening & Smile Makeover',
    'Brushing Sensitivity & Gum Evaluation',
    'Ultrasonic Scaling & Cleaning',
    'Wisdom Tooth Extraction',
    'Crowns & Bridges (Zirconia)',
    'Pediatric Dental Care',
  ]

  const timeSlots = [
    // Morning shift
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    // Evening shift
    '05:30 PM',
    '06:30 PM',
    '07:30 PM',
    '08:00 PM',
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return
    const id = 'SDC-' + Math.floor(100000 + Math.random() * 900000)
    setBookingId(id)
    setSubmitted(true)
  }

  const resetForm = () => {
    setSubmitted(false)
    setFormData({
      name: '',
      phone: '',
      treatment: 'General Dental Consultation',
      date: new Date().toISOString().split('T')[0],
      slot: '11:00 AM',
      notes: '',
    })
    onClose()
  }

  const generateWhatsAppMessage = () => {
    const text = encodeURIComponent(
      `Hello Dr. Shrikant Sharma,\n\nI have requested an appointment at Shree Dental Care.\n` +
      `Booking Ref: ${bookingId}\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Treatment: ${formData.treatment}\n` +
      `Preferred Date: ${formData.date}\n` +
      `Preferred Slot: ${formData.slot}\n` +
      (formData.notes ? `Note: ${formData.notes}\n` : '') +
      `\nPlease confirm my slot. Thank you!`
    )
    return `https://wa.me/918107879056?text=${text}`
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden max-h-[92vh] flex flex-col animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-sky-100" />
            <div>
              <h3 className="text-base sm:text-lg font-bold leading-tight">
                Schedule Priority Appointment
              </h3>
              <p className="text-xs text-sky-100">
                Dr. Shrikant Sharma • Shree Dental Care, Jaipur
              </p>
            </div>
          </div>
          <button
            onClick={resetForm}
            className="p-1.5 rounded-full hover:bg-white/20 transition-colors cursor-pointer text-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            /* Success confirmation screen */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Appointment Request Received
                </span>
                <h4 className="text-xl font-extrabold text-slate-900 mt-2">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Your reference ID is <strong className="text-sky-700 font-mono text-sm">{bookingId}</strong>
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Treatment:</span>
                  <span className="font-bold text-slate-800">{formData.treatment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Scheduled Date:</span>
                  <span className="font-bold text-slate-800">{formData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Preferred Slot:</span>
                  <span className="font-bold text-slate-800">{formData.slot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Clinic Location:</span>
                  <span className="font-bold text-slate-800">Khirni Phatak Road, Jhotwara</span>
                </div>
              </div>

              <p className="text-xs text-slate-600">
                Dr. Shrikant's clinic coordinator will verify your slot via phone or WhatsApp shortly.
              </p>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Confirmation to Clinic WhatsApp</span>
                </a>

                <button
                  onClick={resetForm}
                  className="w-full py-2.5 text-xs text-slate-600 hover:text-slate-900 font-semibold cursor-pointer"
                >
                  Close & Back to Website
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Patient Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile Number (for SMS & WhatsApp Confirmation) *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98290XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Selected Dental Care / Procedure
                </label>
                <select
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100 bg-white transition-all"
                >
                  {treatments.map((t, idx) => (
                    <option key={idx} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Slot
                  </label>
                  <select
                    value={formData.slot}
                    onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-sky-500 bg-white"
                  >
                    {timeSlots.map((slot, idx) => (
                      <option key={idx} value={slot}>
                        {slot} {slot.includes('AM') || slot === '01:00 PM' ? '(Morning)' : '(Evening)'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Describe Tooth or Gum Issue (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. bleeding while brushing, cold sensitivity, tooth alignment enquiry..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-sky-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-bold text-sm shadow-lg shadow-sky-600/25 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm Appointment Request</span>
              </button>

              <p className="text-[11px] text-center text-slate-400">
                🔒 Your privacy is respected. No spam, guaranteed zero consultation wait-time.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

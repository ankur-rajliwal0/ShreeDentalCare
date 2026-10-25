import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import BrushingQuiz from './components/BrushingQuiz'
import DoctorProfile from './components/DoctorProfile'
import SmileGallery from './components/SmileGallery'
import ClinicTour from './components/ClinicTour'
import CostEstimator from './components/CostEstimator'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import LocationContact from './components/LocationContact'
import Footer from './components/Footer'
import AppointmentModal from './components/AppointmentModal'
import FloatingActions from './components/FloatingActions'

export default function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false)
  const [selectedTreatment, setSelectedTreatment] = useState('General Dental Consultation')

  const handleOpenAppointment = (treatment = 'General Dental Consultation') => {
    setSelectedTreatment(treatment)
    setIsAppointmentOpen(true)
  }

  const handleCloseAppointment = () => {
    setIsAppointmentOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans selection:bg-sky-500 selection:text-white pb-14 sm:pb-0">
      {/* Top Navbar */}
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero onOpenAppointment={() => handleOpenAppointment()} />

        {/* Credibility & Stats Bar */}
        <Stats />

        {/* Specialized Dental Treatments */}
        <Services onOpenAppointment={handleOpenAppointment} />

        {/* Poster-inspired Interactive Health Test: Could You Be Brushing Too Hard? */}
        <BrushingQuiz onOpenAppointment={handleOpenAppointment} />

        {/* Meet the Specialist: Dr. Shrikant Sharma */}
        <DoctorProfile onOpenAppointment={handleOpenAppointment} />

        {/* Smile Transformation Gallery / Before & After */}
        <SmileGallery onOpenAppointment={handleOpenAppointment} />

        {/* Clinic Tour & Hospital-Grade Sterilization */}
        <ClinicTour />

        {/* Transparent Procedure Guide & Scheduling Expectations */}
        <CostEstimator onOpenAppointment={handleOpenAppointment} />

        {/* Verified Patient Reviews & Google 4.9 Star Rating */}
        <Testimonials />

        {/* FAQs */}
        <FAQ onOpenAppointment={handleOpenAppointment} />

        {/* Location, Directions & Contact Information */}
        <LocationContact onOpenAppointment={handleOpenAppointment} />
      </main>

      {/* Footer */}
      <Footer onOpenAppointment={() => handleOpenAppointment()} />

      {/* Floating Quick Action Buttons & Bottom Mobile Dock */}
      <FloatingActions onOpenAppointment={() => handleOpenAppointment()} />

      {/* Interactive Appointment Scheduling Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={handleCloseAppointment}
        initialTreatment={selectedTreatment}
      />
    </div>
  )
}

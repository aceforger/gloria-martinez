import { contactInfo, authorInfo } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#C04A8A]/4 rounded-full blur-[80px] animate-soft-glow"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-[#D8B26E]/4 rounded-full blur-[70px]"></div>
      </div>
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 border border-[#C04A8A]/30 text-[#C04A8A] px-4 py-2 mb-8 text-sm font-cinzel font-medium tracking-wider rounded-full">
          Contact
        </div>
        <h2 className="text-4xl md:text-5xl font-cormorant italic text-[#6B2D5C] mb-6 animate-fade-up">Get in Touch</h2>
        <p className="text-[#2F2F2F]/40 text-lg mb-12 max-w-md mx-auto font-inter animate-fade-up-delayed">
          Reach out to {authorInfo.firstName} directly
        </p>
        <div className="bg-white p-10 shadow-2xl border border-[#C04A8A]/10 rounded-2xl animate-fade-up-delayed-2 hover-lift">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#C04A8A] to-[#6B2D5C] rounded-full flex items-center justify-center animate-soft-glow">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center gap-3 px-10 py-5 bg-[#C04A8A] text-white font-cinzel tracking-wider font-semibold hover:bg-[#6B2D5C] transition-all text-lg w-full justify-center rounded-full shadow-[0_0_20px_rgba(192,74,138,0.15)]">
            {contactInfo.email}
          </a>
        </div>
      </div>
    </section>
  )
}
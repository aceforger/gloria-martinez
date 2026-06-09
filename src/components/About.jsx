import { authorInfo } from '../data'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#C04A8A]/4 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-[#D8B26E]/4 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-[#C04A8A]/30 text-[#C04A8A] px-4 py-2 mb-4 text-sm font-cinzel font-medium tracking-wider rounded-full">
            The Author
          </div>
          <h2 className="text-4xl md:text-5xl font-cormorant italic text-[#6B2D5C] mb-4">{authorInfo.name}</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#C04A8A] to-[#D8B26E] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <div className="md:col-span-2">
            <div className="bg-gradient-to-br from-[#FAF7F2] to-[#F5F0E8] rounded-2xl overflow-hidden border border-[#C04A8A]/10 shadow-lg animate-fade-up">
              <div className="aspect-[3/4] overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-cormorant italic font-bold text-[#6B2D5C] mb-4">GCM</div>
                  <div className="w-10 h-[2px] bg-[#D8B26E] mx-auto mb-3"></div>
                  <p className="text-sm font-cinzel tracking-widest text-[#6B2D5C]/40 uppercase">{authorInfo.name}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {authorInfo.achievements.map((achievement, i) => (
                <div key={i} className="bg-[#FAF7F2] p-4 rounded-xl border border-[#D8B26E]/10 hover-lift flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#D8B26E] rounded-full flex-shrink-0"></div>
                  <p className="text-[#2F2F2F]/60 text-sm font-inter">{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <div className="bg-[#FAF7F2]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#C04A8A]/8 animate-fade-up hover-lift">
              <p className="text-[#2F2F2F]/60 leading-relaxed font-inter">{authorInfo.bio}</p>
            </div>
            <div className="bg-[#FAF7F2]/80 backdrop-blur-sm p-8 rounded-2xl border-l-2 border-[#C04A8A] animate-fade-up-delayed hover-lift">
              <p className="text-[#2F2F2F]/50 leading-relaxed font-inter">{authorInfo.bio2}</p>
            </div>
            <div className="bg-[#FAF7F2]/80 backdrop-blur-sm p-8 rounded-2xl animate-fade-up-delayed-2 hover-lift">
              <p className="text-[#2F2F2F]/40 leading-relaxed font-inter italic">{authorInfo.bio3}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {authorInfo.roles.map((role, i) => (
                <span key={i} className="px-5 py-2.5 bg-white text-[#6B2D5C] text-sm font-cinzel tracking-wide border border-[#C04A8A]/15 hover:border-[#C04A8A]/40 hover:text-[#C04A8A] hover-lift transition-all rounded-full">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
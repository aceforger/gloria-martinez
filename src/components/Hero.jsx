import { authorInfo } from '../data'

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg.png')" }}
      ></div>
      
      {/* Soft plum-to-rose gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6B2D5C]/5 via-[#FAF7F2]/40 to-[#C04A8A]/5"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#C04A8A]/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#D8B26E]/5 rounded-full blur-[80px]"></div>

      {/* Sunlight rays from top right corner */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Sun source glow */}
        <div 
          className="absolute top-2 right-10 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,215,0,0.6) 0%, rgba(255,200,0,0.4) 15%, rgba(255,180,0,0.2) 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            filter: 'blur(15px)',
            animation: 'sunGlow 3s ease-in-out infinite'
          }}
        ></div>

        {/* Intense sun core */}
        <div 
          className="absolute top-15 right-40 w-[200px] h-[200px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,215,0,0.6) 30%, rgba(255,180,0,0.2) 60%, transparent 100%)',
            filter: 'blur(8px)',
            animation: 'sunGlow 2s ease-in-out infinite'
          }}
        ></div>

        {/* Main long rays */}
        <div className="absolute -top-20 -right-20 w-[800px] h-[800px]">
          {[...Array(12)].map((_, i) => (
            <div
              key={`ray-main-${i}`}
              className="absolute origin-top-right"
              style={{
                top: '0',
                right: '0',
                width: '800px',
                height: `${2 + Math.random() * 4}px`,
                background: `linear-gradient(90deg, rgba(255,215,0,${0.3 - i * 0.02}) 0%, rgba(255,200,0,${0.15 - i * 0.01}) 30%, rgba(255,255,255,${0.08 - i * 0.005}) 60%, transparent 100%)`,
                transform: `rotate(${-20 + i * 3.5}deg)`,
                filter: 'blur(1.5px)',
                animation: `sunRay ${3 + i * 0.6}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
                boxShadow: i < 4 ? '0 0 15px rgba(255,215,0,0.2)' : 'none'
              }}
            ></div>
          ))}
        </div>
        
        {/* Secondary medium rays */}
        <div className="absolute -top-10 -right-10 w-[500px] h-[500px]">
          {[...Array(8)].map((_, i) => (
            <div
              key={`ray-medium-${i}`}
              className="absolute origin-top-right"
              style={{
                top: '0',
                right: '0',
                width: '500px',
                height: `${1.5 + Math.random() * 2}px`,
                background: `linear-gradient(90deg, rgba(255,255,255,${0.25 - i * 0.025}) 0%, rgba(255,215,0,${0.12 - i * 0.012}) 40%, transparent 100%)`,
                transform: `rotate(${-12 + i * 3.2}deg)`,
                filter: 'blur(1px)',
                animation: `sunRay ${4 + i * 0.8}s ease-in-out infinite`,
                animationDelay: `${i * 0.4 + 0.1}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Fine light rays */}
        <div className="absolute -top-5 -right-5 w-[300px] h-[300px]">
          {[...Array(15)].map((_, i) => (
            <div
              key={`ray-fine-${i}`}
              className="absolute origin-top-right"
              style={{
                top: '0',
                right: '0',
                width: '300px',
                height: '1px',
                background: `linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,${0.15 - i * 0.008}) 50%, transparent 100%)`,
                transform: `rotate(${-8 + i * 1.2}deg)`,
                animation: `sunRayFine ${2 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Light dust particles near sun */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`sun-dust-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              top: `${-5 + Math.random() * 20}%`,
              right: `${-5 + Math.random() * 20}%`,
              backgroundColor: '#FFD700',
              opacity: Math.random() * 0.6 + 0.2,
              animation: `floatUp ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              boxShadow: '0 0 4px rgba(255,215,0,0.8)'
            }}
          ></div>
        ))}
      </div>

      {/* Floating light particles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: Math.random() > 0.5 ? '#D8B26E' : '#C04A8A',
            opacity: Math.random() * 0.4 + 0.1,
            animation: `floatUp ${5 + Math.random() * 8}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 6}s`,
            boxShadow: Math.random() > 0.5 ? '0 0 6px rgba(216,178,110,0.3)' : '0 0 6px rgba(192,74,138,0.3)'
          }}
        ></div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 border border-[#C04A8A]/30 text-[#C04A8A] px-4 py-2 mb-8 text-sm font-cinzel font-medium tracking-wider rounded-full bg-white/50 backdrop-blur-sm animate-fade-up">
              <span className="w-2 h-2 bg-[#D8B26E] rounded-full"></span>
              Poet & Author
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-cormorant italic text-[#6B2D5C] mb-6 leading-tight animate-fade-up">
              {authorInfo.name}
            </h1>
            <div className="w-24 h-[3px] bg-gradient-to-r from-[#C04A8A] to-[#D8B26E] mb-8 mx-auto md:mx-0 rounded-full"></div>
            <p className="text-xl text-[#6B2D5C]/70 mb-6 font-cinzel tracking-wide animate-fade-up-delayed">
              Words from the <span className="text-[#C04A8A] font-bold">heart</span>, poetry for the <span className="text-[#D8B26E] font-bold">soul</span>
            </p>
            <p className="text-[#2F2F2F]/50 leading-relaxed max-w-lg mx-auto md:mx-0 font-cormorant italic text-lg border-l-2 border-[#C04A8A]/40 pl-6 py-2 animate-fade-up-delayed">
              "If at least one of its pages turns out to be of your preference, it would not have been in vain to make it public."
            </p>
            <div className="flex flex-wrap gap-3 my-8 justify-center md:justify-start animate-fade-up-delayed-2">
              {authorInfo.roles.map((role, i) => (
                <span key={i} className="px-4 py-2 bg-white/70 backdrop-blur-sm text-[#6B2D5C] text-sm font-cinzel tracking-wide border border-[#C04A8A]/15 hover:border-[#C04A8A]/40 hover:bg-[#C04A8A]/3 hover-lift transition-all rounded-full">
                  {role}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-up-delayed-2">
              <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="px-8 py-4 bg-[#C04A8A] text-white font-cinzel font-semibold tracking-wider hover:bg-[#6B2D5C] transition-all text-center hover-lift rounded-full shadow-[0_0_25px_rgba(192,74,138,0.2)]">
                About the Author
              </a>
              <a href="#books" onClick={(e) => handleScroll(e, '#books')} className="px-8 py-4 border-2 border-[#D8B26E]/50 text-[#6B2D5C] font-cinzel font-semibold tracking-wider hover:border-[#C04A8A] hover:text-[#C04A8A] transition-all text-center hover-lift rounded-full">
                View Books
              </a>
            </div>
          </div>

          <div className="relative mx-auto max-w-sm animate-fade-up">
            <div className="relative">
              <div className="absolute -inset-8 bg-[#C04A8A]/8 rounded-full blur-3xl animate-soft-glow"></div>
              <div className="absolute -inset-4 bg-[#D8B26E]/5 rounded-full blur-2xl"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm shadow-2xl border border-[#C04A8A]/15 overflow-hidden hover-lift">
                <div className="aspect-[3/4] overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#FAF7F2] to-[#F5F0E8]">
                  <div className="text-center p-8">
                    <div className="text-7xl font-cormorant italic font-bold text-[#6B2D5C] mb-4">GCM</div>
                    <div className="w-12 h-[2px] bg-[#D8B26E] mx-auto mb-4"></div>
                    <p className="text-sm font-cinzel tracking-widest text-[#6B2D5C]/50 uppercase">{authorInfo.name}</p>
                    <div className="flex justify-center gap-2 mt-4">
                      <span className="w-1.5 h-1.5 bg-[#C04A8A] rounded-full"></span>
                      <span className="w-1.5 h-1.5 bg-[#D8B26E] rounded-full"></span>
                      <span className="w-1.5 h-1.5 bg-[#6B2D5C] rounded-full"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
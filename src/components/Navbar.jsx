import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { navLinks } from '../data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      if (isHomePage) {
        const sections = navLinks.map(link => link.href.replace('#', ''))
        const scrollPosition = window.scrollY + 100
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    if (isHomePage) {
      const targetId = href.replace('#', '')
      const element = document.getElementById(targetId)
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/' + href)
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-black/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
            <span className="font-cormorant text-3xl md:text-4xl italic font-bold text-black group-hover:text-gray-800 transition-colors">
              Gloria C. Martinez
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-5 py-2 text-lg font-cinzel font-semibold transition-all duration-300 tracking-wide ${
                  activeSection === link.href.replace('#', '') && isHomePage
                    ? 'text-black'
                    : 'text-black/60 hover:text-black'
                }`}
              >
                {link.name}
                {activeSection === link.href.replace('#', '') && isHomePage && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black rounded-full"></span>
                )}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-12 h-12 flex items-center justify-center text-black hover:text-gray-700 transition-colors"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'top-3 rotate-45' : 'top-0'}`}></span>
              <span className={`absolute left-0 top-3 w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'top-3 -rotate-45' : 'top-6'}`}></span>
            </div>
          </button>
        </div>

        <div className={`md:hidden transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white/98 border border-black/10 rounded-2xl shadow-xl mt-3 p-5 backdrop-blur-xl">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-5 py-4 font-cinzel font-semibold text-lg transition-all duration-300 rounded-xl tracking-wide ${
                    activeSection === link.href.replace('#', '') && isHomePage
                      ? 'text-black bg-black/5'
                      : 'text-black/60 hover:text-black hover:bg-black/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
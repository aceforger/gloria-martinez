import { useNavigate } from 'react-router-dom'
import { authorInfo, navLinks } from '../data'

export default function Footer() {
  const navigate = useNavigate()

  const handleScroll = (e, href) => {
    e.preventDefault()
    navigate('/' + href)
  }

  return (
    <footer className="bg-[#6B2D5C] text-white">
      <div className="bg-[#5A2548]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-cinzel tracking-wider text-[#D8B26E] mb-1">Ready to Publish?</h3>
              <p className="text-white/50 text-sm font-inter">Access the go-live portal for your book</p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D8B26E] text-[#6B2D5C] text-xl font-cinzel tracking-wider font-bold py-5 px-12 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-[#D8B26E]/30"
              >
                Launch & Go-Live Portal
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <span className="font-cormorant italic text-2xl text-[#D8B26E]">{authorInfo.name}</span>
            <p className="text-white/50 text-sm font-inter leading-relaxed mt-2">Poet & Author</p>
          </div>
          <div>
            <h4 className="text-sm font-cinzel tracking-wider mb-4 text-[#D8B26E] uppercase">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-white/40 hover:text-white transition-colors text-sm font-inter">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-cinzel tracking-wider mb-4 text-[#D8B26E] uppercase">Contact</h4>
            <a href={`mailto:${authorInfo.email}`} className="text-white/40 hover:text-white transition-colors text-sm font-inter block">{authorInfo.email}</a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/25 text-sm font-inter">
            &copy; {new Date().getFullYear()} {authorInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
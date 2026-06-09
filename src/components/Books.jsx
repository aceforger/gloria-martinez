import { useState } from 'react'
import { book } from '../data'

export default function Books() {
  const [selectedBook, setSelectedBook] = useState(null)
  const [flippedCards, setFlippedCards] = useState({})

  const toggleFlip = (e, bookId) => {
    e.stopPropagation()
    setFlippedCards(prev => ({
      ...prev,
      [bookId]: !prev[bookId]
    }))
  }

  return (
    <section id="books" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C04A8A]/4 rounded-full blur-[120px] animate-soft-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-[#C04A8A]/30 text-[#C04A8A] px-4 py-2 mb-4 text-sm font-cinzel font-medium tracking-wider rounded-full">
            Books
          </div>
          <h2 className="text-4xl md:text-5xl font-cormorant italic text-[#6B2D5C] mb-4">My Works</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#C04A8A] to-[#D8B26E] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {book.map((bookItem, i) => (
            <div key={bookItem.id} className="group animate-fade-up" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="bg-white border border-[#C04A8A]/8 hover:border-[#C04A8A]/25 transition-all shadow-md hover:shadow-lg hover-lift h-full flex flex-col rounded-2xl overflow-hidden">
                
                {/* Book Cover with Flip */}
                <div className="bg-gradient-to-br from-[#FAF7F2] to-[#F5F0E8] overflow-hidden relative flex items-center justify-center p-4">
                  <div className="absolute top-3 left-3 z-20 px-2.5 py-1 bg-[#C04A8A] text-white text-xs font-cinzel tracking-wider rounded-full">
                    {bookItem.statusText}
                  </div>
                  
                  {/* Flip Button - only show if there's a back cover */}
                  {bookItem.coverBack && (
                    <button
                      onClick={(e) => toggleFlip(e, bookItem.id)}
                      className="absolute top-3 right-3 z-20 px-2.5 py-1 bg-[#D8B26E] text-white text-xs font-cinzel tracking-wider rounded-full hover:bg-[#C04A8A] transition-colors"
                    >
                      {flippedCards[bookItem.id] ? 'Front' : 'Back'}
                    </button>
                  )}

                  {/* Book Cover with flip animation */}
                  <div className="relative w-40 h-52" style={{ perspective: '1000px' }}>
                    <div 
                      className="relative w-full h-full transition-transform duration-700"
                      style={{ 
                        transformStyle: 'preserve-3d',
                        transform: flippedCards[bookItem.id] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                      }}
                    >
                      {/* Front Cover */}
                      <div 
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <img 
                          src={bookItem.coverImage} 
                          alt={`${bookItem.title} - Front Cover`} 
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.parentElement.innerHTML = `<div class="text-center"><div class="text-4xl font-cormorant italic text-[#6B2D5C]">${bookItem.title.split(' ').map(w => w[0]).join('')}</div></div>`
                          }}
                        />
                      </div>
                      
                      {/* Back Cover */}
                      {bookItem.coverBack && (
                        <div 
                          className="absolute inset-0 flex items-center justify-center"
                          style={{ 
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)'
                          }}
                        >
                          <img 
                            src={bookItem.coverBack} 
                            alt={`${bookItem.title} - Back Cover`} 
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none'
                              e.target.parentElement.innerHTML = `<div class="text-center"><div class="text-4xl font-cormorant italic text-[#6B2D5C]">${bookItem.title.split(' ').map(w => w[0]).join('')}</div></div>`
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-4 flex-1 flex flex-col">
                  {bookItem.subtitle && (
                    <p className="text-[#C04A8A] text-[10px] font-cinzel tracking-wider uppercase mb-1.5">{bookItem.subtitle}</p>
                  )}
                  <h3 className="text-lg font-cormorant italic text-[#6B2D5C] mb-1.5 group-hover:text-[#C04A8A] transition-colors">
                    {bookItem.title}
                  </h3>
                  <p className="text-[#2F2F2F]/40 text-xs font-inter leading-relaxed mb-3 flex-1 line-clamp-3">
                    {bookItem.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {bookItem.themes.slice(0, 2).map((theme, i) => (
                      <span key={i} className="px-2 py-0.5 bg-[#FAF7F2] text-[#6B2D5C] text-[9px] font-cinzel tracking-wide rounded-full border border-[#D8B26E]/10">
                        {theme}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => setSelectedBook(bookItem)} 
                    className="w-full py-2 border-2 border-[#D8B26E]/30 text-[#6B2D5C] font-cinzel tracking-wider text-xs rounded-full hover:bg-[#D8B26E]/5 hover:border-[#C04A8A]/50 transition-all"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book Detail Modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#FAF7F2]/90 backdrop-blur-sm" onClick={() => setSelectedBook(null)}>
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#C04A8A]/15 rounded-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-[#C04A8A]/8 sticky top-0 bg-white z-10">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#C04A8A] text-white text-xs font-cinzel tracking-wider rounded-full">
                  {selectedBook.statusText}
                </span>
              </div>
              <button onClick={() => setSelectedBook(null)} className="text-[#2F2F2F]/40 hover:text-[#C04A8A] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-10">
              <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-2 space-y-4">
                  {/* Front Cover */}
                  <div className="bg-[#FAF7F2] rounded-xl p-4 flex items-center justify-center">
                    <img 
                      src={selectedBook.coverImage} 
                      alt={`${selectedBook.title} - Front Cover`} 
                      className="w-full h-auto max-h-[300px] object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.innerHTML = `<div class="text-center p-8"><div class="text-5xl font-cormorant italic text-[#6B2D5C]">${selectedBook.title.split(' ').map(w => w[0]).join('')}</div></div>`
                      }}
                    />
                  </div>
                  
                  {/* Back Cover - show if available */}
                  {selectedBook.coverBack && (
                    <div className="bg-[#FAF7F2] rounded-xl p-4 flex items-center justify-center">
                      <img 
                        src={selectedBook.coverBack} 
                        alt={`${selectedBook.title} - Back Cover`} 
                        className="w-full h-auto max-h-[300px] object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                    </div>
                  )}
                </div>
                <div className="md:col-span-3 flex flex-col justify-center space-y-6">
                  <div>
                    {selectedBook.subtitle && (
                      <p className="text-[#C04A8A] text-xs font-cinzel tracking-wider uppercase mb-2">{selectedBook.subtitle}</p>
                    )}
                    <h2 className="text-3xl md:text-4xl font-cormorant italic text-[#6B2D5C] mb-2">{selectedBook.title}</h2>
                    <div className="w-16 h-[3px] bg-gradient-to-r from-[#C04A8A] to-[#D8B26E] mt-4 rounded-full"></div>
                  </div>
                  <p className="text-[#2F2F2F]/60 leading-relaxed font-inter">{selectedBook.description}</p>
                  {selectedBook.description2 && (
                    <p className="text-[#2F2F2F]/40 leading-relaxed font-inter text-sm">{selectedBook.description2}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {selectedBook.themes.map((theme, i) => (
                      <span key={i} className="px-3 py-1 bg-[#FAF7F2] text-[#6B2D5C] text-xs font-cinzel tracking-wide rounded-full border border-[#D8B26E]/10">
                        {theme}
                      </span>
                    ))}
                  </div>
                  {selectedBook.status === 'published' && selectedBook.purchaseLinks && (
                    <div className="pt-4 space-y-3">
                      <p className="text-[#C04A8A] text-sm font-cinzel tracking-wider">Available at:</p>
                      <div className="flex flex-wrap gap-3">
                        {selectedBook.purchaseLinks.map((link, i) => (
                          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#C04A8A] text-white font-cinzel tracking-wider text-sm rounded-full hover:bg-[#6B2D5C] transition-all hover-lift">
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
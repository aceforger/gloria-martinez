import { reviews, book } from '../data'

export default function Reviews() {
  const getBookTitle = (bookId) => {
    const found = book.find(b => b.id === bookId)
    return found ? found.title : ''
  }

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#C04A8A]/4 rounded-full blur-[100px] animate-soft-glow"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 border border-[#C04A8A]/30 text-[#C04A8A] px-4 py-2 mb-4 text-sm font-cinzel font-medium tracking-wider rounded-full">
            Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-cormorant italic text-[#6B2D5C] mb-4">What Readers Say</h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#C04A8A] to-[#D8B26E] mx-auto mt-6 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <div key={review.id} className="animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="bg-[#FAF7F2]/80 backdrop-blur-sm border border-[#C04A8A]/8 hover:border-[#C04A8A]/20 transition-all hover-lift h-full flex flex-col p-6 rounded-2xl">
                <p className="text-[#C04A8A] text-[10px] font-cinzel tracking-wider uppercase mb-2">{getBookTitle(review.bookId)}</p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-[#D8B26E]' : 'text-[#D8B26E]/15'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <h3 className="text-[#6B2D5C] font-cinzel tracking-wide text-sm mb-2">{review.title}</h3>
                <p className="text-[#2F2F2F]/40 text-sm font-inter leading-relaxed mb-4 flex-1 line-clamp-4">"{review.review}"</p>
                <div className="border-t border-[#C04A8A]/8 pt-3 mt-auto">
                  <p className="text-[#6B2D5C] text-sm font-cinzel tracking-wide">{review.reviewer}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-[#2F2F2F]/20 text-xs font-inter">{review.date}</p>
                    {review.verified && <span className="text-[#C04A8A] text-xs font-cinzel tracking-wider">Verified Purchase</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import { useState, useRef, useEffect } from 'react';
import type { GalleryImage } from '../data/projects';
import Lightbox from './Lightbox';

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setRevealedCards((prev) => [...new Set([...prev, index])]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = galleryRef.current?.querySelectorAll('.gallery-card');
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [images]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div ref={galleryRef}>
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E5E5E5] to-transparent" />
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#1E40AF]" />
          <span className="text-xs font-bold text-[#1E40AF] uppercase tracking-[0.12em]">Gallery</span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#E5E5E5] to-transparent" />
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            data-index={index}
            className={`gallery-card group relative bg-white rounded-2xl overflow-hidden border border-[#E5E5E5] cursor-pointer transition-all duration-700 ${
              revealedCards.includes(index)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            } ${index === 0 ? 'md:col-span-2' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onClick={() => openLightbox(index)}
          >
            {/* Image */}
            <div className={`relative overflow-hidden ${index === 0 ? 'h-64 md:h-80' : 'h-52'}`}>
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Hover Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-500">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </div>

              {/* Counter Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {index + 1} / {images.length}
              </div>
            </div>

            {/* Card Info */}
            <div className="p-5">
              <h4 className="text-base font-bold text-[#0A0A0A] mb-1.5 group-hover:text-[#1E40AF] transition-colors duration-300">
                {image.title}
              </h4>
              <p className="text-sm text-[#525252] leading-relaxed line-clamp-2">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        images={images}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentIndex}
      />
    </div>
  );
}

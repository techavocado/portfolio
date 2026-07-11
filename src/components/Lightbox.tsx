import { useEffect, useCallback, useState } from 'react';
import type { GalleryImage } from '../data/projects';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, currentIndex, isOpen, onClose, onNavigate }: LightboxProps) {
  const [zoomed, setZoomed] = useState(false);
  const [direction, setDirection] = useState(0);
  const [animating, setAnimating] = useState(false);

  const currentImage = images[currentIndex];

  const navigate = useCallback((newIndex: number) => {
    if (animating || newIndex === currentIndex) return;
    setDirection(newIndex > currentIndex ? 1 : -1);
    setAnimating(true);
    setZoomed(false);
    setTimeout(() => {
      onNavigate(newIndex);
      setTimeout(() => setAnimating(false), 50);
    }, 300);
  }, [animating, currentIndex, onNavigate]);

  const goNext = useCallback(() => {
    if (currentIndex < images.length - 1) navigate(currentIndex + 1);
  }, [currentIndex, images.length, navigate]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) navigate(currentIndex - 1);
  }, [currentIndex, navigate]);

  useEffect(() => {
    if (!isOpen) {
      setZoomed(false);
      setDirection(0);
      setAnimating(false);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowRight':
          goNext();
          break;
        case 'ArrowLeft':
          goPrev();
          break;
        case 'z':
        case 'Z':
          setZoomed(prev => !prev);
          break;
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, goNext, goPrev]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={onClose}
      style={{ animation: 'lightboxFadeIn 0.3s ease forwards' }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/95 backdrop-blur-sm" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200 hover:scale-110"
        aria-label="Close lightbox"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Navigation - Previous */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200 hover:scale-110"
          aria-label="Previous image"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* Navigation - Next */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200 hover:scale-110"
          aria-label="Next image"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}

      {/* Main Content */}
      <div
        className="relative z-[1] flex flex-col lg:flex-row items-center gap-6 lg:gap-10 max-w-[95vw] max-h-[95vh] w-full lg:w-auto px-4 lg:px-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Container */}
        <div className="relative flex-shrink-0">
          {/* Counter Badge */}
          <div className="absolute -top-10 left-0 flex items-center gap-2">
            <span className="text-white/60 text-sm font-medium tabular-nums">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          {/* Image */}
          <div
            className="relative overflow-hidden rounded-lg cursor-zoom-in"
            onClick={() => setZoomed(!zoomed)}
            style={{
              maxWidth: 'min(85vw, 1200px)',
              maxHeight: 'min(65vh, 700px)',
            }}
          >
            <img
              src={currentImage.src}
              alt={currentImage.title}
              className="w-auto h-auto object-contain rounded-lg transition-all duration-500"
              style={{
                maxWidth: 'min(85vw, 1200px)',
                maxHeight: zoomed ? 'min(85vh, 900px)' : 'min(65vh, 700px)',
                transform: `scale(${zoomed ? 1.5 : 1})`,
                cursor: zoomed ? 'zoom-out' : 'zoom-in',
                animation: animating
                  ? direction > 0
                    ? 'slideInRight 0.3s ease forwards'
                    : 'slideInLeft 0.3s ease forwards'
                  : 'none',
              }}
            />
          </div>

          {/* Zoom hint */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/40 text-xs">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            <span>Click to zoom • Z key</span>
          </div>
        </div>

        {/* Info Panel */}
        <div
          className="flex flex-col gap-4 max-w-sm text-left"
          style={{
            animation: animating ? 'fadeSlideIn 0.4s ease forwards' : 'none',
          }}
        >
          <div>
            <h3 className="text-white text-xl font-bold mb-2">{currentImage.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{currentImage.description}</p>
          </div>

          <div className="border-t border-white/10 pt-4">
            <h4 className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">Key Features</h4>
            <ul className="space-y-2">
              {currentImage.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-white/80 text-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2.5" className="mt-0.5 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => navigate(i)}
                className={`flex-shrink-0 w-14 h-10 rounded overflow-hidden transition-all duration-200 ${
                  i === currentIndex
                    ? 'ring-2 ring-blue-500 ring-offset-1 ring-offset-black'
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

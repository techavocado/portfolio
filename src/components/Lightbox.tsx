import { useEffect, useCallback, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { GalleryImage } from '../data/projects';

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, currentIndex, isOpen, onClose, onNavigate }: LightboxProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  
  // Refs for tracking interactions
  const dragStart = useRef({ x: 0, y: 0 });
  const lastPosition = useRef({ x: 0, y: 0 });
  const initialDistance = useRef<number | null>(null);
  const initialScale = useRef(1);
  const touchStartPos = useRef({ x: 0, y: 0 });

  const currentImage = images[currentIndex];

  const resetZoom = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    lastPosition.current = { x: 0, y: 0 };
  }, []);

  const navigate = useCallback((newIndex: number) => {
    if (newIndex === currentIndex) return;
    resetZoom();
    onNavigate(newIndex);
  }, [currentIndex, onNavigate, resetZoom]);

  const goNext = useCallback(() => {
    if (currentIndex < images.length - 1) navigate(currentIndex + 1);
  }, [currentIndex, images.length, navigate]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) navigate(currentIndex - 1);
  }, [currentIndex, navigate]);

  useEffect(() => {
    if (!isOpen) {
      resetZoom();
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
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, goNext, goPrev, resetZoom]);

  // Wheel event for zooming
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomSensitivity = 0.001;
    const delta = -e.deltaY * zoomSensitivity;
    let newScale = scale * Math.exp(delta);
    
    // Min max scale constraints
    newScale = Math.max(1, Math.min(newScale, 5));
    
    if (newScale === 1) {
      setPosition({ x: 0, y: 0 });
      lastPosition.current = { x: 0, y: 0 };
    }
    
    setScale(newScale);
  };

  // Pointer events for dragging (Mouse & Touch)
  const handlePointerDown = (e: React.PointerEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStart.current.x;
    const deltaY = e.clientY - dragStart.current.y;
    
    setPosition({
      x: lastPosition.current.x + deltaX,
      y: lastPosition.current.y + deltaY
    });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    lastPosition.current = { ...position };
  };

  // Touch events for Pinch Zoom and Swipe
  const getDistance = (touches: React.TouchList) => {
    const t1 = touches[0];
    const t2 = touches[1];
    return Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      initialDistance.current = getDistance(e.touches);
      initialScale.current = scale;
    } else if (e.touches.length === 1 && scale === 1) {
      touchStartPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialDistance.current !== null) {
      // Pinch zoom
      const currentDistance = getDistance(e.touches);
      const zoomFactor = currentDistance / initialDistance.current;
      let newScale = initialScale.current * zoomFactor;
      newScale = Math.max(1, Math.min(newScale, 5));
      
      if (newScale === 1) {
        setPosition({ x: 0, y: 0 });
        lastPosition.current = { x: 0, y: 0 };
      }
      setScale(newScale);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    initialDistance.current = null;
    
    // Swipe logic if not zoomed
    if (e.changedTouches.length === 1 && scale === 1) {
      const touchEndPos = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
      const deltaX = touchEndPos.x - touchStartPos.current.x;
      const deltaY = touchEndPos.y - touchStartPos.current.y;
      
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) goPrev();
        else goNext();
      }
    }
  };

  const handleDoubleClick = () => {
    if (scale > 1) {
      resetZoom();
    } else {
      setScale(2);
    }
  };

  if (!isOpen || !currentImage) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-[#0F0F0F] flex flex-col"
      onClick={onClose}
    >
      {/* Top Header - Dedicated Area */}
      <div className="flex-none h-16 px-4 md:px-8 flex justify-between items-center border-b border-white/10" onClick={(e) => e.stopPropagation()}>
        <span className="text-white/60 text-sm font-medium tabular-nums">
          {currentIndex + 1} / {images.length}
        </span>
        
        <div className="flex gap-4">
          {scale > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); resetZoom(); }}
              className="flex items-center justify-center px-4 py-2 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20 transition-all duration-200"
            >
              Reset Zoom
            </button>
          )}
          <button
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
            aria-label="Close lightbox"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Content Area - Image Only */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden" onClick={(e) => e.stopPropagation()}>
        
        {/* Navigation - Previous (Floating on sides) */}
        {currentIndex > 0 && (
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 border border-white/10 text-white hover:bg-black/80 transition-all duration-200 hover:scale-110"
            aria-label="Previous image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        {/* Navigation - Next (Floating on sides) */}
        {currentIndex < images.length - 1 && (
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 border border-white/10 text-white hover:bg-black/80 transition-all duration-200 hover:scale-110"
            aria-label="Next image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}

        {/* Image Container */}
        <div 
          className="w-full h-full flex items-center justify-center p-4 md:p-8"
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onDoubleClick={handleDoubleClick}
        >
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="object-contain w-full h-full transition-transform duration-200 select-none shadow-2xl"
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
              transition: isDragging ? 'none' : 'transform 0.2s ease-out'
            }}
            draggable={false}
          />
        </div>
      </div>

      {/* Bottom Info Bar - Dedicated Area */}
      <div 
        className="flex-none bg-[#141414] border-t border-white/10 px-6 py-6 md:py-8 overflow-y-auto max-h-[30vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
          <h3 className="text-white text-xl md:text-2xl font-bold mb-3">{currentImage.title}</h3>
          <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl">{currentImage.description}</p>
          
          {currentImage.features && currentImage.features.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mt-5">
              {currentImage.features.map((feature, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-white/80 text-xs md:text-sm font-medium"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2.5" className="flex-shrink-0">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

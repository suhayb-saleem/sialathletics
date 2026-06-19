'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface ProductImageSliderProps {
  images?: string[];
  defaultImage: string;
  name: string;
  aspectRatioClass?: string;
  className?: string;
}

export function ProductImageSlider({
  images = [],
  defaultImage,
  name,
  aspectRatioClass = 'aspect-[16/10]',
  className = ''
}: ProductImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slideImages = images.length > 0 ? images : [defaultImage];

  const startPlaying = () => {
    if (slideImages.length <= 1) return;
    setIsPlaying(true);
  };

  const stopPlaying = () => {
    setIsPlaying(false);
    setCurrentIndex(0); // reset to first image
  };

  // Handle slideshow interval
  useEffect(() => {
    if (isPlaying && slideImages.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slideImages.length);
      }, 1500); // cycle every 1.5 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, slideImages.length]);

  // Handle intersection observer for mobile auto-play
  useEffect(() => {
    const checkMobile = () => typeof window !== 'undefined' && window.innerWidth < 768;
    
    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (checkMobile()) {
            if (entry.isIntersecting) {
              startPlaying();
            } else {
              stopPlaying();
            }
          }
        });
      },
      {
        threshold: 0.3, // start playing when 30% of the image is in view
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slideImages]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={startPlaying}
      onMouseLeave={stopPlaying}
      className={`relative ${aspectRatioClass} bg-[#0b0b0b] overflow-hidden ${className}`}
    >
      {/* Slide indicator progress bars at the top if playing */}
      {slideImages.length > 1 && isPlaying && (
        <div className="absolute top-3 left-0 w-full px-4 z-20 flex gap-1.5 pointer-events-none">
          {slideImages.map((_, idx) => (
            <div key={idx} className="h-[2px] bg-white/20 flex-1 relative overflow-hidden">
              {idx < currentIndex && (
                <div className="h-full bg-brand-red w-full" />
              )}
              {idx === currentIndex && (
                <div
                  key={currentIndex}
                  className="h-full bg-brand-red absolute left-0 top-0 animate-fill w-0"
                  style={{ animationDuration: '1500ms' }}
                />
              )}
              {idx > currentIndex && (
                <div className="h-full bg-brand-red w-0" />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Main Image Slider with smooth cross-fade */}
      <div className="absolute inset-0 p-4">
        <div className="relative w-full h-full">
          <Image
            src={slideImages[currentIndex]}
            alt={`${name} - View ${currentIndex + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain transition-all duration-500 ease-out group-hover:scale-105"
            priority={currentIndex === 0}
          />
        </div>
      </div>
    </div>
  );
}

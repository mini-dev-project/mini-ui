'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export interface CarouselImageType {
  children?: React.ReactNode;
  className?: string;
  image: string;
}

interface CarouselProps {
  images: CarouselImageType[];
  className?: string;
}

export default function MiniCarousel({ images, className }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index].image}
          src={images[index].image}
          alt={`Slide ${index}`}
          className="w-full object-cover"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          //   exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      {images[index].children && (
        <div className={`absolute inset-0 flex ${images[index].className}`}>
          {images[index].children}
        </div>
      )}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/60"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/60"
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? 'bg-white' : 'bg-white/40'
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
}

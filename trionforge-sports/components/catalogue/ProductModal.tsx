'use client';

import React, { useEffect } from 'react';
import { X, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/Button';
import { ProductImageSlider } from '@/components/ui/ProductImageSlider';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onInquire: (product: Product) => void;
}

export function ProductModal({ product, isOpen, onClose, onInquire }: ProductModalProps) {
  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Prevent background scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-body" role="dialog" aria-modal="true">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"
          />

          {/* Drawer Container */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10 sm:pl-16">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-screen max-w-4xl bg-brand-dark border-l border-white/8 relative flex flex-col justify-between"
            >
              {/* Header Close Button (Sticky/Floating) */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 text-[#9A9A9A] hover:text-white transition-colors duration-200 cursor-pointer p-2 bg-[#141414] border border-white/8 rounded-none"
                aria-label="Close details"
              >
                <X size={20} />
              </button>

              {/* Scrollable Content Grid */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-6">
                  {/* Left Column: Product Image Representation */}
                  <div className="relative aspect-square lg:aspect-auto lg:h-[450px] bg-[#0b0b0b] border border-white/8 flex items-center justify-center">
                    <div className="absolute inset-0 texture-steel pointer-events-none" />
                    <div className="absolute inset-0 texture-noise pointer-events-none" />
                    
                    {/* Product Image Slider */}
                    <ProductImageSlider
                      images={product.images}
                      defaultImage={product.imagePath}
                      name={product.name}
                      className="w-full h-full"
                      aspectRatioClass="aspect-square lg:aspect-auto lg:h-[450px]"
                    />
                  </div>

                  {/* Right Column: Info, description, specs table */}
                  <div className="space-y-6">
                    <div>
                      <div className="text-brand-red text-[11px] font-semibold uppercase tracking-[0.2em] mb-2">
                        {product.category === 'pickleball' ? 'Pickleball Paddle' : 'Padel Racket'}
                      </div>
                      <h2 className="font-display text-[38px] sm:text-[44px] text-white uppercase leading-none mb-2">
                        {product.name}
                      </h2>
                      <p className="text-[#9A9A9A] text-sm italic font-medium">
                        &ldquo;{product.tagline}&rdquo;
                      </p>
                    </div>

                    <p className="text-sm leading-relaxed text-[#9A9A9A]">
                      {product.description}
                    </p>

                    {/* Spec Table */}
                    <div className="space-y-3">
                      <h4 className="text-[11px] text-white uppercase tracking-widest font-semibold border-b border-white/8 pb-2">
                        Specifications
                      </h4>
                      <table className="w-full text-xs text-left">
                        <tbody>
                          {product.specs.map((spec, sIdx) => (
                            <tr key={sIdx} className="border-b border-white/5 last:border-b-0">
                              <td className="py-2.5 pr-4 text-[#9A9A9A] font-medium w-1/2">
                                {spec.label}
                              </td>
                              <td className="py-2.5 text-white font-semibold w-1/2">
                                {spec.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* MOQ details */}
                    {product.moq && (
                      <div className="bg-[#141414] border border-white/8 p-4 flex justify-between items-center">
                        <span className="text-xs text-[#9A9A9A] uppercase tracking-wider font-semibold">
                          Minimum Order Quantity
                        </span>
                        <span className="text-sm text-brand-red font-bold uppercase tracking-wider">
                          {product.moq}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Sticky Action Bar */}
              <div className="bg-[#101010] border-t border-white/8 p-6 flex flex-col sm:flex-row gap-4 items-center justify-between z-10 shrink-0">
                <div className="text-center sm:text-left">
                  <div className="text-[11px] text-[#9A9A9A] uppercase tracking-wider">Interested in private label?</div>
                  <div className="text-xs text-white mt-1">OEM / Custom mold options available for this model.</div>
                </div>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    onInquire(product);
                    onClose();
                  }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <Mail size={16} />
                  <span>Request Factory Quote</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

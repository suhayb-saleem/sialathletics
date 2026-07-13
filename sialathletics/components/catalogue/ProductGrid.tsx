'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Product } from '@/data/products';
import { ProductCard } from '@/components/catalogue/ProductCard';

interface ProductGridProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
  onInquire: (product: Product) => void;
  modalOpen?: boolean;
}

export function ProductGrid({ products, onViewDetails, onInquire, modalOpen = false }: ProductGridProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.06,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  if (products.length === 0) {
    return (
      <div className="py-24 text-center border border-[var(--white-08)] bg-[var(--bg-card)] z-10 relative">
        <p className="font-body text-[var(--white-60)] text-sm uppercase tracking-widest">
          No products found matching your filter selections.
        </p>
      </div>
    );
  }

  // Squeeze columns layout when side details drawer is active to prevent squishing
  const gridClasses = modalOpen
    ? "grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 z-10 relative transition-all duration-300"
    : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 z-10 relative transition-all duration-300";

  return (
    <motion.div
      key={products.map((p) => p.id).join('-')} // Force re-animation when category filters change
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={gridClasses}
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={cardVariants} className="h-full">
          <ProductCard
            product={product}
            onViewDetails={onViewDetails}
            onInquire={onInquire}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

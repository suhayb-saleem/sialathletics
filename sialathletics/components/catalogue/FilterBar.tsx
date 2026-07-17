'use client';

import React from 'react';
import { motion } from 'motion/react';

export type CategoryFilter = 'all' | 'pickleball' | 'padel' | 'accessories';
export type SortOption = 'featured' | 'name-asc' | 'moq-asc';

interface FilterBarProps {
  activeCategory: CategoryFilter;
  setActiveCategory: (category: CategoryFilter) => void;
  activeSort: SortOption;
  setActiveSort: (sort: SortOption) => void;
}

export function FilterBar({
  activeCategory,
  setActiveCategory,
  activeSort,
  setActiveSort,
}: FilterBarProps) {
  const tabs: { label: string; value: CategoryFilter }[] = [
    { label: 'All Products', value: 'all' },
    { label: 'Pickleball Paddles', value: 'pickleball' },
    { label: 'Padel Rackets', value: 'padel' },
    { label: 'Accessories', value: 'accessories' },
  ];

  return (
    <div className="sticky top-[64px] md:top-[72px] z-30 bg-[var(--hp-panel)] border-b border-[var(--hp-hair)] font-body select-none">
      <div className="container-custom flex items-center justify-between h-14">
        {/* Filter Tabs Container */}
        <div className="flex items-center gap-6 md:gap-8 overflow-x-auto whitespace-nowrap scrollbar-none h-full scroll-smooth mask-fade-edges">
          {tabs.map((tab) => {
            const active = activeCategory === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveCategory(tab.value)}
                className={`relative h-full text-[12px] md:text-[13px] font-bold uppercase tracking-widest transition-colors duration-200 cursor-pointer flex items-center justify-center ${
                  active ? 'text-white' : 'text-[var(--hp-ivory-60)] hover:text-white'
                }`}
              >
                {tab.label}
                {active && (
                  <motion.span
                    layoutId="filter-bar-underline"
                    style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '2px', background: 'var(--hp-red)' }}
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 pl-4 shrink-0">
          <label htmlFor="sort" className="text-xs text-[var(--hp-ivory-60)] font-medium">
            Sort:
          </label>
          <select
            id="sort"
            className="bg-transparent border-none text-[var(--hp-ivory-60)] hover:text-white text-xs font-bold uppercase tracking-wider focus:outline-none cursor-pointer h-8"
            value={activeSort}
            onChange={(e) => setActiveSort(e.target.value as SortOption)}
          >
            <option value="featured" className="bg-[var(--hp-panel)] text-white">
              Featured
            </option>
            <option value="name-asc" className="bg-[var(--hp-panel)] text-white">
              Name A-Z
            </option>
            <option value="moq-asc" className="bg-[var(--hp-panel)] text-white">
              Lowest MOQ
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

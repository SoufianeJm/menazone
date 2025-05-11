'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ChevronDownIcon } from '@/components/icons/ChevronDownIcon'; // Assuming global icon path
import { SearchIcon } from '@/components/icons/SearchIcon';       // Assuming global icon path
import { CITIES } from '@/features/protests/utils/constants';

type CityDropdownProps = {
    currentCity: string;
    onCityChange: (city: string) => void;
    className?: string; // Added className prop for flexibility
};

export function CityDropdown({ currentCity, onCityChange, className }: CityDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);
    const t = useTranslations(); // Default namespace, or specify if needed e.g., t = useTranslations('Protests')

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredCities = CITIES.filter(city =>
        city.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className={`relative ${className || ''}`} ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 text-base font-semibold text-white/60 hover:text-white/80 transition"
                aria-label={t('Protests.changeCity', { city: currentCity })} // Assuming 'Protests.changeCity' key
                aria-expanded={isOpen}
                aria-haspopup="listbox"
            >
                <span>{currentCity}</span>
                <ChevronDownIcon
                    width={16}
                    height={16}
                    className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-64 bg-dark-900 rounded-2xl shadow-lg border border-dark-50 overflow-hidden z-50"
                        role="listbox"
                        aria-labelledby="city-dropdown-button" // Assuming the button would have this id if needed
                    >
                        <div className="p-2">
                            <div className="relative">
                                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" aria-hidden="true" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={t('Protests.searchCity')} // Assuming 'Protests.searchCity' key
                                    className="w-full pl-9 pr-3 py-2 bg-dark-800 rounded-xl text-sm text-white/80 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                                    aria-label={t('Protests.searchCity')}
                                    autoFocus
                                />
                            </div>
                        </div>

                        <div className="max-h-60 overflow-y-auto">
                            {filteredCities.length > 0 ? (
                                filteredCities.map((city) => (
                                    <button
                                        key={city}
                                        onClick={() => {
                                            onCityChange(city);
                                            setIsOpen(false);
                                            setSearchQuery(''); // Reset search query on selection
                                        }}
                                        className={`w-full px-4 py-2 text-left text-sm hover:bg-zinc-800 transition
                                            ${city === currentCity ? 'text-white/90 bg-white/10 font-medium' : 'text-white/60'}`} // Added font-medium for selected
                                        role="option"
                                        aria-selected={city === currentCity}
                                    >
                                        {city}
                                    </button>
                                ))
                            ) : (
                                <div className="px-4 py-2 text-sm text-white/40">
                                    {t('Protests.noCitiesFound')} {/* Assuming 'Protests.noCitiesFound' key */}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
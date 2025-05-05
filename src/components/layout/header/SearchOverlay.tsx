'use client';

import { useEffect, useRef, useState, KeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Home, PageEdit, Calendar } from 'iconoir-react';
import Link from 'next/link';

type Props = {
    /**
     * Whether the overlay is currently open
     */
    isOpen: boolean;

    /**
     * Callback to close the overlay
     */
    onClose: () => void;
};

// Static list of searchable pages
const results = [
    { label: 'Home', href: '/', icon: <Home className="w-4" /> },
    { label: 'Snippets', href: '/snippets', icon: <PageEdit className="w-4" /> },
    { label: 'Protest schedules', href: '/protests', icon: <Calendar className="w-4" /> },
    { label: 'Schedule', href: '/schedule', icon: <Calendar className="w-4" /> },
];

/**
 * SearchOverlay
 *
 * Full-screen search component that filters content by keyword.
 * Controlled by the central overlay state from `Header.tsx`.
 *
 * Features:
 * - Animated mount/unmount using Framer Motion
 * - Keyboard navigation with ArrowUp/ArrowDown + Enter
 * - ESC key to close
 * - Realtime search filter with highlight
 */
export function SearchOverlay({ isOpen, onClose }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeIndex, setActiveIndex] = useState(-1);

    // Reset search state when overlay closes
    useEffect(() => {
        if (!isOpen) {
            setSearchQuery('');
            setActiveIndex(-1);
        }
    }, [isOpen]);

    // Autofocus input on open
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // ESC key closes overlay
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown as never);
        return () => document.removeEventListener('keydown', handleKeyDown as never);
    }, [isOpen, onClose]);

    // Filter based on query
    const filteredResults = searchQuery
        ? results.filter(item =>
            item.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : results;

    // Handle keyboard navigation
    const handleKeyNavigation = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIndex(prev => (prev < filteredResults.length - 1 ? prev + 1 : prev));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIndex(prev => (prev > 0 ? prev - 1 : prev));
        } else if (e.key === 'Enter' && activeIndex >= 0) {
            e.preventDefault();
            window.location.href = filteredResults[activeIndex].href;
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    ref={overlayRef}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="fixed top-16 left-0 right-0 mt-2 z-50 px-5"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Search"
                >
                    <div className="bg-dark-900 text-white/60 rounded-2xl border border-dark-50 p-4 shadow-xl">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleKeyNavigation}
                            className="w-full bg-transparent border-none outline-none text-sm mb-4 placeholder:text-white/30"
                            aria-label="Search input"
                            role="searchbox"
                        />

                        <div className="flex flex-col gap-1" role="listbox">
                            {filteredResults.map((item, index) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={onClose}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-800 transition text-sm ${
                                        index === activeIndex ? 'bg-zinc-800' : ''
                                    }`}
                                    role="option"
                                    aria-selected={index === activeIndex}
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    {item.icon}
                                    {item.label}
                                </Link>
                            ))}

                            {filteredResults.length === 0 && (
                                <p className="text-sm text-gray-400 px-3 py-2">
                                    No results found
                                </p>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

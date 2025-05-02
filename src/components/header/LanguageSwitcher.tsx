'use client';

import { useRef, useEffect } from 'react';
import { Language } from 'iconoir-react';
import { AnimatePresence, motion } from 'framer-motion';
import { LANGUAGES } from './header.config';
import { BaseButton } from './BaseButton';

type Props = {
    /**
     * Whether the language dropdown is currently open
     */
    isOpen: boolean;

    /**
     * Toggles the dropdown open/close state
     */
    onToggle: () => void;

    /**
     * Closes all overlays (centralized control from Header)
     */
    onCloseAll: () => void;
};

/**
 * LanguageSwitcher
 *
 * Dropdown component triggered by the language icon.
 * Allows users to select a language (i18n logic to be implemented).
 *
 * - Controlled by parent `Header.tsx` overlay state
 * - Closes when clicking outside
 * - Renders language options from the shared config
 * - Uses Framer Motion for smooth dropdown animation
 */
export function LanguageSwitcher({ isOpen, onToggle, onCloseAll }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!containerRef.current?.contains(e.target as Node)) {
                onCloseAll();
            }
        };

        if (isOpen) {
            window.addEventListener('click', handleClickOutside);
        }

        return () => window.removeEventListener('click', handleClickOutside);
    }, [isOpen, onCloseAll]);

    return (
        <div className="relative" ref={containerRef}>
            <BaseButton
                aria-label="Change language"
                onClick={onToggle}
            >
                <Language className="w-4" />
            </BaseButton>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-36 text-white/60 bg-dark-900 rounded-2xl shadow-lg border border-dark-50 overflow-hidden z-50"
                        role="menu"
                    >
                        {LANGUAGES.map((lang) => (
                            <li key={lang.code} role="menuitem">
                                <button
                                    onClick={() => {
                                        onCloseAll();
                                        // TODO: Hook up i18n routing here
                                    }}
                                    className="w-full text-left px-4 py-2 text-sm hover:bg-zinc-800 transition"
                                >
                                    {lang.label}
                                </button>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}

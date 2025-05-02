'use client';

import { Search, Xmark } from 'iconoir-react';
import { AnimatePresence, motion } from 'framer-motion';
import { BaseButton } from './BaseButton';

type Props = {
    /**
     * Whether the search overlay is currently open
     */
    isOpen: boolean;

    /**
     * Toggles the search overlay open/closed
     */
    onToggle: () => void;
};

/**
 * SearchButton
 *
 * A toggleable icon button that switches between:
 * - Search icon (when closed)
 * - Close icon (when the search overlay is open)
 *
 * - Controlled externally via `isOpen` state
 * - Uses BaseButton for consistent styling
 * - Animates the icon change using Framer Motion
 */
export function SearchButton({ isOpen, onToggle }: Props) {
    return (
        <BaseButton
            aria-label={isOpen ? 'Close search' : 'Open search'}
            onClick={onToggle}
            className="overflow-hidden"
        >
            <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                    <motion.span
                        key="close-search"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                    >
                        <Xmark className="w-4" />
                    </motion.span>
                ) : (
                    <motion.span
                        key="search"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                    >
                        <Search className="w-4" />
                    </motion.span>
                )}
            </AnimatePresence>
        </BaseButton>
    );
}

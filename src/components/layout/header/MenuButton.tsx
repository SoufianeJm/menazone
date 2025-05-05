'use client';

import { MenuScale, Xmark } from 'iconoir-react';
import { AnimatePresence, motion } from 'framer-motion';
import { BaseButton } from '../../ui/button/BaseButton';

type MenuButtonProps = {
    /**
     * Controls whether the mobile menu is open or closed
     */
    isOpen: boolean;

    /**
     * Toggles the menu state on click
     */
    onToggle: () => void;
};

/**
 * MenuButton
 *
 * A toggleable button that switches between "MENU" and "CLOSE".
 * Used to open and close the mobile navigation drawer.
 *
 * - Uses BaseButton for consistent styling
 * - Animates label and icon transition using Framer Motion
 * - Button width is fixed to prevent layout shift
 */
export function MenuButton({ isOpen, onToggle }: MenuButtonProps) {
    return (
        <BaseButton
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={onToggle}
            className="w-[90px] overflow-hidden"
        >
            <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                    <motion.span
                        key="close"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                    >
                        <Xmark className="w-4" />
                        <span className="font-semibold text-xs">CLOSE</span>
                    </motion.span>
                ) : (
                    <motion.span
                        key="menu"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                    >
                        <MenuScale className="w-4" />
                        <span className="font-semibold text-xs">MENU</span>
                    </motion.span>
                )}
            </AnimatePresence>
        </BaseButton>
    );
}

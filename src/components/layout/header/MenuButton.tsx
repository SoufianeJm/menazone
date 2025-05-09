'use client';

import { LazyMotion, AnimatePresence, domAnimation, m } from 'framer-motion';
import { BaseButton } from '../../ui/button/BaseButton';
import { MenuIcon } from '@/components/icons/MenuIcon';
import { XmarkIcon } from '@/components/icons/XmarkIcon';

type MenuButtonProps = {
    isOpen: boolean;
    onToggle: () => void;
};

export function MenuButton({ isOpen, onToggle }: MenuButtonProps) {
    return (
        <BaseButton
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={onToggle}
            className="w-[90px] overflow-hidden"
        >
            <LazyMotion features={domAnimation}>
                <AnimatePresence mode="wait" initial={false}>
                    {isOpen ? (
                        <m.span
                            key="close"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-2"
                        >
                            <XmarkIcon className="w-4" />
                            <span className="font-semibold text-xs">CLOSE</span>
                        </m.span>
                    ) : (
                        <m.span
                            key="menu"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 5 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-2"
                        >
                            <MenuIcon className="w-4" />
                            <span className="font-semibold text-xs">MENU</span>
                        </m.span>
                    )}
                </AnimatePresence>
            </LazyMotion>
        </BaseButton>
    );
}

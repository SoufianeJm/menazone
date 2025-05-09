'use client';

import { useRef, useEffect } from 'react';
import { LazyMotion, AnimatePresence, domAnimation, m } from 'framer-motion';
import { LANGUAGES } from './header.config';
import { BaseButton } from '../../ui/button/BaseButton';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { LanguageIcon } from '@/components/icons/LanguageIcon';

type Props = {
    isOpen: boolean;
    onToggle: () => void;
    onCloseAll: () => void;
};

export function LanguageSwitcher({ isOpen, onToggle, onCloseAll }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations();

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

    const handleLanguageChange = (code: string) => {
        onCloseAll();
        const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, '');
        const newPath = `/${code}${pathWithoutLang}`;
        router.push(newPath);
    };

    return (
        <div className="relative" ref={containerRef}>
            <BaseButton
                aria-label={t('Navigation.changeLanguage')}
                onClick={onToggle}
            >
                <LanguageIcon className="w-4" />
            </BaseButton>

            <LazyMotion features={domAnimation}>
                <AnimatePresence>
                    {isOpen && (
                        <m.ul
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
                                        onClick={() => handleLanguageChange(lang.code)}
                                        className="w-full text-left px-4 py-2 text-sm hover:bg-zinc-800 transition"
                                    >
                                        {t(lang.label)}
                                    </button>
                                </li>
                            ))}
                        </m.ul>
                    )}
                </AnimatePresence>
            </LazyMotion>
        </div>
    );
}

import { useRef, useEffect } from 'react';
import { Language } from 'iconoir-react';
import { AnimatePresence, motion } from 'framer-motion';
import { LANGUAGES } from './header.config';
import { BaseButton } from '../../ui/button/BaseButton';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

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
        
        // Get the path without the language prefix
        const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, '');
        
        // Construct the new path with the selected language
        const newPath = `/${code}${pathWithoutLang}`;
        
        router.push(newPath);
    };

    return (
        <div className="relative" ref={containerRef}>
            <BaseButton
                aria-label={t('Navigation.changeLanguage')}
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
                                    onClick={() => handleLanguageChange(lang.code)}
                                    className="w-full text-left px-4 py-2 text-sm hover:bg-zinc-800 transition"
                                >
                                    {t(lang.label)}
                                </button>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
}

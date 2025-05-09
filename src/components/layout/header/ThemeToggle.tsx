'use client';

import { BaseButton } from '../../ui/button/BaseButton';
import { useTranslations } from 'next-intl';
import { useTheme } from '../../theme/ThemeProvider';
import {SunIcon} from "@/components/icons/SunIcon";
import {MoonIcon} from "@/components/icons/MoonIcon";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const t = useTranslations();

    return (
        <BaseButton
            onClick={toggleTheme}
            className="bg-[var(--color-cardColor)] hover:bg-[var(--color-cardColor-hover)]"
            aria-label={t('Theme.toggle', { mode: theme === 'dark' ? 'light' : 'dark' })}
        >
            {theme === 'dark' ? (
                <SunIcon className="w-4 text-txt-button hover:text-[var(--color-txt-main)] transition" />
            ) : (
                <MoonIcon className="w-4 text-txt-button hover:text-[var(--color-txt-main)] transition" />
            )}
        </BaseButton>
    );
} 
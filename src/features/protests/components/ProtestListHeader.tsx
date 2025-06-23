'use client';

import { useTranslations } from 'next-intl';
import Component from "@/components/comp-232"; // Import the refactored CityDropdown

export interface ProtestListHeaderProps {
    city?: string;
    className?: string;
    onCityChange?: (city: string) => void;
}

export function ProtestListHeader({
                                      className = '',
                                  }: ProtestListHeaderProps) {
    const t = useTranslations(); // Default namespace, or specify e.g. t = useTranslations('Protests')

    return (
        <div className={`flex flex-row items-center gap-2 ${className}`}>
            <h2 className="text-base font-semibold text-[var(--color-txt-main)] whitespace-nowrap">
                {t('Protests.upcomingProtests')}
            </h2>
            <div className="flex-1 flex-grow min-w-0 max-w-xs">
                <Component className="w-full" />
            </div>
        </div>
    );
}
'use client';

import { useTranslations } from 'next-intl';
import { CityDropdown } from './CityDropdown'; // Import the refactored CityDropdown

export interface ProtestListHeaderProps {
    city?: string;
    className?: string;
    onCityChange?: (city: string) => void;
}

export function ProtestListHeader({
                                      city = 'Casablanca', // Default city
                                      className = '',
                                      onCityChange = () => {},
                                  }: ProtestListHeaderProps) {
    const t = useTranslations(); // Default namespace, or specify e.g. t = useTranslations('Protests')

    return (
        <div className={`flex justify-between items-center ${className}`}>
            <h2 className="text-base font-semibold text-[var(--color-txt-main)]">
                {t('Protests.upcomingProtests')} {/* Assuming 'Protests.upcomingProtests' key */}
            </h2>

            <CityDropdown
                currentCity={city}
                onCityChange={onCityChange}
                // className="text-base font-semibold text-white/60 hover:text-white/80" // Styling for the button itself is within CityDropdown
            />
        </div>
    );
}
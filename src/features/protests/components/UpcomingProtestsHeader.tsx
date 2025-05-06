'use client';

import { useTranslations } from 'next-intl';
import { CityDropdown } from './CityDropdown';

export interface UpcomingProtestsHeaderProps {
  city?: string;
  className?: string;
  onCityChange?: (city: string) => void;
}

export function UpcomingProtestsHeader({
  city = 'Casablanca',
  className = '',
  onCityChange = () => {},
}: UpcomingProtestsHeaderProps) {
  const t = useTranslations();

  return (
    <div className={`flex justify-between items-center ${className}`}>
      <h2 className="text-base font-semibold text-txt-main">{t('Protests.upcomingProtests')}</h2>
      
      <CityDropdown 
        currentCity={city}
        onCityChange={onCityChange}
      />
    </div>
  );
}

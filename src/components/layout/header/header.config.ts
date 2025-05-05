import type { NavLink, LanguageOption } from '../../../types/header.types';

export const NAV_LINKS: NavLink[] = [
    { label: 'Resources', href: '/resources' },
    { label: 'Protests', href: '/protests' },
    { label: 'Contact', href: '/contact' },
    { label: 'About Us', href: '/about' },
];

export const LANGUAGES: LanguageOption[] = [
    { label: 'Arabic', code: 'ar' },
    { label: 'English', code: 'en' },
    { label: 'French', code: 'fr' },
    { label: 'Spanish', code: 'es' },
];

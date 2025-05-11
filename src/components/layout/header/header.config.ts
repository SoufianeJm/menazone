import type { NavLink, LanguageOption } from '@/types/header.types';

export const NAV_LINKS: NavLink[] = [
    { label: 'Navigation.home', href: '/{lang}' },
    { label: 'Navigation.getInvolved', href: '/{lang}/Get-involved' },
    { label: 'Navigation.reachOut', href: '/{lang}/Reach-out' },
    { label: 'Navigation.aboutMenazone', href: '/{lang}/About-Menazone' },
];

export const LANGUAGES: LanguageOption[] = [
    { label: 'Languages.french', code: 'fr' },
    { label: 'Languages.english', code: 'en' },
];

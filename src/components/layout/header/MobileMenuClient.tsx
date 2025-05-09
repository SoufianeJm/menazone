'use client';

import { NAV_LINKS } from './header.config';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { ArrowUpRightCornerIcon } from '@/components/icons/ArrowUpRightCornerIcon';

export default function MobileMenuClient({ onClose }: { onClose: () => void }) {
    const pathname = usePathname();
    const params = useParams();
    const t = useTranslations();
    const lang = (params?.lang as string) || 'en';

    const isActiveLink = (href: string) => {
        const currentPath = pathname.replace(/^\/[a-z]{2}/, '');
        const linkPath = href.replace('{lang}', lang).replace(/^\/[a-z]{2}/, '');
        return linkPath === '/' ? currentPath === '/' || currentPath === '' : currentPath === linkPath;
    };

    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-2"
            >
                {NAV_LINKS.map((link) => {
                    const href = link.href.replace('{lang}', lang);
                    const isActive = isActiveLink(link.href);

                    return (
                        <m.div
                            key={href}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                href={href}
                                onClick={onClose}
                                className={`flex items-center justify-between text-sm p-3 rounded-lg 
                  ${isActive
                                    ? 'text-[var(--color-txt-main)] bg-[var(--color-cardColor)]'
                                    : 'text-[var(--color-txt-secondary)] bg-[var(--color-cardColor)] border border-[var(--color-border-color)] hover:bg-[var(--color-cardColor-hover)]'
                                } transition`}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                <span className="font-medium">{t(link.label)}</span>
                                <ArrowUpRightCornerIcon className="w-4" />
                            </Link>
                        </m.div>
                    );
                })}
            </m.div>
        </LazyMotion>
    );
}

'use client';

import { NAV_LINKS } from './header.config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'iconoir-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

type MobileMenuProps = {
    /**
     * Callback to close the menu when a link is clicked
     */
    onClose: () => void;
};

// Parent animation config for staggered children
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

// Individual link animation
const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeOut',
            duration: 0.3,
        },
    },
};

/**
 * MobileMenu
 *
 * Displays a vertical, animated list of navigation links for mobile view.
 *
 * - Uses Framer Motion for staggered item animations
 * - Links are sourced from the centralized NAV_LINKS config
 * - Clicking a link calls `onClose` to dismiss the menu
 * - Highlights the active link based on current path
 */
export function MobileMenu({ onClose }: MobileMenuProps) {
    const pathname = usePathname();
    const t = useTranslations();
    const params = useParams();
    const lang = (params?.lang as string) || 'en';

    const isActiveLink = (href: string) => {
        // Remove the language prefix from both the current path and the link path
        const currentPath = pathname.replace(/^\/[a-z]{2}/, '');
        const linkPath = href.replace('{lang}', lang).replace(/^\/[a-z]{2}/, '');
        
        // For home page
        if (linkPath === '/' && (currentPath === '/' || currentPath === '')) {
            return true;
        }
        
        // For other pages
        return linkPath !== '/' && currentPath === linkPath;
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col gap-2"
        >
            {NAV_LINKS.map((link) => {
                const isActive = isActiveLink(link.href);
                const href = link.href.replace('{lang}', lang);
                
                return (
                    <motion.div key={href} variants={itemVariants}>
                        <Link
                            href={href}
                            onClick={onClose}
                            className={`flex items-center justify-between text-sm p-3 rounded-lg 
                                ${isActive 
                                    ? 'text-white/70 bg-white/15' 
                                    : 'text-white/60 bg-dark-900 border border-dark-50 hover:bg-zinc-800'
                                } transition`}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            <span className="font-medium">{t(link.label)}</span>
                            <ArrowUpRight className="w-4" />
                        </Link>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}

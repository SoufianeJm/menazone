'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MenuButton } from './MenuButton';
import { LanguageSwitcher } from './LanguageSwitcher';
import { SearchButton } from './SearchButton';
import { MobileMenu } from './MobileMenu';
import { SearchOverlay } from '@/components/header/SearchOverlay';

type OverlayType = 'menu' | 'language' | 'search' | null;

export function Header() {
    const [activeOverlay, setActiveOverlay] = useState<OverlayType>(null);
    
    // Handle body scroll locking when overlay is open
    useEffect(() => {
        if (activeOverlay) {
            // Lock scroll
            document.body.style.overflow = 'hidden';
            
            // Handle escape key to close overlay
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    closeAll();
                }
            };
            
            window.addEventListener('keydown', handleEscape);
            
            return () => {
                // Restore scroll
                document.body.style.overflow = '';
                window.removeEventListener('keydown', handleEscape);
            };
        }
    }, [activeOverlay]);

    const toggle = (overlay: OverlayType) => {
        setActiveOverlay(prev => (prev === overlay ? null : overlay));
    };

    const closeAll = () => setActiveOverlay(null);

    // Determine wrapper classes based on active overlay
    const getWrapperClasses = () => {
        if (activeOverlay === 'menu') {
            return 'fixed inset-0 z-50 px-5 bg-black min-h-screen overflow-y-auto';
        }
        return '';
    };

    return (
        <div className={getWrapperClasses()}>
            <header className="w-full py-4 flex items-center justify-between relative z-20">
                {/* Left: Menu button */}
                <div className="flex items-center md:hidden">
                    <MenuButton
                        isOpen={activeOverlay === 'menu'}
                        onToggle={() => toggle('menu')}
                    />
                </div>

                {/* Center: Logo */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image
                        src="/images/menazone_logo.svg"
                        alt="Menazone logo"
                        width={40}
                        height={30}
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Right: Lang + Search */}
                <div className="flex items-center gap-2">
                    <LanguageSwitcher
                        isOpen={activeOverlay === 'language'}
                        onToggle={() => toggle('language')}
                        onCloseAll={closeAll}
                    />
                    <SearchButton
                        isOpen={activeOverlay === 'search'}
                        onToggle={() => toggle('search')}
                    />
                </div>
            </header>

            {/* Overlays */}
            <SearchOverlay isOpen={activeOverlay === 'search'} onClose={closeAll} />
            {activeOverlay === 'menu' && <MobileMenu onClose={closeAll} />}
        </div>
    );
}

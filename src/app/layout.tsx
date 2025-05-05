import '../styles/globals.css';
import type {Metadata} from 'next';
import {IBM_Plex_Sans } from 'next/font/google';
import {IconoirProvider} from 'iconoir-react';
import {Header} from '@/components/layout/header/Header';
import {MobileOnly} from '@/components/MobileOnly';
import {DesktopNotice} from '@/components/DesktopNotice';
import React from "react";

const plex = IBM_Plex_Sans ({
    weight: ['400'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Menazone',
    description: 'Tools and resources for activists who refuse to stay silent.',
};

export default function RootLayout({
                                       children
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <IconoirProvider
            iconProps={{
                color: 'currentColor',
                strokeWidth: 1.5,
                height: '1.5em',
            }}
        >
            <body className={`${plex.className} antialiased`}>
            <MobileOnly>
                <Header/>
                {children}
            </MobileOnly>

            <DesktopNotice/>
            </body>
        </IconoirProvider>
        </html>
    );
}
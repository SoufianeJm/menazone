import '../../styles/globals.css';
import type {Metadata} from 'next';
import {Manrope} from 'next/font/google';
import {Header} from '@/components/layout/header/Header';
import {MobileOnly} from '@/components/MobileOnly';
import {DesktopNotice} from '@/components/DesktopNotice';
import React from "react";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

const manrope = Manrope({
    weight: ['400'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Menazone',
    description: 'Tools and resources for activists who refuse to stay silent.',
};

export default async function RootLayout({
                                             children,
                                             params
                                         }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {

    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale} className="dark">
            <body className={`${manrope.className} antialiased`}>
            <NextIntlClientProvider>
                <ThemeProvider>
                    <MobileOnly>
                        <Header/>
                        {children}
                    </MobileOnly>
                    <DesktopNotice/>
                </ThemeProvider>
            </NextIntlClientProvider>
            </body>
        </html>
    );
}
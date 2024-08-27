import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';

const monts = Montserrat({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={monts.className}>{children}</body>
        </html>
    );
}

import './style.css';
import { Oswald } from 'next/font/google';

const oswald = Oswald({ weight: ['300', '700'], subsets: ['latin'] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={oswald.className}>{children}</body>
        </html>
    );
}

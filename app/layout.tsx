import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';
import Providers from '@/src/providers/AppProviders';
import { Toaster } from 'react-hot-toast';
import SharedWrapper from '@/src/components/shared/SharedWrapper';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Eduzen',
  description: 'Book personalized learning sessions with expert tutors around the globe.',
  icons: {
    icon: '/images/favIcon.png'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans`}>
        <Providers>
          <SharedWrapper>{children}</SharedWrapper>
          <Toaster position="bottom-right" />
        </Providers>
      </body>
    </html>
  );
}

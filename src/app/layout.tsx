import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar';

const fontSans = Lato({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['100', '300', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Blogvibe - Blog Application',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

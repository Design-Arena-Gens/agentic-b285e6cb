import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '????',
  description: ' ',
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    title: '????',
    description: ' ',
    images: ['/og.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: '????',
    description: ' ',
    images: ['/og.png']
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zxx" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}


import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import { site, hero } from '@/content';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const title = 'Rumah Sewa · Lhokseumawe — 2 Kamar, Siap Huni';
const description =
  'Rumah tinggal 2 kamar di Jl. Merdeka, Lhokseumawe. 90m², carport, sumur bor, listrik 1300W. Rp 15jt/tahun. Chat WhatsApp untuk lihat rumah.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'id_ID',
    url: site.url,
    siteName: 'Rumah Sewa Lhokseumawe',
    images: [{ url: '/photos/og.jpg', width: 1200, height: 630, alt: hero.headline.join(' ') }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/photos/og.jpg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#F4F0E8',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

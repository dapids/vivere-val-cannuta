import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import 'leaflet/dist/leaflet.css';
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';
import { GlobalStyle } from '../lib/GlobalStyle';
import { inter, playfairDisplay } from '@/app/fonts';

const siteName = 'Vivere Val Cannuta';
const siteUrl = 'https://viverevalcannuta.it';
const defaultTitle = 'Vivere Val Cannuta | Community del quartiere Val Cannuta di Roma';
const defaultDescription = 'Community del quartiere Val Cannuta a Roma con mappa del quartiere, luoghi utili, aggiornamenti locali e accesso diretto alla community dei residenti.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Val Cannuta',
    'quartiere Val Cannuta',
    'Roma',
    'community quartiere Roma',
    'residenti Val Cannuta',
    'mappa Val Cannuta',
    'quartiere Roma ovest',
  ],
  authors: [{ name: siteName }],
  creator: 'David Sorrentino',
  publisher: siteName,
  category: 'community',
  alternates: {
    canonical: '/',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    siteName,
    images: [
      {
        url: '/map.webp',
        alt: 'Vista aerea del quartiere Val Cannuta a Roma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/map.webp'],
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.className} ${playfairDisplay}`}>
      <head>
        <link rel="preconnect" href="https://tile.openstreetmap.fr" />
        <link rel="preconnect" href="https://a.tile.openstreetmap.fr" />
        <link rel="preconnect" href="https://b.tile.openstreetmap.fr" />
        <link rel="preconnect" href="https://c.tile.openstreetmap.fr" />
      </head>
      <GoogleAnalytics gaId="G-WSEC0GBNE1" />
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { NeighborhoodMapPage } from '@/lib/neighborhood-map/NeighborhoodMapPage';

const siteUrl = 'https://viverevalcannuta.it';
const pageTitle = 'Mappa del quartiere Val Cannuta';
const pageDescription = 'Mappa interattiva di Val Cannuta con parchi, servizi, attività locali, punti di interesse e riferimenti utili nel quartiere di Roma.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    'mappa Val Cannuta',
    'quartiere Val Cannuta Roma',
    'punti di interesse Val Cannuta',
    'servizi quartiere Roma',
    'parchi Val Cannuta',
  ],
  alternates: {
    canonical: '/mappa',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    title: `Vivere Val Cannuta | ${pageTitle}`,
    description: pageDescription,
    url: `${siteUrl}/mappa`,
    images: [
      {
        url: '/map.webp',
        width: 1200,
        height: 630,
        alt: 'Mappa del quartiere Val Cannuta con luoghi utili e punti di interesse',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Vivere Val Cannuta | ${pageTitle}`,
    description: pageDescription,
    images: ['/map.webp'],
  },
};

export default function MappaPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/mappa#webpage`,
        url: `${siteUrl}/mappa`,
        name: `Vivere Val Cannuta | ${pageTitle}`,
        description: pageDescription,
        inLanguage: 'it-IT',
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@id': `${siteUrl}/mappa#place`,
        },
        breadcrumb: {
          '@id': `${siteUrl}/mappa#breadcrumb`,
        },
      },
      {
        '@type': 'Place',
        '@id': `${siteUrl}/mappa#place`,
        name: 'Val Cannuta, Roma, Italia',
      },
      {
        '@type': 'Map',
        '@id': `${siteUrl}/mappa#map`,
        url: `${siteUrl}/mappa`,
        name: 'Mappa del quartiere Val Cannuta',
        description: pageDescription,
        about: {
          '@id': `${siteUrl}/mappa#place`,
        },
        inLanguage: 'it-IT',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/mappa#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Homepage',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Mappa del quartiere',
            item: `${siteUrl}/mappa`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />
      <NeighborhoodMapPage />
    </>
  );
}

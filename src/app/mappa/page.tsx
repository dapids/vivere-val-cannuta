import type { Metadata } from 'next';
import { NeighborhoodMapPage } from '@/lib/neighborhood-map/NeighborhoodMapPage';
import { categories, markers } from '@/lib/neighborhood-map/mapData';

const siteUrl = 'https://viverevalcannuta.it';
const pageTitle = 'Mappa del quartiere Val Cannuta';
const pageDescription = 'Mappa interattiva di Val Cannuta con parchi, servizi, attività locali, punti di interesse e riferimenti utili nel quartiere di Roma.';

const categorySummary = categories.map(([tone, meta]) => ({
  count: markers.filter((marker) => marker.tone === tone).length,
  label: meta.label,
  tone,
}));

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
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/mappa#categorie`,
        name: 'Categorie della mappa di Val Cannuta',
        numberOfItems: categorySummary.length,
        itemListElement: categorySummary.map((category, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: `${category.label} (${category.count})`,
        })),
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
      <section aria-labelledby="mappa-seo-heading" style={{ margin: '0 auto', maxWidth: '960px', padding: '24px 20px 40px' }}>
        <h2 id="mappa-seo-heading" style={{ color: '#405544', fontFamily: '"Playfair Display"', fontSize: '32px', lineHeight: 1.1, margin: '0 0 12px' }}>
          Mappa locale di Val Cannuta
        </h2>
        <p style={{ color: '#4f5d53', lineHeight: 1.6, margin: '0 0 12px' }}>
          Questa pagina raccoglie in un unico punto i riferimenti utili del quartiere Val Cannuta a Roma: aree verdi, servizi di prossimità,
          attività commerciali e luoghi frequentati ogni giorno dai residenti.
        </p>
        <p style={{ color: '#4f5d53', lineHeight: 1.6, margin: '0 0 16px' }}>
          La mappa viene aggiornata per offrire un orientamento rapido nel quartiere e facilitare la scoperta di punti di interesse nella zona
          ovest della città.
        </p>
        <h3 style={{ color: '#405544', fontSize: '20px', margin: '0 0 10px' }}>Categorie presenti nella mappa</h3>
        <ul style={{ color: '#4f5d53', lineHeight: 1.5, margin: 0, paddingLeft: '20px' }}>
          {categorySummary.map((category) => (
            <li key={category.tone}>{category.label}: {category.count}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

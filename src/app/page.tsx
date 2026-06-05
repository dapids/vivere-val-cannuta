import type { Metadata } from 'next';
import Image from 'next/image';
import logo from './logo-192x192.png';
import { Members } from '@/lib/Members';
import { NeighborhoodMap } from '@/lib/NeighborhoodMap';
import { AboveFolderContainer, Button, CtaIcon, CtaStack, Dot, Footer, H1, H2, Header, Hero, InstagramButton, Margin } from '@/lib/Components';

const siteUrl = 'https://viverevalcannuta.it';
const pageTitle = 'Community del quartiere Val Cannuta di Roma';
const pageDescription = 'Vivere Val Cannuta riunisce residenti e vicini di casa del quartiere Val Cannuta a Roma con una mappa locale, informazioni utili e accesso rapido alla community.';

const startingYear = 2024
const currentYear = new Date().getFullYear()

const copyrightYears = startingYear === currentYear ? startingYear : `${startingYear}-${currentYear}`

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `Vivere Val Cannuta | ${pageTitle}`,
    description: pageDescription,
    url: siteUrl,
  },
  twitter: {
    title: `Vivere Val Cannuta | ${pageTitle}`,
    description: pageDescription,
  },
};

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Vivere Val Cannuta',
        url: siteUrl,
        logo: `${siteUrl}/icon.png`,
        sameAs: ['https://www.instagram.com/viverevalcannuta/'],
        areaServed: {
          '@type': 'Place',
          name: 'Val Cannuta, Roma, Italia',
        },
        description: pageDescription,
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Vivere Val Cannuta',
        inLanguage: 'it-IT',
        description: pageDescription,
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
      },
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}/#homepage`,
        url: siteUrl,
        name: `Vivere Val Cannuta | ${pageTitle}`,
        description: pageDescription,
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@type': 'Place',
          name: 'Val Cannuta, Roma, Italia',
        },
      },
    ],
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />
      <div id="top" />
      <AboveFolderContainer>
        <Header>
          <Image alt="Logo della community Vivere Val Cannuta" height={60} priority src={logo} width={60} />
        </Header>
        <Hero>
          <H1>
            <span>Vivere</span>
            &nbsp;
            <span>Val Cannuta<Dot>.</Dot></span>
          </H1>
          <H2>Il sito del quartiere Val Cannuta di Roma.</H2>

          <p>Vivi a Val Cannuta? Allora unisciti alla community! Potrai connetterti con i tuoi vicini, condividere informazioni utili, discutere di eventi locali, e contribuire al benessere del nostro quartiere e della nostra community.</p>
          <p>Su Vivere Val Cannuta trovi anche una mappa del quartiere con luoghi utili, attività locali e riferimenti rapidi per orientarti meglio nella zona ovest di Roma.</p>
          <CtaStack>
            <Button href="https://chat.whatsapp.com/JHeZnKlYwuUDpiqXlevKon" rel="noreferrer" target="_blank">
              <CtaIcon aria-hidden="true">
                <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <circle cx="16" cy="8" r="2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M3.8 18.2c.9-2.5 3.1-4.2 5.7-4.2s4.8 1.7 5.7 4.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M14 18.2c.6-1.8 2-3 3.8-3.4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </CtaIcon>
              <span>Unisciti alla community</span>
            </Button>
            <NeighborhoodMap />
            <InstagramButton href="https://www.instagram.com/viverevalcannuta/" rel="noreferrer" target="_blank">
              <CtaIcon aria-hidden="true">
                <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect height="15" rx="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="15" x="4.5" y="4.5" />
                  <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <circle cx="16.8" cy="7.3" fill="currentColor" r="1.1" />
                </svg>
              </CtaIcon>
              <span>Seguici su Instagram</span>
            </InstagramButton>
          </CtaStack>

          <Members />

          <Margin />
        </Hero>

        <Footer>
          <p>
            &copy; {copyrightYears} Vivere Val Cannuta
            <br />
            Sito web realizzato da <a href="https://www.davidsorrentino.com/" rel="noreferrer" target="_blank">David Sorrentino</a>
          </p>
        </Footer>
      </AboveFolderContainer>
    </>
  );
}

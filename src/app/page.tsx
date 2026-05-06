import Image from 'next/image';
import logo from './logo-192x192.png';
import { Members } from '@/lib/Members';
import { NeighborhoodMap } from '@/lib/NeighborhoodMap';
import { AboveFolderContainer, Button, CtaIcon, CtaStack, Dot, Footer, H1, H2, Header, Hero, InstagramButton, Margin } from '@/lib/Components';

const startingYear = 2024
const currentYear = new Date().getFullYear()

const copyrightYears = startingYear === currentYear ? startingYear : `${startingYear}-${currentYear}`

export default function Home() {
  return (
    <>
      <div id="top" />
      <AboveFolderContainer>
        <Header>
          <Image alt="Logo di Vivere Val Cannuta" height={60} src={logo}></Image>
        </Header>
        <Hero>
          <H1>
            <span>Vivere</span>
            &nbsp;
            <span>Val Cannuta<Dot>.</Dot></span>
          </H1>
          <H2>Il sito della community del quartiere Val Cannuta di Roma.</H2>

          <p>Vivi a Val Cannuta? Allora unisciti alla community! Potrai connetterti con i tuoi vicini, condividere informazioni utili, discutere di eventi locali, e contribuire al benessere del nostro quartiere e della nostra community.</p>
          <NeighborhoodMap />
          <CtaStack>
            <InstagramButton href="https://www.instagram.com/viverevalcannuta/" target="_blank">
              <CtaIcon aria-hidden="true">
                <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect height="15" rx="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="15" x="4.5" y="4.5" />
                  <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <circle cx="16.8" cy="7.3" fill="currentColor" r="1.1" />
                </svg>
              </CtaIcon>
              <span>Seguici su Instagram</span>
            </InstagramButton>
            <Button href="https://discord.gg/J2whmnHhTG" target="_blank">
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
          </CtaStack>

          <Members />

          <Margin />
        </Hero>
      </AboveFolderContainer>

      <Footer>
        <p>
          &copy; {copyrightYears} Vivere Val Cannuta
          <br />
          Sito web realizzato da <a href="https://www.davidsorrentino.com/" target="_blank">David Sorrentino</a>
        </p>
      </Footer>
    </>
  );
}

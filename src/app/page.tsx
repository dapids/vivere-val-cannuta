import Image from 'next/image';
import logo from './logo-192x192.png';
import { Members } from '@/lib/Members';
import { Button, Container, Dot, Footer, H1, H2, Header, Hero, Margin } from '@/lib/Components';

const startingYear = 2024
const currentYear = new Date().getFullYear()

const copyrightYears = startingYear === currentYear ? startingYear : `${startingYear}-${currentYear}`

export default function Home() {
  return (
    <>
      <div id="top" />
      <Container>
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
          <Button href="https://discord.gg/J2whmnHhTG" target="_blank">Unisciti alla community</Button>

          <Members />

          <Margin />
        </Hero>
      </Container>
      <Footer>
        <p>
          &copy; {copyrightYears} Vivere Val Cannuta
          <br />
          Sito web realizzato col ❤️ da <a href="https://www.davidsorrentino.com/" target="_blank">David Sorrentino</a>
        </p>
      </Footer>
    </>
  );
}

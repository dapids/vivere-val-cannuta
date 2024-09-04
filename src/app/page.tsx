import { Logo } from '@/app/Logo';
import { Members } from '@/app/Members';
import { Button, Container, Dot, Footer, H1, H2, Header, Hero } from '@/lib/Components';

const startingYear = 2024
const currentYear = new Date().getFullYear()

const copyrightYears = startingYear === currentYear ? startingYear : `${startingYear}-${currentYear}`

const backgrounds = [
  // '/quartiere_1.jpg',
  '/quartiere_2.jpg',
  // '/quartiere_3.jpg',
  // '/quartiere_4.jpg',
]

const background = backgrounds[Math.floor(Math.random() * backgrounds.length)]

export default function Home() {
  return (
    <>
    <div id="top" />
    <Container background={background}>
      <Header>
        <Logo />
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
      </Hero>
    </Container>
      <Footer>
        <p>&copy; {copyrightYears} Val Cannuta Community | Sito web realizzato col ❤️ da <a href="https://www.davidsorrentino.com/" target="_blank">David Sorrentino</a></p>
      </Footer>
    </>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const center: [number, number] = [41.8938, 12.4125];

const markers = [
  {
    description: 'L\'area cani del parco, pensata per far muovere i cani in uno spazio dedicato e per favorire gli incontri tra proprietari del quartiere.',
    iconCodePoint: 128054,
    latitude: 41.89617212392647,
    longitude: 12.414364141651436,
    tone: 'dogs',
    title: 'Area cani',
  },
  {
    description: 'L\'area giochi per bambini del parco, pensata per il gioco all\'aperto e per i momenti in famiglia nel verde del quartiere.',
    iconCodePoint: 128733,
    latitude: 41.89654032741172,
    longitude: 12.414812623367881,
    tone: 'playground',
    title: 'Area giochi bimbi',
  },
  {
    description: 'L\'area giochi nel parcheggio CTS, uno spazio pratico per i bambini durante la spesa o una sosta veloce in zona.',
    iconCodePoint: 128733,
    latitude: 41.89438966966515,
    longitude: 12.40950124592123,
    tone: 'playground',
    title: 'Area giochi CTS',
  },
  {
    description: 'Autofficina Coluzzi, officina di riferimento in zona per manutenzione, assistenza e piccoli interventi sull\'auto.',
    iconCodePoint: 128663,
    latitude: 41.90237710449449,
    longitude: 12.421548355889401,
    tone: 'service',
    title: 'Autofficina Coluzzi',
  },
  {
    description: 'Autolavaggio Car Wash, utile per la pulizia rapida e completa dell\'auto senza allontanarsi dal quartiere.',
    iconCodePoint: 128663,
    latitude: 41.89204979882365,
    longitude: 12.414239655213978,
    tone: 'service',
    title: 'Autolavaggio Car Wash',
  },
  {
    description: 'Un bar bistrot vivace, ideale per un aperitivo in compagnia, un pranzo veloce o semplicemente per godersi il ritmo del quartiere.',
    iconCodePoint: 9749,
    latitude: 41.89622614837767,
    longitude: 12.410890016223183,
    tone: 'bar',
    title: 'Bar Bistrot Sunseri',
  },
  {
    description: 'Bar Castroni, un\'istituzione per il caffè: tantissimi prodotti tipici italiani di alta qualità, oltre a un vasto assortimento di cibi etnici, tè, bevande e liquori da tutto il mondo.',
    iconCodePoint: 9749,
    latitude: 41.90273505319038,
    longitude: 12.42312100026914,
    tone: 'bar',
    title: 'Bar Castroni',
  },
  {
    description: 'Bar Da.ro&apos;, un locale del quartiere dove fermarsi per un caffè, una pausa o due chiacchiere in compagnia.',
    iconCodePoint: 9749,
    latitude: 41.89738973217479,
    longitude: 12.413952752795993,
    tone: 'bar',
    title: 'Bar Da.ro\'',
  },
  {
    description: 'Bar H1, un punto di ritrovo del quartiere per una pausa veloce, un caffè o un aperitivo.',
    iconCodePoint: 9749,
    latitude: 41.89985141184872,
    longitude: 12.414566069054729,
    tone: 'bar',
    title: 'Bar H1',
  },
  {
    description: 'Un bar accogliente dove stare con gli amici, prendere un bel caffè e vivere il quartiere nel suo ritmo più lento.',
    iconCodePoint: 9749,
    latitude: 41.90216557655259,
    longitude: 12.413531202787768,
    tone: 'bar',
    title: 'Caffé Petrangeli',
  },
  {
    description: 'Candy Cream Gelateria, ideale per gelati artigianali e una pausa dolce nel quartiere.',
    iconCodePoint: 127846,
    latitude: 41.90254466920456,
    longitude: 12.421656562799734,
    tone: 'restaurant',
    title: 'Candy Cream Gelateria',
  },
  {
    description: 'Il campo di basket del parco, uno spazio dedicato al gioco libero, agli allenamenti informali e ai momenti di sport all\'aperto nel quartiere.',
    iconCodePoint: 127936,
    latitude: 41.89617212392647,
    longitude: 12.414364141651436,
    tone: 'basket',
    title: 'Campo di basket',
  },
  {
    description: 'La Farmacia Divina Provvidenza: un punto di riferimento per la salute del quartiere, con personale disponibile e un ampio assortimento di prodotti.',
    iconCodePoint: 9877,
    latitude: 41.89604554224632,
    longitude: 12.4113046726689,
    tone: 'pharmacy',
    title: 'Farmacia Divina Provvidenza',
  },
  {
    description: 'La Farmacia Gregorio XI: un altro presidio sanitario del quartiere, facilmente raggiungibile dalla zona est di Val Cannuta.',
    iconCodePoint: 9877,
    latitude: 41.89976930008871,
    longitude: 12.419163019071672,
    tone: 'pharmacy',
    title: 'Farmacia Gregorio XI',
  },
  {
    description: 'Studio di fisioterapia di Laura Torassa, punto di riferimento per trattamenti fisioterapici e percorsi di recupero funzionale nel quartiere.',
    iconCodePoint: 9877,
    latitude: 41.89749069127335,
    longitude: 12.41461341338635,
    tone: 'pharmacy',
    title: 'Studio di fisioterapia di Laura Torassa',
  },
  {
    description: 'La fontanella del parco, utile per una pausa veloce e come piccolo punto di servizio durante la permanenza nell\'area verde.',
    iconCodePoint: 128167,
    latitude: 41.898300103870234,
    longitude: 12.415549522776649,
    tone: 'fountain',
    title: 'Fontanella',
  },
  {
    description: 'Una fontanella pubblica in via Roberto Ago, comoda per chi passeggia o si trova nella zona.',
    iconCodePoint: 128167,
    latitude: 41.89262684235587,
    longitude: 12.401362550120519,
    tone: 'fountain',
    title: 'Fontanella',
  },
  {
    description: 'Forno L\'angolo delle delizie, perfetto per pane fresco, prodotti da forno e sfizi salati e dolci nel quartiere.',
    iconCodePoint: 127838,
    latitude: 41.902753570339385,
    longitude: 12.4228617203887,
    tone: 'restaurant',
    title: 'Forno L\'angolo delle delizie',
  },
  {
    description: 'Hartigan\'s Irish Pub, locale ideale per una birra, una serata tra amici e un\'atmosfera internazionale nel quartiere.',
    iconCodePoint: 127866,
    latitude: 41.90180026041411,
    longitude: 12.424266677422285,
    tone: 'bar',
    title: 'Hartigan\'s Irish pub',
  },
  {
    description: 'Lavanderia Bismillah, comoda per lavaggio e asciugatura rapida dei capi nel quartiere.',
    iconCodePoint: 129530,
    latitude: 41.89356354975247,
    longitude: 12.408767169311313,
    tone: 'laundry',
    title: 'Lavanderia Bismillah',
  },
  {
    description: 'La palestra all\'aperto del parco, con attrezzi fitness utili per allenamenti leggeri, esercizi a corpo libero e attivita sportive nel verde.',
    iconCodePoint: 127947,
    latitude: 41.89788928885704,
    longitude: 12.416643872547484,
    tone: 'fitness',
    title: 'Palestra all\'aperto',
  },
  {
    description: 'Uno dei principali spazi verdi di Val Cannuta, ideale per passeggiare, far giocare i bambini, prendere una pausa all\'aperto e vivere il quartiere ogni giorno.',
    iconCodePoint: 127794,
    latitude: 41.897015688231804,
    longitude: 12.415672321766419,
    tone: 'park',
    title: 'Parco Umberto Lenzini',
  },
  {
    description: 'Il parco della Tenuta dell\'Acquafredda, un\'area verde ampia e tranquilla ideale per passeggiate, relax e tempo all\'aperto.',
    iconCodePoint: 127794,
    latitude: 41.89562022201056,
    longitude: 12.400597656153858,
    tone: 'park',
    title: 'Tenuta dell\'Acquafredda',
  },
  {
    description: 'Pizza alla pala, trancio e sfizi da asporto: Love 4 Pizza è il posto giusto per una pausa golosa nel quartiere.',
    iconCodePoint: 127829,
    latitude: 41.901985108737,
    longitude: 12.413002100206185,
    tone: 'restaurant',
    title: 'Pizza alla pala',
  },
  {
    description: 'Un ristorante dal carattere tipicamente romano, ideale per un pranzo in famiglia o una cena in compagnia. Ottima anche la pizza.',
    iconCodePoint: 127869,
    latitude: 41.90027467214945,
    longitude: 12.41627270222011,
    tone: 'restaurant',
    title: 'Ristorante I Fraschettari',
  },
  {
    description: 'Sarto Taglia Cuci Scuci, servizio di sartoria e riparazioni utilissimo per orli, modifiche e sistemazioni rapide dei capi.',
    iconCodePoint: 9986,
    latitude: 41.90290218813604,
    longitude: 12.414022317792746,
    tone: 'laundry',
    title: 'Sarto Taglia Cuci Scuci',
  },
  {
    description: 'Il Carrefour del quartiere, aperto 7 giorni su 7, 24 ore su 24: sempre disponibile per qualsiasi necessità, di giorno come di notte.',
    iconCodePoint: 128722,
    latitude: 41.894897306089916,
    longitude: 12.414055710030832,
    tone: 'shop',
    title: 'Supermercato Carrefour',
  },
  {
    description: 'Il supermercato CTS di riferimento per la spesa quotidiana del quartiere, comodo e dotato di un ampio parcheggio.',
    iconCodePoint: 128722,
    latitude: 41.89365421749571,
    longitude: 12.408494492663815,
    tone: 'shop',
    title: 'Supermercato CTS',
  },
] as const;

const iconFromCodePoint = (iconCodePoint: number) => String.fromCodePoint(iconCodePoint);

const categoryMeta: Record<string, { iconCodePoint: number; label: string }> = {
  basket: { iconCodePoint: 127936, label: 'Basket' },
  bar: { iconCodePoint: 9749, label: 'Bar e pub' },
  dogs: { iconCodePoint: 128054, label: 'Area cani' },
  fitness: { iconCodePoint: 127947, label: 'Fitness' },
  fountain: { iconCodePoint: 128167, label: 'Fontanelle' },
  laundry: { iconCodePoint: 129530, label: 'Lavanderie e sartorie' },
  park: { iconCodePoint: 127794, label: 'Parchi' },
  pharmacy: { iconCodePoint: 9877, label: 'Salute e farmacie' },
  playground: { iconCodePoint: 128733, label: 'Giochi bimbi' },
  restaurant: { iconCodePoint: 127869, label: 'Cibo e dolci' },
  service: { iconCodePoint: 128663, label: 'Servizi auto' },
  shop: { iconCodePoint: 128722, label: 'Supermercati' },
};

const categories = Object.entries(categoryMeta).sort((a, b) =>
  a[1].label.localeCompare(b[1].label)
);

const Section = styled.section`
  margin: 0;
  min-height: 100dvh;
  position: relative;
`;

const Copy = styled.div`
  left: 0;
  padding: 40px 24px 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;

  @media (max-width: 700px) {
    padding: 24px 16px 0;
  }
`;

const CopyCard = styled.div`
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(217, 227, 213, 0.9);
  border-radius: 24px;
  box-shadow: 0 18px 40px rgba(58, 80, 63, 0.12);
  max-width: 640px;
  padding: 22px 24px;
  pointer-events: auto;

  @media (max-width: 700px) {
    border-radius: 18px;
    padding: 18px;
  }
`;

const Eyebrow = styled.p`
  color: #81c784;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.16em;
  margin: 0 0 10px;
  text-transform: uppercase;
`;

const Title = styled.h3`
  color: #404040;
  font-family: 'Playfair Display';
  font-size: 34px;
  margin: 0 0 12px;
`;

const Intro = styled.p`
  line-height: 1.6;
  margin: 0 0 20px;
  max-width: 60ch;
`;

const Legend = styled.aside`
  right: 10px;
  pointer-events: auto;
  position: absolute;
  top: 10px;
  z-index: 1100;

  @media (max-width: 700px) {
    right: 8px;
    top: 8px;
  }
`;

const LegendCard = styled.div`
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(217, 227, 213, 0.9);
  border-radius: 18px;
  box-shadow: 0 18px 40px rgba(58, 80, 63, 0.12);
  width: 15vw;
  max-width: 15vw;
  padding: 10px;
  pointer-events: auto;

  @media (max-width: 700px) {
    width: 40vw;
    max-width: 40vw;
  }
`;

const LegendTitle = styled.p`
  color: #4d4d4d;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin: 0;
  text-transform: uppercase;
`;

const LegendHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0;
  min-height: 24px;
`;

const LegendToggle = styled.button`
  background: rgba(0, 0, 0, 0.06);
  border: 0;
  border-radius: 999px;
  color: #4d4d4d;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  height: 24px;
  line-height: 1;
  padding: 0;
  width: 24px;

  &:hover {
    background: rgba(0, 0, 0, 0.12);
  }
`;

const LegendList = styled.ul`
  display: grid;
  gap: 8px;
  list-style: none;
  margin: 10px 0 0;
  max-height: 60dvh;
  overflow-y: auto;
  padding: 0;
  scrollbar-width: thin;
`;

const LegendItem = styled.li`
  list-style: none;
`;

const LegendButton = styled.button<{ $hidden?: boolean }>`
  align-items: center;
  background: transparent;
  border: 0;
  color: #4f4f4f;
  cursor: pointer;
  display: grid;
  font-size: 13px;
  gap: 10px;
  grid-template-columns: 26px 1fr;
  opacity: ${({ $hidden }) => ($hidden ? 0.35 : 1)};
  padding: 0;
  text-align: left;
  transition: opacity 0.2s;
  width: 100%;

  &:hover {
    color: #3e3e3e;
    opacity: ${({ $hidden }) => ($hidden ? 0.55 : 1)};
  }
`;

const LegendMarker = styled.span`
  align-items: center;
  border: 2px solid #ffffff;
  border-radius: 999px;
  color: #ffffff;
  display: inline-flex;
  font-size: 13px;
  font-weight: 700;
  height: 24px;
  justify-content: center;
  line-height: 1;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.18);
  width: 24px;

  &.map-marker--park {
    background: #6fb56f;
  }

  &.map-marker--dogs {
    background: #d19045;
  }

  &.map-marker--playground {
    background: #da785b;
  }

  &.map-marker--fountain {
    background: #56aacd;
  }

  &.map-marker--basket {
    background: #cf6a30;
  }

  &.map-marker--fitness {
    background: #8a76cc;
  }

  &.map-marker--bar {
    background: #c17e54;
  }

  &.map-marker--shop {
    background: #90bcec;
  }

  &.map-marker--laundry {
    background: #7b8ca8;
  }

  &.map-marker--restaurant {
    background: #c0392b;
  }

  &.map-marker--pharmacy {
    background: #27ae60;
  }

  &.map-marker--service {
    background: #608d9e;
  }
`;

const MapShell = styled.div`
  min-height: 100dvh;
  overflow: hidden;
  position: relative;

  .leaflet-container {
    height: 100dvh;
    width: 100%;
  }

  .leaflet-control-attribution {
    background: rgba(255, 255, 255, 0.92);
    color: #6e6e6e;
    font-size: 11px;
    padding: 4px 8px;
  }

  .leaflet-popup-content-wrapper {
    border-radius: 16px;
    box-shadow: 0 12px 30px rgba(46, 55, 47, 0.16);
  }

  .leaflet-popup-content {
    color: #4f4f4f;
    margin: 14px 16px;
    min-width: 180px;
  }

  .map-marker {
    align-items: center;
    border: 3px solid #ffffff;
    border-radius: 999px;
    box-shadow: 0 10px 24px rgba(58, 80, 63, 0.24);
    color: #ffffff;
    display: flex;
    font-size: 19px;
    font-weight: 700;
    height: 40px;
    justify-content: center;
    line-height: 1;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.18);
    width: 40px;
  }

  .map-marker--park {
    background: #6fb56f;
  }

  .map-marker--dogs {
    background: #d19045;
  }

  .map-marker--playground {
    background: #da785b;
  }

  .map-marker--fountain {
    background: #56aacd;
  }

  .map-marker--basket {
    background: #cf6a30;
  }

  .map-marker--fitness {
    background: #8a76cc;
  }

  .map-marker--bar {
    background: #c17e54;
  }

  .map-marker--shop {
    background: #90bcec;
  }

  .map-marker--laundry {
    background: #7b8ca8;
  }

  .map-marker--restaurant {
    background: #c0392b;
  }

  .map-marker--pharmacy {
    background: #27ae60;
  }

  .map-marker--service {
    background: #608d9e;
  }

  &::after {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 30%, rgba(26, 35, 28, 0.1) 100%);
    content: '';
    inset: 0;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }
  @media (max-width: 700px) {
    .leaflet-container {
      height: 100dvh;
    }
  }
`;

export const NeighborhoodMap = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<import('leaflet').Map | null>(null);
  const markerRefs = useRef<Array<import('leaflet').Marker>>([]);
  const [hiddenTones, setHiddenTones] = useState<Set<string>>(new Set());
  const [hasInteractedWithLegend, setHasInteractedWithLegend] = useState(false);
  const [legendOpen, setLegendOpen] = useState(true);

  const syncMarkerVisibility = (
    map: import('leaflet').Map,
    nextHiddenTones: Set<string>
  ) => {
    markers.forEach((marker, index) => {
      const markerRef = markerRefs.current[index];
      if (!markerRef) return;

      if (nextHiddenTones.has(marker.tone)) {
        markerRef.remove();
      } else {
        markerRef.addTo(map);
      }
    });
  };

  const toggleTone = (tone: string) => {
    const map = mapRef.current;
    if (!map) return;

    setHiddenTones((prev) => {
      const next = new Set(prev);
      if (next.has(tone)) {
        next.delete(tone);
      } else {
        next.add(tone);
      }

      syncMarkerVisibility(map, next);
      return next;
    });
  };

  const selectOnlyTone = (tone: string) => {
    const map = mapRef.current;
    if (!map) return;

    const nextHiddenTones = new Set(
      categories.map(([categoryTone]) => categoryTone).filter((categoryTone) => categoryTone !== tone)
    );

    setHiddenTones(nextHiddenTones);
    syncMarkerVisibility(map, nextHiddenTones);
  };

  const handleLegendToneClick = (tone: string) => {
    if (!hasInteractedWithLegend) {
      setHasInteractedWithLegend(true);
      selectOnlyTone(tone);
      return;
    }

    toggleTone(tone);
  };

  useEffect(() => {
    if (window.matchMedia('(max-width: 700px)').matches) {
      setLegendOpen(false);
    }
  }, []);

  useEffect(() => {
    let mapInstance: import('leaflet').Map | undefined;

    const setupMap = async () => {
      if (!containerRef.current) {
        return;
      }

      const L = await import('leaflet');

      mapInstance = L.map(containerRef.current, {
        scrollWheelZoom: false,
        zoomControl: true,
      }).setView(center, 16);

      const isMobile = window.matchMedia('(max-width: 700px)').matches;
      if (isMobile) {
        mapInstance.dragging.disable();
      }

      mapRef.current = mapInstance;
      markerRefs.current = [];

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France',
        maxZoom: 19,
      }).addTo(mapInstance);

      markers.forEach((marker) => {
        const markerIcon = iconFromCodePoint(marker.iconCodePoint);

        const icon = L.divIcon({
          className: '',
          html: `<div class="map-marker map-marker--${marker.tone}">${markerIcon}</div>`,
          iconAnchor: [20, 20],
          iconSize: [40, 40],
          popupAnchor: [0, -18],
        });

        const markerInstance = L.marker([marker.latitude, marker.longitude], { icon })
          .addTo(mapInstance as import('leaflet').Map)
          .bindPopup(
            `<strong style="display:block;color:#404040;font-size:16px;margin-bottom:6px;">${marker.title}</strong><p style="margin:0;color:#5f5f5f;line-height:1.45;">${marker.description}</p>`
          );

        markerRefs.current.push(markerInstance);
      });
    };

    setupMap().catch(() => {});

    return () => {
      markerRefs.current = [];
      mapRef.current = null;
      mapInstance?.remove();
    };
  }, []);

  return (
    <Section id="mappa">
      <MapShell>
        <div aria-label="Mappa del quartiere Val Cannuta" ref={containerRef} />
        <Legend aria-label="Legenda mappa">
          <LegendCard>
            <LegendHeader>
              <LegendTitle>Legenda</LegendTitle>
              <LegendToggle
                aria-label={legendOpen ? 'Chiudi legenda' : 'Apri legenda'}
                onClick={() => setLegendOpen((prev) => !prev)}
                type="button"
              >
                {legendOpen ? '−' : '+'}
              </LegendToggle>
            </LegendHeader>
            {legendOpen && (
              <LegendList>
                {categories.map(([tone, meta]) => (
                  <LegendItem key={tone}>
                    <LegendButton
                      $hidden={hiddenTones.has(tone)}
                      onClick={() => handleLegendToneClick(tone)}
                      type="button"
                    >
                      <LegendMarker className={`map-marker--${tone}`}>
                        {iconFromCodePoint(meta.iconCodePoint)}
                      </LegendMarker>
                      <span>{meta.label}</span>
                    </LegendButton>
                  </LegendItem>
                ))}
              </LegendList>
            )}
          </LegendCard>
        </Legend>
      </MapShell>
    </Section>
  );
};

'use client';

import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const center: [number, number] = [41.8938, 12.4125];

const markers = [
  {
    description: 'Uno dei principali spazi verdi di Val Cannuta, ideale per passeggiare, far giocare i bambini, prendere una pausa all\'aperto e vivere il quartiere ogni giorno.',
    iconCodePoint: 127794,
    latitude: 41.8969031,
    longitude: 12.4157586,
    tone: 'park',
    title: 'Parco Umberto Lenzini',
  },
  {
    description: 'L\'area cani del parco, pensata per far muovere i cani in uno spazio dedicato e per favorire gli incontri tra proprietari del quartiere.',
    iconCodePoint: 128054,
    latitude: 41.8961607,
    longitude: 12.4142197,
    tone: 'dogs',
    title: 'Area cani',
  },
  {
    description: 'L\'area giochi per bambini del parco, pensata per il gioco all\'aperto e per i momenti in famiglia nel verde del quartiere.',
    iconCodePoint: 128118,
    latitude: 41.8964799,
    longitude: 12.4144967,
    tone: 'playground',
    title: 'Area giochi bimbi',
  },
  {
    description: 'La fontanella del parco, utile per una pausa veloce e come piccolo punto di servizio durante la permanenza nell\'area verde.',
    iconCodePoint: 128167,
    latitude: 41.8982445,
    longitude: 12.4153007,
    tone: 'fountain',
    title: 'Fontanella',
  },
  {
    description: 'Il campo di basket del parco, uno spazio dedicato al gioco libero, agli allenamenti informali e ai momenti di sport all\'aperto nel quartiere.',
    iconCodePoint: 127936,
    latitude: 41.8980556,
    longitude: 12.4157222,
    tone: 'basket',
    title: 'Campo di basket',
  },
  {
    description: 'La palestra all\'aperto del parco, con attrezzi fitness utili per allenamenti leggeri, esercizi a corpo libero e attivita sportive nel verde.',
    iconCodePoint: 127947,
    latitude: 41.8978611,
    longitude: 12.4165833,
    tone: 'fitness',
    title: 'Palestra all\'aperto',
  },
] as const;

const iconFromCodePoint = (iconCodePoint: number) => String.fromCodePoint(iconCodePoint);

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
  right: 24px;
  pointer-events: auto;
  position: absolute;
  top: 24px;
  z-index: 1100;

  @media (max-width: 700px) {
    right: 16px;
    top: 16px;
  }
`;

const LegendCard = styled.div`
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(217, 227, 213, 0.9);
  border-radius: 18px;
  box-shadow: 0 18px 40px rgba(58, 80, 63, 0.12);
  max-width: 260px;
  padding: 14px 14px 12px;
  pointer-events: auto;

  @media (max-width: 700px) {
    max-width: min(74vw, 280px);
  }
`;

const LegendTitle = styled.p`
  color: #4d4d4d;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  margin: 0 0 10px;
  text-transform: uppercase;
`;

const LegendList = styled.ul`
  display: grid;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LegendItem = styled.li`
  list-style: none;
`;

const LegendButton = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  color: #4f4f4f;
  display: grid;
  font-size: 13px;
  gap: 10px;
  grid-template-columns: 26px 1fr;
  padding: 0;
  text-align: left;
  width: 100%;

  &:hover {
    color: #3e3e3e;
    cursor: pointer;
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

  const openMarkerFromLegend = (index: number) => {
    const map = mapRef.current;
    const marker = markerRefs.current[index];

    if (!map || !marker) {
      return;
    }

    map.panTo(marker.getLatLng(), { animate: true, duration: 0.6 });
    marker.openPopup();
  };

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
            <LegendTitle>Legenda</LegendTitle>
            <LegendList>
              {markers.map((marker, index) => (
                <LegendItem key={marker.title}>
                  <LegendButton onClick={() => openMarkerFromLegend(index)} type="button">
                    <LegendMarker className={`map-marker--${marker.tone}`}>
                      {iconFromCodePoint(marker.iconCodePoint)}
                    </LegendMarker>
                    <span>{marker.title}</span>
                  </LegendButton>
                </LegendItem>
              ))}
            </LegendList>
          </LegendCard>
        </Legend>
      </MapShell>
    </Section>
  );
};

'use client';

import { useEffect, useRef, useState } from 'react';
import { categories, iconFromCodePoint, markers, type MarkerTone } from './mapData';
import {
  Legend,
  LegendButton,
  LegendCard,
  LegendHeader,
  LegendItem,
  LegendList,
  LegendMarker,
  LegendTitle,
  LegendToggle,
  MapPage,
  MapPageBackArrow,
  MapPageBackLabel,
  MapPageBackLink,
  MapPageHeader,
  MapShell,
} from './styles';

export const NeighborhoodMapPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<import('leaflet').Map | null>(null);
  const markerRefs = useRef<Array<import('leaflet').Marker>>([]);
  const legendCardRef = useRef<HTMLDivElement | null>(null);
  const [selectedTone, setSelectedTone] = useState<MarkerTone | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [legendOpen, setLegendOpen] = useState(true);

  const syncMarkerVisibility = (
    map: import('leaflet').Map,
    nextHiddenTones: Set<MarkerTone>
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

  useEffect(() => {
    if (window.matchMedia('(max-width: 700px)').matches) {
      setLegendOpen(false);
    }
  }, []);

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      if (
        legendOpen &&
        window.matchMedia('(max-width: 700px)').matches &&
        legendCardRef.current &&
        !legendCardRef.current.contains(e.target as Node)
      ) {
        setLegendOpen(false);
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [legendOpen]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    const hiddenTones = selectedTone
      ? new Set(
          categories
            .map(([categoryTone]) => categoryTone)
            .filter((categoryTone) => categoryTone !== selectedTone)
        )
      : new Set<MarkerTone>();

    syncMarkerVisibility(map, hiddenTones);
  }, [mapReady, selectedTone]);

  useEffect(() => {
    let mapInstance: import('leaflet').Map | undefined;

    const setupMap = async () => {
      if (!containerRef.current) {
        return;
      }

      const L = await import('leaflet');
      const isMobile = window.matchMedia('(max-width: 700px)').matches;

      mapInstance = L.map(containerRef.current, {
        scrollWheelZoom: false,
        zoomControl: true,
      }).setView([41.8938, 12.4125], 16);

      mapRef.current = mapInstance;
      markerRefs.current = [];
      setMapReady(false);

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France',
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

      const markerBounds = L.latLngBounds(
        markers.map((marker) => [marker.latitude, marker.longitude] as [number, number])
      );

      requestAnimationFrame(() => {
        if (!mapInstance || !markerBounds.isValid()) return;

        mapInstance.invalidateSize();
        mapInstance.fitBounds(markerBounds, {
          maxZoom: 16,
          paddingBottomRight: isMobile ? [18, 18] : [220, 28],
          paddingTopLeft: isMobile ? [18, 18] : [28, 28],
        });
      });

      setMapReady(true);
    };

    setupMap().catch(() => {});

    return () => {
      markerRefs.current = [];
      mapRef.current = null;
      setMapReady(false);
      mapInstance?.remove();
    };
  }, []);

  return (
    <MapPage>
      <MapPageHeader>
        <MapPageBackLink href="/">
          <MapPageBackArrow aria-hidden="true">←</MapPageBackArrow>
          <MapPageBackLabel>Torna alla homepage</MapPageBackLabel>
        </MapPageBackLink>
      </MapPageHeader>
      <MapShell>
        <div aria-label="Mappa del quartiere Val Cannuta" ref={containerRef} />
        <Legend aria-label="Legenda mappa">
          <LegendCard ref={legendCardRef}>
            <LegendHeader
              aria-label={legendOpen ? 'Chiudi legenda' : 'Apri legenda'}
              onClick={() => setLegendOpen((prev) => !prev)}
              type="button"
            >
              <LegendTitle>Legenda</LegendTitle>
              <LegendToggle aria-hidden="true">{legendOpen ? '−' : '+'}</LegendToggle>
            </LegendHeader>
            {legendOpen && (
              <LegendList>
                {categories.map(([tone, meta]) => (
                  <LegendItem key={tone}>
                    <LegendButton
                      $hidden={selectedTone !== null && selectedTone !== tone}
                      onClick={() => setSelectedTone((prev) => (prev === tone ? null : tone))}
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
    </MapPage>
  );
};

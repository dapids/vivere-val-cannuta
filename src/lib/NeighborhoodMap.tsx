'use client';

import { useState } from 'react';
import { NeighborhoodMapModal } from './neighborhood-map/NeighborhoodMapModal';
import { OpenMapButton, OpenMapIcon } from './neighborhood-map/styles';

export const NeighborhoodMap = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <>
      <OpenMapButton onClick={() => setIsMapOpen(true)} type="button">
        <OpenMapIcon aria-hidden="true">
          <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21s6-5.6 6-10a6 6 0 1 0-12 0c0 4.4 6 10 6 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <circle cx="12" cy="11" r="2.1" stroke="currentColor" strokeWidth="2" />
          </svg>
        </OpenMapIcon>
        <span>Scopri la mappa del quartiere</span>
      </OpenMapButton>

      {isMapOpen && <NeighborhoodMapModal onClose={() => setIsMapOpen(false)} />}
    </>
  );
};

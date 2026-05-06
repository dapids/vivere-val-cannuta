'use client';

import { useState } from 'react';
import { NeighborhoodMapModal } from './neighborhood-map/NeighborhoodMapModal';
import { OpenMapButton } from './neighborhood-map/styles';

export const NeighborhoodMap = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <>
      <OpenMapButton onClick={() => setIsMapOpen(true)} type="button">
        Scopri la mappa del quartiere
      </OpenMapButton>

      {isMapOpen && <NeighborhoodMapModal onClose={() => setIsMapOpen(false)} />}
    </>
  );
};

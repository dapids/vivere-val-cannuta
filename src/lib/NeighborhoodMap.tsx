'use client';

import Link from 'next/link';
import { OpenMapButton, OpenMapIcon } from './neighborhood-map/styles';

export const NeighborhoodMap = () => {
  return (
    <Link href="/mappa" legacyBehavior passHref>
      <OpenMapButton>
          <OpenMapIcon aria-hidden="true">
            <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21s6-5.6 6-10a6 6 0 1 0-12 0c0 4.4 6 10 6 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <circle cx="12" cy="11" r="2.1" stroke="currentColor" strokeWidth="2" />
            </svg>
          </OpenMapIcon>
          <span>Mappa del quartiere</span>
      </OpenMapButton>
    </Link>
  );
};

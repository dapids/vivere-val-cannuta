import Link from 'next/link';
import styled from 'styled-components';

export const OpenMapButton = styled.a`
  align-items: center;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid #9fb7a0;
  border-radius: 999px;
  box-shadow: 0 10px 28px rgba(58, 80, 63, 0.12);
  color: #4b6750;
  cursor: pointer;
  display: inline-flex;
  gap: 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.08em;
  min-height: 42px;
  padding: 0 18px;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: #ffffff;
    border-color: #7fa582;
    box-shadow: 0 14px 30px rgba(58, 80, 63, 0.18);
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #81c784;
    outline-offset: 3px;
  }
`;

export const OpenMapIcon = styled.span`
  align-items: center;
  display: inline-flex;
  flex-shrink: 0;
  height: 22px;
  justify-content: center;
  line-height: 0;
  width: 22px;

  svg {
    display: block;
    height: 22px;
    width: 22px;
  }
`;

export const MapPage = styled.main`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100dvh;
  min-height: 100dvh;
`;

export const MapPageHeader = styled.header`
  align-items: center;
  background: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid rgba(217, 227, 213, 0.9);
  display: flex;
  justify-content: flex-start;
  min-height: 46px;
  padding: 6px 10px;
  position: relative;
  z-index: 1200;

  @media (max-width: 700px) {
    padding: 4px 10px;
  }
`;

export const MapPageBackLink = styled(Link)`
  align-items: center;
  background: rgba(0, 0, 0, 0.07);
  border-radius: 999px;
  color: #4d4d4d;
  display: inline-flex;
  font-size: 13px;
  font-weight: 700;
  gap: 6px;
  height: 30px;
  justify-content: center;
  letter-spacing: 0.04em;
  line-height: 1;
  min-width: 30px;
  padding: 0 12px;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: rgba(0, 0, 0, 0.12);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #81c784;
    outline-offset: 2px;
  }

  @media (max-width: 700px) {
    align-self: auto;
  }
`;

export const MapPageBackArrow = styled.span`
  font-size: 15px;
  line-height: 1;
  transform: translateY(-0.5px);
`;

export const MapPageBackLabel = styled.span`
  line-height: 1;
`;

export const Legend = styled.aside`
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

export const LegendCard = styled.div`
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(217, 227, 213, 0.9);
  border-radius: 8px;
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

export const LegendTitle = styled.p`
  color: #4d4d4d;
  display: inline-flex;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1;
  margin: 0;
  text-transform: uppercase;
`;

export const LegendHeader = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: 0;
  min-height: 26px;
  padding: 0;
  width: 100%;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #81c784;
    outline-offset: 4px;
  }
`;

export const LegendToggle = styled.span`
  align-items: center;
  color: #6a6a6a;
  display: inline-flex;
  font-size: 18px;
  font-weight: 700;
  height: 24px;
  justify-content: center;
  line-height: 1;
  padding: 0;
  transform: translateY(-0.5px);
  width: 24px;
`;

export const LegendList = styled.ul`
  display: grid;
  gap: 8px;
  list-style: none;
  margin: 10px 0 0;
  max-height: 60dvh;
  overflow-y: auto;
  padding: 0;
  scrollbar-width: thin;
`;

export const LegendItem = styled.li`
  list-style: none;
`;

export const LegendButton = styled.button<{ $hidden?: boolean }>`
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
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: #3e3e3e;
    opacity: ${({ $hidden }) => ($hidden ? 0.55 : 1)};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #81c784;
    outline-offset: 2px;
  }
`;

export const LegendMarker = styled.span`
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

export const MapShell = styled.div`
  flex: 1;
  min-height: 0;
  overflow: hidden;
  position: relative;

  button,
  a,
  .leaflet-control-zoom a {
    -webkit-tap-highlight-color: transparent;
  }

  button:focus:not(:focus-visible),
  a:focus:not(:focus-visible),
  .leaflet-control-zoom a:focus:not(:focus-visible) {
    outline: none;
  }

  .leaflet-container {
    height: 100%;
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
      height: 100%;
    }
  }
`;

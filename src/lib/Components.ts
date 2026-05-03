'use client';

import styled, { keyframes } from 'styled-components';

export const AboveFolderContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  position: relative;

  &::after {
    background-image: url(/background.webp);
    background-position: center;
    background-repeat: repeat-x;
    background-size: auto 100%;
    bottom: 0;
    content: '';
    height: 200px;
    left: 0;
    position: absolute;
    right: 0;
    width: 100%;
    z-index: 0;
  }

  & > * {
    z-index: 1;
  }
`;

export const Header = styled.header`
  align-items: center;
  border-bottom: 1px solid #dddddd;
  display: flex;
  height: 70px;
  width: 100%;

  & > * {
    margin: 0 8px;
  }
`

export const Hero = styled.div`
  align-content: center;
  flex-direction: column;
  flex-grow: 1;
  margin: 20px auto 0;
  max-width: 800px;
  padding: 0 20px;
`;

export const H1 = styled.h1`
  color: #81C784;
  display: flex;
  flex-wrap: wrap;
  font-family: "Playfair Display";
  font-size: 55px;
  letter-spacing: -.02em;
  margin: 0 0 20px;
`;

export const H2 = styled.h2`
  font-size: 20px;
  margin: 0 0 20px;
  text-transform: uppercase;
`;

export const Dot = styled.span`
  color: #999999;
`

export const Button = styled.a`
  border: 3px solid #81C784;
  color: #81C784;
  display: inline-block;
  margin: 10px 0 0;
  padding: 10px 20px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background-color: #81C784;
    color: #f9f9f9;
  }
`;

export const Number = styled.span`
  color: #81C784;
  font-size: 20px;
  font-weight: bold;
`

export const Margin = styled.div`
  margin: 0 0 250px;
`

const bounce = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(8px);
  }

  60% {
    transform: translateY(4px);
  }
`;

export const ScrollCtaWrap = styled.div`
  align-items: center;
  bottom: 132px;
  display: flex;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  z-index: 1;

  @media (max-width: 700px) {
    bottom: 116px;
  }
`;

export const ScrollCta = styled.a`
  align-items: center;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid #d9e3d5;
  border-radius: 999px;
  box-shadow: 0 10px 28px rgba(58, 80, 63, 0.12);
  color: #6d8f71;
  display: inline-flex;
  font-size: 14px;
  font-weight: 700;
  gap: 10px;
  letter-spacing: 0.08em;
  padding: 10px 16px 10px 18px;
  pointer-events: auto;
  text-decoration: none;
  text-transform: uppercase;

  &::after {
    align-items: center;
    border: 2px solid #cfe0c8;
    border-radius: 999px;
    content: '↓';
    display: inline-flex;
    font-size: 18px;
    height: 34px;
    justify-content: center;
    line-height: 1;
    transition: background-color 0.2s ease;
    width: 34px;
  }

  animation: ${bounce} 1.8s ease-in-out infinite;

  &:hover {
    animation-play-state: paused;
  }

  &:hover::after {
    background-color: #f1f7ee;
  }
`;

export const BelowFoldSection = styled.section`
  margin: 0;
  width: 100%;
`;

export const Footer = styled.footer`
  font-size: 15px;
  padding: 4px 24px;
  text-align: center;
`;

'use client';

import styled from 'styled-components';

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
`;

export const Button = styled.a`
  align-items: center;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid #9fb7a0;
  border-radius: 999px;
  box-shadow: 0 10px 28px rgba(58, 80, 63, 0.12);
  color: #4b6750;
  display: inline-flex;
  gap: 10px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.08em;
  min-height: 42px;
  padding: 0 18px;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

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
    outline-offset: 2px;
  }
`;

export const CtaIcon = styled.span`
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

export const Number = styled.span`
  color: #81C784;
  font-size: 20px;
  font-weight: bold;
`

export const CtaStack = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 10px;
  margin-top: 14px;

  & > * {
    align-items: center;
    display: inline-flex;
    height: 42px;
    margin: 0;
  }
`;

export const InstagramButton = styled(Button)`
  background: rgba(255, 242, 248, 0.92);
  border-color: #e7b4c7;
  color: #8c3e61;

  &:hover {
    background: rgba(255, 236, 244, 0.98);
    border-color: #d78fab;
    box-shadow: 0 14px 30px rgba(126, 62, 91, 0.16);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline-color: #c05a87;
  }
`;

export const Margin = styled.div`
  margin: 0 0 250px;
`;

export const Footer = styled.footer`
  border-top: 1px solid #dddddd;
  font-size: 13px;
  margin-top: 8px;
  padding: 4px 24px;
  text-align: center;
`;

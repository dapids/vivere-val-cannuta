'use client';

import styled from 'styled-components';

export const Container = styled.div`
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

export const Footer = styled.footer`
  font-size: 15px;
  padding: 4px 24px;
  text-align: center;
`;

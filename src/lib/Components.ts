'use client';

import styled from 'styled-components';

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !['background'].includes(prop),
})<{ background: string }>`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  margin: 0 auto;
  position: relative;

  &::after {
    background-image: ${({ background }) => `url(${background})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto 100%;
    bottom: 0;
    content: '';
    height: 300px;
    left: 0;
    position: absolute;
    right: 0;
    width: 100%;
    z-index: 0;
  }

  * {
    z-index: 1;
  }
`;

export const Header = styled.header`
  align-items: center;
  border-bottom: 1px solid #dddddd;
  display: flex;
  height: 70px;
  left: 0;
  padding: 0 8px;
  position: sticky;
  right: 0;
  top: 0;
`

export const Hero = styled.div`
  align-content: center;
  flex-grow: 1;
  margin: -200px auto 0;
  max-width: 800px;
  padding: 0 24px;
`;

export const H1 = styled.h1`
  color: #81C784;
  display: flex;
  flex-wrap: wrap;
  font-family: "Playfair Display";
  font-size: 60px;
  letter-spacing: -.02em;
  margin: 0 auto 20px;
`;

export const H2 = styled.h2`
  font-size: 20px;
  margin: 0 auto 20px;
  text-transform: uppercase;
`;

export const Dot = styled.span`
  color: #999999;
`

export const Button = styled.a`
  border: 3px solid #81C784;
  color: #81C784;
  display: inline-block;
  margin: 10px auto 0;
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

export const Footer = styled.footer`
  font-size: 15px;
  padding: 4px 24px;
  text-align: center;
`;

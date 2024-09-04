'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
  }

  body {
    background-color: #FFFFFF;
    color: #999999;
    font-family:  Inter, sans-serif;
    font-size: 18px;
    margin: 0;
    overflow-x: none;
  }

  a {
    color: #81C784;
  }
`;

'use client';

import Image from 'next/image';
import logo from './logo-192x192.png'
import styled from 'styled-components';

const goToTop = () => {
  window.scroll(0, 0)
}

const Button = styled.button`
	border: none;
	cursor: pointer;
	padding: 0;
  background: none;

  :hover {
    cursor: pointer;
  }
`

export const Logo = () => <Button onClick={goToTop}><Image alt="Logo di Vivere Val Cannuta" height={60} src={logo}></Image></Button>

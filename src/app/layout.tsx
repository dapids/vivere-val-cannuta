import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry';
import { GlobalStyle } from './GlobalStyle';
import { inter, playfairDisplay } from '@/app/fonts';

export const metadata: Metadata = {
  description: "Community dedicata a tutti gli abitanti del quartiere Val Cannuta a Roma.",
  title: "Vivere Val Cannuta - Roma",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.className} ${playfairDisplay}`}>
      <GoogleAnalytics gaId="G-WSEC0GBNE1" />
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

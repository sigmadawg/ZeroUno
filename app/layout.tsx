import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
import { StarknetConfig } from "@starknet-react/core";
import connector from "../utils/starknetConnector";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ZeroUno",
  description: "Onchain game built on top of Dojo",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StarknetConfig autoConnect connectors={[connector]} chains={[]} provider={() => null}>
          {children}
        </StarknetConfig>
      </body>
    </html>
  );
}


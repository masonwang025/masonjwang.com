import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/dark.css";
import {
  mono, sans
} from '../lib/constants/fonts';

export const metadata: Metadata = {
  title: "Mason Wang",
  description: "Learning how to maximize my shine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontClasses = [
    mono, sans
  ].map(font => 'variable' in font ? font.variable : '').join(' ');
  return (
    <html lang="en" className={fontClasses}>
      <body>{children}</body>
    </html>
  );
}
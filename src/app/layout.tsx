import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/dark.css";
// Import the font variables
import {
  header400, header500, header600, header700,
  body400, body500, body600, body700
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
  // Construct a string with all font variables to apply to the className
  const fontClasses = [
    header400, header500, header600, header700,
    body400, body500, body600, body700
  ].map(font => 'variable' in font ? font.variable : '').join(' ');
  return (
    <html lang="en" className={fontClasses}>
      <body>{children}</body>
    </html>
  );
}
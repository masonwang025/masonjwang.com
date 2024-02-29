import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/dark.css";

const serif = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin']
})
const sans = Open_Sans({
  variable: '--font-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Mason Wang",
  description: "Learning how to maximize my shine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

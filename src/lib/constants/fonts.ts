import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

const mono = IBM_Plex_Mono({
  variable: "--font-family-mono",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const sans = IBM_Plex_Sans({
  variable: "--font-family-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export { mono, sans };

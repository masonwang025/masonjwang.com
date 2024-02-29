import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

/**
 * We need to do this because they aren't variable fonts
 */

const header400 = IBM_Plex_Mono({
  variable: "--font-header-400",
  weight: "400",
  subsets: ["latin"],
});

const header500 = IBM_Plex_Mono({
  variable: "--font-header-500",
  weight: "500",
  subsets: ["latin"],
});

const header600 = IBM_Plex_Mono({
  variable: "--font-header-600",
  weight: "600",
  subsets: ["latin"],
});

const header700 = IBM_Plex_Mono({
  variable: "--font-header-700",
  weight: "700",
  subsets: ["latin"],
});

const body400 = IBM_Plex_Sans({
  variable: "--font-body-400",
  weight: "400",
  subsets: ["latin"],
});

const body500 = IBM_Plex_Sans({
  variable: "--font-body-500",
  weight: "500",
  subsets: ["latin"],
});

const body600 = IBM_Plex_Sans({
  variable: "--font-body-600",
  weight: "600",
  subsets: ["latin"],
});

const body700 = IBM_Plex_Sans({
  variable: "--font-body-700",
  weight: "700",
  subsets: ["latin"],
});

export {
  header400,
  header500,
  header600,
  header700,
  body400,
  body500,
  body600,
  body700,
};

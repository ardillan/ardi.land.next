import { Inter } from "next/font/google";
import localFont from "next/font/local";

const fontInter400 = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fontFraiche = localFont({ src: "../fonts/fraiche/fraiche.otf" });

export { fontInter400, fontFraiche };

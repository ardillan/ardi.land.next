import { Inter } from "next/font/google";
import localFont from "next/font/local";

const fontInter400 = Inter({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fontFraiche = localFont({ src: "../fonts/fraiche/fraiche.otf" });

export { fontInter400, fontFraiche };

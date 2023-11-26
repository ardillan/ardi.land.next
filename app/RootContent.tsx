"use client";

import React from "react";

import { fontFraiche, fontInter } from "@/appComponents/Fonts";
import { useMobile } from "@/context/MobileContext";

import { useTheme } from "./context/ThemeContext";

const RootContent = ({ children }: { children: JSX.Element }) => {
  const { isMenuOpen } = useMobile();
  const { darkMode } = useTheme();

  return (
    <html lang="es">
      <body
        className={`${fontInter.variable} ${fontFraiche.variable}`}
        style={{ overflow: isMenuOpen ? "hidden" : "initial" }}
        data-dark-theme={darkMode}
      >
        {children}
      </body>
    </html>
  );
};

export default RootContent;

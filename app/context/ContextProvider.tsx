"use client";

import React from "react";

import { MobileProvider } from "@/context/MobileContext";
import { ThemeProvider } from "@/context/ThemeContext";

const ContextProvider = ({ children }: { children: JSX.Element }) => {
  return (
    <MobileProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </MobileProvider>
  );
};

export default ContextProvider;

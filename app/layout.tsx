import "@/styles/global.css";

import React from "react";

import ContextProvider from "@/context/ContextProvider";

import RootContent from "./RootContent";

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <ContextProvider>
      <RootContent>{children}</RootContent>
    </ContextProvider>
  );
}

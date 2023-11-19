import "@/styles/global.css";

import React from "react";

import { fontFraiche, fontInter } from "@/appComponents/Fonts";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fontInter.variable} ${fontFraiche.variable}`}>
        {children}
      </body>
    </html>
  );
}
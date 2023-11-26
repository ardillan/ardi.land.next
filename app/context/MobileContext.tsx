"use client";

import React, { createContext, useContext, useState } from "react";

interface IMobile {
  isMenuOpen: boolean;
  toggleMenuMobile: () => void;
}

const MobileContext = createContext<IMobile>({
  isMenuOpen: false,
  toggleMenuMobile: () => {},
});

export const useMobile = () => {
  return useContext(MobileContext);
};

export const MobileProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuMobile = () => setIsMenuOpen(!isMenuOpen);
  return (
    <MobileContext.Provider value={{ isMenuOpen, toggleMenuMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

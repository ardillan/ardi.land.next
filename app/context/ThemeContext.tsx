"use client";

import React, { createContext, useContext, useState } from "react";

interface ITheme {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ITheme>({
  darkMode: true,
  toggleDarkMode: () => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

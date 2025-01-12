'use client';
import { createContext, useContext, useState } from 'react';

type Theme = {
 colors: {
  primary: string;
  secondary: string;
 };
};

const defaultTheme: Theme = {
 colors: {
  primary: '#007bff',
  secondary: '#6c757d',
 },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({
 children,
 theme = defaultTheme,
}: {
 children: React.ReactNode;
 theme?: Theme;
}) => {
 return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
export const useTheme = () => useContext(ThemeContext);

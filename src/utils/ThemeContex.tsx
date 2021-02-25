import { createContext, useContext } from 'react';

export type ThemeContextType = {
  theme: boolean;
}

export const ThemeContext = createContext<ThemeContextType>({ theme: false});
export const useTheme = () => useContext(ThemeContext);
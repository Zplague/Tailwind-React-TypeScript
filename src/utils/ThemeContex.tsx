import React, { useContext } from 'react'

type ThemeContextType = {
  enabledDark: boolean,
  toggleTheme: (enabled:boolean) => void
};

const ThemeContextDefault:ThemeContextType  = { enabledDark:false, toogleTheme:(enabled) => !enabled }
const ThemeContext = React.createContext<ThemeContextType>(ThemeContextDefault)

export const useTheme = () => useContext(ThemeContext);

/* export const ThemeProvider = (children: React.ReactNode) => {
  const [theme, setThemeDark] = React.useState(ThemeContextDefault)

  const  toggleTheme = () => {
    setThemeDark({enabledDark: !theme.enabledDark})
  }

  return (
    <ThemeContext.Provider value={{toggleTheme, theme}}>
        {children}
    </ThemeContext.Provider>
  )
} */

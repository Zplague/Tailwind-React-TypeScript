import React from 'react'

type ThemeContextType = {
  theme: string;
  setTheme?: (value: string) => void;
};

const ThemeContextDefault = { theme: '' }
const ThemeContext = React.createContext<ThemeContextType | undefined>(ThemeContextDefault)
const ThemeContextUpdate = React.createContext('')

export const ThemeProvider = (children: React.ReactNode) => {
  const [theme, setThemeDark] = React.useState({ theme: '' })

  function toggleTheme(): any {
    setThemeDark({ theme: 'dark' })
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeContextUpdate.Provider value={'dark'}>
        {children}
      </ThemeContextUpdate.Provider>
    </ThemeContext.Provider>
  )
}

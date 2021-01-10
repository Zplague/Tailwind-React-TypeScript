import React from 'react'

type ThemeContextType = {
  theme: string;
  setTheme: (value: string) => void;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)
const ThemeContextUpdate = React.createContext('')

export const ThemeProvider = ( children:React.ReactNode ) => {
  const [theme, setTheme] = React.useState('')

  function toggleTheme():any {
    setTheme('dark')
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeContextUpdate.Provider value={toggleTheme}>
        {children}
      </ThemeContextUpdate.Provider>
    </ThemeContext.Provider>
  )
}

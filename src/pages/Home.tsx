import React from 'react'
import { Paragraph } from '../components/Paragraph'
import Test from '../components/test'

export const ThemeContext = React.createContext('')

export const Home = () => {
  const [theme, setTheme] = React.useState(false)
  const toggleDark = () => { setTheme(!theme) }

  return (
    <>
      <header className={`bg-white ${theme ? 'dark' : ''}`}>
      <button
        onClick={toggleDark}
        className="
          dark:text-red-50 
          dark:bg-blue-800 
          shadow-sm 
          bg-white 
          text-gray-900 
          p-5">
        dark mode toggle
      </button>
        <Paragraph />
        <Test />
      </header>
    </>
  );
}

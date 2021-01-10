import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeProvider } from '../../utils/ThemeContex'

export const Nav = () => {
  return (
    <>
      <ThemeProvider>
        <nav>
          <button
            onClick={toggleTheme}
            className="
              dark:text-red-50 
              dark:bg-blue-800 
              shadow-sm 
              bg-white 
              text-gray-900 
              p-5">
            dark mode toggle
          </button>
          <ul className="flex justify-center">
            <li className="text-base p-2 text-jedi-2 hover:text-jedi-1 dark:text-sith-3  dark:hover:text-sith-4 ">
              <Link to="/"> Home </Link>
            </li>
            <li className="text-base p-2 text-indigo-600">
              <Link to="/planets"> Planets </Link>
            </li>
            <li className="text-base p-2 text-indigo-600">
              <Link to="/people"> People </Link>
            </li>
          </ul>
        </nav>
      </ThemeProvider>
    </>
  )
}

import React from 'react'

export const ToogleTheme = () => {
  const [theme, setTheme] = React.useState(false)
  const toggleDark = () => { setTheme(!theme) }

  return (
    <div className={`${theme ? 'dark' : ''}`}>
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
    </div>
  )
}

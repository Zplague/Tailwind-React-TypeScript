import * as React from 'react';
import './App.css';
import FetchRandomUser from './components/test'

function App() {
  const [theme,setTheme] = React.useState(false)
  const toggleDark = () => {setTheme(!theme)}
  return (
    <div className="App">
      <header className={`App-header ${theme?'dark':''}`}>
        <p className="bg-blue-200 dark:bg-black  m-4 p-7 text-6xl animate-pulse dark:text-gray-300">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <FetchRandomUser/>
        <button onClick={toggleDark} className="bg-white shadow-sm dark:bg-blue-800 text-gray-900 dark:text-red-50 p-5">dark mode toggle</button>
      </header>
    </div>

  );
}

export default App;

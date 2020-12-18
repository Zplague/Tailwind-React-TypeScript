import React from "react";
import './styles.css'

function Toogle (){
  const [ theme, setTheme ] = React.useState('light')

  const toDark = () => setTheme('dark');
  const toLight = () => setTheme('light');
  
  return (
    <div className={theme}>
      {theme === "light"
        ? <button onClick={toDark}>🔦</button>
        : <button onClick={toLight}>💡</button>}
    </div>
  )
}

export default Toogle;

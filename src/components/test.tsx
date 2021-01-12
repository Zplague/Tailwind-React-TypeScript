import React, { useEffect, useState } from 'react'

function Test() {

  
  const [item, setItem] = useState({

  });


  useEffect(() => {
    fetch("https:swapi.dev/api/people/1/")
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, []);
  
  return (
    <div>
      <span>
        {item.name}
        {console.log(item)}      
      </span>
    </div>
  )
}

export default Test

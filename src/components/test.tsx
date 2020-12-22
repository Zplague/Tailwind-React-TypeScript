import React, { useEffect, useState } from 'react'

function Test() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState({
    name:''
  });

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  },[count])

  useEffect(() => {
    fetch("https:swapi.dev/api/planets/1/")
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, []);
  console.log("item", item);

  return (
    <div>
      <p>You clicked {count} times</p>

      <ul>
        {item.hasOwnProperty('name') && item.name}
      </ul>
      
      <button className="m-8 p-8 border-r-8 border-red-700 bg-green-400 text-gray-800 hover:text-red-400 hover:bg-blue-400 transition-all" 
              onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button className="m-8 p-8" onClick={() => setCount(count - 1)}>
        Click me to substract
      </button>
    </div>
  )
}

export default Test

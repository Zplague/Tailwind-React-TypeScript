import { useState, useEffect } from 'react';

function useGetRepos(object: string, index: number) {

  interface repos {
    name: string,
    climate?: string,
    url: string
  }

  const [item, setItem] = useState<repos>()

  useEffect(() => {
    fetch(`http://swapi.dev/api/${object}/${index}/`)
      .then((response) => response.json())
      .then((data) => setItem(data))
  }, []);

  return item
}

export default useGetRepos 
function getRepos (planet:string, index:number) {
    return fetch(`http swapi.dev/api/${planet}/${index}/`)
      .then((res) => res.json())
      .then((repos) => {
        if (repos.message) {
          throw new Error((repos.message, planet))
        }
        return planet
      })
  }

export default getRepos

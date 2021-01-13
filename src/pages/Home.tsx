import React, { useEffect, useState } from "react";
import { List } from "../components/List";

export const Starships = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);


  const getPeople = async (object: string) => {
    const response = await fetch(`http://swapi.dev/api/${object}/?page=${page}`)
    const users = await response.json()
    setData(users.results)
  }

  useEffect(() => {
    getPeople('starships')
  }, [page]);
  

  const next = () => {
    setPage(page + 1)
  }

  const prev = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return <>{<List next={next} prev={prev} data={data} />}</>;
};

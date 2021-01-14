import React, { useEffect, useState } from 'react'
import { List } from '../components/List'
import ReactLoading from "react-loading"

export const People = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true)


  const getPeople = async (object: string) => {
    const response = await fetch(`http://swapi.dev/api/${object}/?page=${page}`)
    const users = await response.json()
    setLoading(false)
    setData(users.results)
  }

  useEffect(() => {
    getPeople('people')
  }, [page]);
  

  const next = () => {
    setPage(page + 1)
  }

  const prev = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <> 
    {
      loading 
        ? <ReactLoading type={"spin"} color="#a8a29e" height={60} width={60} className="mx-12" />
        : <List next={next} prev={prev} data={data} />
    }
    </>
  );
}


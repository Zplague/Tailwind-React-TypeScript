import { useState } from "react";
interface Props {
  param: string;
  index: number;
  pagination?: "next" | "prev";
}

const useFetchApi = ({param, index, pagination}:Props): any => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async ({ param, index, pagination }: Props) => {
    const response = await fetch(`http://swapi.dev/api/${param}/?page=${page}`);
    const result = await response.json();
    setData(result.results);

  switch (pagination) {
    case "next":
      setPage(index + 1);
      break;
    case "prev":
      if (page > 1) {
        setPage(index - 1);
      }
      break;
    default:
      break;
  }
  return data;
};

}
export default useFetchApi;
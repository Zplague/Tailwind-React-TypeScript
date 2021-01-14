import React, { useEffect, useState } from "react";
import './starsBg.styles.css'

type starList = {
  data: any;
  next: () => void;
  prev: () => void;
};

export const List = ({ data, next, prev }: starList) => {
  const [detail, setDetail] = useState({});
  const [item, setItem] = useState<any>([]);

  useEffect(() => {
    const itemArray = [];
    for (const [key, value] of Object.entries(detail)) {
      itemArray.push(<li className="p-1 text-xl text-coolGray-300 font-semibold">{`${key}: ${value}`}</li>);
    }
    setItem(itemArray);
  }, [detail]);

  const handleDetail = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setDetail(data);
  };

  return (
    <>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div className="flex">
        <div className="m-4 flex justify-center flex-col items-start">
          <ul className="mx-5 text-coolGray-300 dark:text-blueGray-50 font-semibold text-lg">
            {data.map((obj: any, index: number) => (
              <li
                className="line p-2 transition-all hover:text-jedi-1 dark:hover:text-sith-3"
                key={index}
                onClick={() => handleDetail(obj.url)}
              >
                {obj.name}
              </li>
            ))}
          </ul>
          <div className="m-3">
            <button
              className="
              dark:text-sith-3
              dark:bg-blueGray-900
              dark:border-sith-3
              border-jedi-7
              border-b-2
              font-semibold
              shadow-xl
              transition-shadow
              bg-jedi-1 
              text-gray-50
              p-2
              m-4"
              onClick={prev}
            >
              Prev
            </button>
            <button
              className="
              dark:text-sith-3
              dark:bg-blueGray-900
              dark:border-sith-3
              border-jedi-7
              border-b-2
              font-semibold
              shadow-xl
              transition-shadow
              bg-jedi-1 
              text-gray-50
              p-2
              my-4
              mx-1"
              onClick={next}
            >
              Next
            </button>
          </div>
        </div>
        <ul className="info shadow-2xl mx-24 px-10 py-4 justify-center flex flex-col bg-blueGray-800">
          {item.map((detail: string) => {
            return detail;
          })}
        </ul>
      </div>
    </>
  );
};

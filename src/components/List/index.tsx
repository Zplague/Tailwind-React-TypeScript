import React from "react";

export type starList = {
  data: any;
  next: () => void;
  prev: () => void;
};

export const List = ({ data, next, prev }: starList) => {
  return (
    <>
      <div className="m-4 flex justify-center flex-col items-start">
        <ul className="mx-5 text-coolGray-800 dark:text-blueGray-50 font-semibold text-lg">
          {data.map((obj: any, index: number) => (
            <li
              className="line p-2 transition-all hover:text-jedi-1 dark:hover:text-sith-3"
              key={index}
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
              border-jedi-2
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
          <button className="
              dark:text-sith-3
              dark:bg-blueGray-900
              dark:border-sith-3
              border-jedi-2
              border-b-2
              font-semibold
              shadow-xl
              transition-shadow
              bg-jedi-1 
              text-gray-50
              p-2
              my-4
              mx-1"
            onClick={next}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

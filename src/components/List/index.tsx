import React from 'react'

export type starList ={
  data: any,
  next: ()=> void,
  prev: ()=> void,
}

export const List = ({data, next, prev}:starList) => {
  return (
    <>
    <div className="m-4 flex justify-center flex-col items-center">
      <ul className="m-3 border-sith-3 divide-jedi-1">
        {data.map((obj:any, index:number) => <li className="item" key={index}>{obj.name}</li>)}
      </ul>
      <div className="m-3">
        <button className="button" onClick={prev}>Prev</button>
        <button className="button" onClick={next}>Next</button>
      </div>
    </div>
    </>
  )
}

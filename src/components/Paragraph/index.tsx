import React, { useEffect, useState } from 'react'
import useGetRepos from '../../utils/useGetRepos'

export const Paragraph = () => {

  const repo = useGetRepos

  
  useGetRepos("planets", 2)
    console.log("asdasdadadadad",repo)
  


  return (
    <p className="bg-blue-200 dark:bg-black m-4 p-7 text-6xl animate-pulse dark:text-gray-300">
      Edit <code>src/App.tsx</code> and save to reload typescripts.
    </p>
  )
}

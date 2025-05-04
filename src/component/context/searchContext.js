"use client"
import React, { createContext, useContext, useState } from 'react'

const SContext = createContext();

export const useSearch = ()=>{
    return useContext(SContext);
}

const SearchContext = ({children}) => {

    const[searchText,setSearchText] = useState("");

  return (
    <SContext.Provider value={{searchText,setSearchText}}>
        {children}
    </SContext.Provider>
  )
}

export default SearchContext
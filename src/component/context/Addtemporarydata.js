"use client"
import data from "@/utils/data.json"

import React, { createContext, useContext, useState } from 'react'

export const CreateNewBlog = createContext();

export const useCreate = ()=>{
    return useContext(CreateNewBlog)
}



const CreateNewBlogProvider = ({children}) => {

   const[blogdata,setBlogdata] = useState(data);

   const addNewBlogData = (newblog)=>{
       setBlogdata((prev)=>[...prev,newblog])
   }
  return (
   <CreateNewBlog.Provider value={{blogdata,addNewBlogData}}>
    {children}
   </CreateNewBlog.Provider>
  )
}

export default CreateNewBlogProvider
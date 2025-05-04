import React from 'react'
import CreateNewBlogProvider from './Addtemporarydata'
import SearchContext from './searchContext'
import Navbar from '../Navbar'

const LayoutProvider = ({children}) => {
  return (
    <CreateNewBlogProvider>
    <SearchContext>
      <Navbar />
      <main className="pt-20">{children}</main>
      
    </SearchContext>
  </CreateNewBlogProvider>
  )
}

export default LayoutProvider
import React from 'react'
import Header from '../header'

const Layout = ({ children}) => {
  return (
    <div className='w-full h-full'>
    <Header />
    {children}
    </div>
  )
}

export default Layout
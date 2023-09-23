import React from 'react'
import Header from '../header'

const Layout = ({ children}) => {
  return (
    <div className='w-full h-full max-w-5xl mx-auto'>
    <Header />
    {children}
    </div>
  )
}

export default Layout
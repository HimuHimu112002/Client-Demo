import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
const Rootcomponents = () => {
  return (
    <div>
        <Header/>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Rootcomponents
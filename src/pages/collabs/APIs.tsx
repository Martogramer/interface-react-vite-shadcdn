import React from 'react'
import About from '../store/about/About'
import { Outlet } from 'react-router-dom'


const APIs:React.FC = () => {
  return (
    <div>
      <About />
      <Outlet />
    </div>
  )
}

export default APIs

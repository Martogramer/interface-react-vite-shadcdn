import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
  return (
    <div>
      <p>Ruta layout admin</p>
      <Outlet />
    </div>
  )
}

export default LayoutAdmin

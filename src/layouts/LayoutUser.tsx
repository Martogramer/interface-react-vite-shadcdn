import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutUser = () => {
  return (
    <div>
      <p>Ruta layout user</p>
      <Outlet />
    </div>
  )
}

export default LayoutUser

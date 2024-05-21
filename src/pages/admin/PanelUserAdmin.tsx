import React from 'react'
import { Outlet } from 'react-router-dom';

const PanelUserAdmin: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default PanelUserAdmin

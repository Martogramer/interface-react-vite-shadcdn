import React from 'react'
import DetailDocumentation from "@/features/details/DetailDocumentation";
import { Outlet } from 'react-router-dom'

const GuidePage:React.FC = () => {
  return (
    <>
      Guidepage
      <DetailDocumentation />
      <Outlet />
    </>
  )
}

export default GuidePage

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Pubilce_Routes = () => {
  const isloggined = localStorage.getItem("isLoggedIn");
  return !isloggined ? <Outlet/> : <Navigate to='/'/>   
   
  
}

export  {Pubilce_Routes}
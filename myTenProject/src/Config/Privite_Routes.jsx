import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Privite_Routes = () => {
  const isloggined = localStorage.getItem("isLoggedIn");
  return isloggined ? <Outlet/> : <Navigate to='/login'/>   
   
  
}

export  {Privite_Routes}
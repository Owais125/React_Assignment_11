import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { Login_Page } from '../Pages/Login_Page'
import { Privite_Routes } from './Privite_Routes'
import { Pubilce_Routes } from './Pubilce_Routes'



const Router_App = () => {
    const router =createBrowserRouter(
        createRoutesFromElements(
            <Route >
                <Route path='' element={<Privite_Routes/>}>
                <Route path='/' element={<Home/>}/>

                </Route>
                <Route  path='' element={<Pubilce_Routes/>} >

                <Route path='/login' element={<Login_Page/>}/>
                </Route>

          
            </Route>
        )
    )
    return (
        <div>
            <RouterProvider router={router}/>

        </div>
    )
}

export  {Router_App}
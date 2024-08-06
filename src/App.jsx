
import React from 'react'
import { createBrowserRouter, createRoutesFromElements,  Route, RouterProvider, } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import RootLayout from './Layout/RootLayout'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
    </Route>
  )
)

function App() {
  return (
  <RouterProvider router={router}/>
  )
}

export default App

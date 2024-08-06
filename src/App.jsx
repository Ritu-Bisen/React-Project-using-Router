
import React from 'react'
import { createBrowserRouter, createRoutesFromElements,  Route, RouterProvider, } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import RootLayout from './Layout/RootLayout'
import HelpLayout from './Layout/HelpLayout'
import Fqa from './pages/help/Fqa'
import Contact from './pages/help/Contact'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
     {/* <Route path='/' element={<Home/>}/>*/}
     <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      
        <Route path='help' element={<HelpLayout/>}>
          <Route path='fqa' element={<Fqa/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
    </Route>
  )
)

function App() {
  return (
  <RouterProvider router={router}/>
  )
}

export default App


import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
   <BrowserRouter>
   <header>
    <nav>
      <h1>Find JObs ?</h1>
      <Link to='/'>Home</Link>
      <NavLink to='about'>About</NavLink>
    </nav>
   </header>
   <main>
    <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />

      
    </Routes>
   </main>
   </BrowserRouter>
  )
}

export default App

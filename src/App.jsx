
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
   <BrowserRouter>
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

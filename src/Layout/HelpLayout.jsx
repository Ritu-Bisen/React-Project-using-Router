import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function HelpLayout() {
  return (
    <div className='helpLayout'>
        <h2>Website Help </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Eligendi magni, ipsa quos nihil architecto sunt numquam assumenda fuga,
             dolor tempore officiis sit sed sequi quis rerum inventore. Aliquid, fugiat laborum.</p>
      <nav>
        <NavLink to="fqa">view the FAQ</NavLink>
        <NavLink to='contact'>Contact Us</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default HelpLayout

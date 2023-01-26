import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HelpLayout() {
  return (
    <div className="help-layout">
        <h2>Webiste Help</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, consequatur?</p>
        
        <nav>
            <NavLink to="faq">View the FAQ</NavLink>
            <NavLink to="contact">Contact US</NavLink>
        </nav>

        <Outlet/>
    </div>
  )
}

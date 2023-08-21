import React, { useState } from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
   
    return (
        <div className='nav'>
            <div className="logo">
                <a href="/"><p className="logo-name">Shoestop</p></a>
            </div>

            <div className="links">
                <NavLink to={'/'} aria-current='page' className={({ isActive }) => (isActive ? 'active' : 'link')}> Home </NavLink>
                <NavLink to="/products" aria-current='page'className={({ isActive }) => (isActive ? 'active' : 'link')} >Products</NavLink>
                <NavLink to="/about" aria-current='page' className={({ isActive }) => (isActive ? 'active' : 'link')}>About Us</NavLink>

            </div>

            <div className="cred">
                <a href='/login' className='login'>
                    <p>Login</p>
                </a>
                <a href='/signup' className='signup'>
                    <p>SignUp</p>
                </a>
            </div>

        </div>
    )
}

export default Navbar
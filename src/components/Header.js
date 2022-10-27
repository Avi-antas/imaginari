import { useSelector, useDispatch } from 'react-redux'
import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import './App.scss'
function Header(props) {
    const updatecart = useSelector((state) => state.counterReducer)
  return (
    <div className='header'>
        <div className='logo'>
            <h1>imaginari</h1>
        </div>
        <div className='navbar'>
            <div className='nav-left'>
                <NavLink to="/" className='my-nav'>Home</NavLink>
                <NavLink to="/about" className='my-nav'>About</NavLink>
            </div>
            <div className='nav-right'>
                <div className='cart'>
                    <p>MyCart:{updatecart}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
import { useSelector} from 'react-redux'
import React, {useState} from 'react'
import { faShoppingBag, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

import {  NavLink, Link } from 'react-router-dom'
import './App.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Login from './Login'
import { Nav } from 'react-bootstrap'
function Header(props) {
    const updatecart = useSelector((state) => state.counterReducer)
    const [modalShow, setModalShow] = React.useState(false);
//    const navLinkStyle = ({isActive}) =>{
//     return{
//         fontWeight: isActive ? 'blod' : 'normal',
//         color:  isActive ? 'red' : 'white'
//     }
//    }
    return (
        <div className='header nav-sticky'>
            <div className='logo'>
                <NavLink to="/home" style={{textDecoration:'none'}}><h1 >imaginari</h1></NavLink>
            </div>
            <div className='navbar'>
                <div className='nav-left'>
                    <div className='nav-wrap'>
                        <NavLink to="/home" className='my-nav' >Home</NavLink>
                        <NavLink to="/about" className='my-nav' >About</NavLink>
                        <NavLink to="/admin" className='my-nav' >Admin</NavLink>
                    </div>

                    <div className='search'>
                        <input type="text" placeholder='Search product' />
                        <button>
                        <FontAwesomeIcon icon={faSearch} className="sar-icon" />
                        Search
                        </button>
                        <p  className='login' onClick={() => setModalShow(true)}> <FontAwesomeIcon icon={faUser} className="sar-icon" style={{martginRight:5}}/>Login</p>
                    </div>
                </div>
                <div className='nav-right'>

                    <div className='cart'>
                        <p><FontAwesomeIcon icon={faShoppingBag} className="site-icon" />&nbsp;My Cart: {updatecart}</p>
                    </div>
                </div>
                <Login 
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </div>
    )
}

export default Header
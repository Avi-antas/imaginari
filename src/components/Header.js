import { useSelector} from 'react-redux'
import React from 'react'
import { faShoppingBag, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

import {  NavLink } from 'react-router-dom'
import './App.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Login from './Login'
function Header(props) {
    const updatecart = useSelector((state) => state.counterReducer)
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className='header nav-sticky'>
            <div className='logo'>
                <h1>imaginari</h1>
            </div>
            <div className='navbar'>
                <div className='nav-left'>
                    <div className='nav-wrap'>
                        <NavLink to="/" className='my-nav'>Home</NavLink>
                        <NavLink to="/about" className='my-nav'>About</NavLink>
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